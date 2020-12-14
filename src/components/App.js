import React from 'react';
import { Route, Redirect, Switch, useHistory, withRouter } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import EditPofilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';
import * as mestoAuth from '../utils/mestoAuth';
import success from '../images/success.svg';
import error from '../images/error.svg';

function App() {

  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [editProfileIsOpen , isEditProfilePopupOpen] = React.useState(false)
  const [addCardIsOpen , isAddPlacePopupOpen] = React.useState(false)
  const [editAvatarIsOpen , isEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({state:false, src: ''});
  const [infoTooltipIsOpen , isinfoTooltipOpen] = React.useState({state: false, text: '', src: ''})
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();

  function handleCardClick(props) {
    setSelectedCard({state: true, src: props.link, name: props.name})
  }

  function handleEditProfileClick() {
    isEditProfilePopupOpen(true)
  }

  function handleAddCardClick() {
    isAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    isEditAvatarPopupOpen(true)
  }

  
  function closeAllPopups() {
    isEditProfilePopupOpen(false)
    isAddPlacePopupOpen(false)
    isEditAvatarPopupOpen(false)
    isinfoTooltipOpen(false)
    setSelectedCard({state:false})
  }

  function handleUpdateUser({name, about}) {
    api.updateProfileInfo({name, about})
    .then((user) => {
      setCurrentUser(user)
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err)
    })   
  }

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar)
    .then((avatar) => {
     setCurrentUser(avatar)
     closeAllPopups()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter((item) => {
        return item._id !== card._id
      });
        setCards(newCards);
      })
    .catch((err) => {
      console.log(err)
    })
  }
  
  function handleAddPlaceSubmit(card) {
    api.postNewCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards])
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  React.useEffect(() => {
    api.getAppInfo()
        .then((data) => {
            data = {cards: data[0],user: data[1]}
            const userInfo = ({
                name: data.user.name,
                about: data.user.about,
                avatar: data.user.avatar,
                _id: data.user._id
            })
            const cardsList = data.cards.map((item) => ({
              _id: item._id,
              name: item.name,
              likes: item.likes,
              link: item.link,
              owner: item.owner
            }))
            setCurrentUser(userInfo)
            setCards(cardsList)
        })
        .catch((err) => {
            console.log(err)
        })
  },[])

  React.useEffect(() => {
    tokenCheck()
  },[])

  function handleRegisterClick(password, email) {
    mestoAuth.register(password, email)
      .then(data => {
        if (data) {
          localStorage.setItem('email', data.data.email)
          setCurrentUser({
            ...currentUser,
            email: data.data.email
          })
          isinfoTooltipOpen({
            state: true,
            text: 'Вы успешно зарегистрировались!',
            src: success
          })
          history.push('/sign-in')
        }
      })
      .catch(err => {
        console.log(err)
        isinfoTooltipOpen({
          state: true,
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
          src: error
        })
      })
  }

  function handleLoginClick(password, email) {
    mestoAuth.authorization(password, email)
      .then(data => {
        if(data.token) {
          localStorage.setItem('token', data.token)
          setLoggedIn(true)
          history.push('/')
        }
        
      })
      .catch(err => console.log(err));
  }

  function tokenCheck() {
    const token = localStorage.getItem('token')
    mestoAuth.getContent(token)
    .then(res => {
      if(res.data.email) {
        setLoggedIn(true)
        history.push('/')
      }
    })
    .catch(err => console.error(err))
  }

  const handleLogoutClick = () => {
    localStorage.clear('token')
    localStorage.clear('email')
    setLoggedIn(false)
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <Header onLinkClick={handleLogoutClick} linkText={'Выйти'}/>
    <Switch>
      <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main} onEditProfile={handleEditProfileClick} onAddPlace={handleAddCardClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} 
    cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
      <Route path="/sign-in">
        <Login handleLogin={handleLoginClick}/>
      </Route>
      <Route path="/sign-up">
        <Register handleRegister={handleRegisterClick}/>
      </Route>
      <Route>
        {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
      </Route>
    </Switch>
    <Footer />
    <EditPofilePopup isOpen={editProfileIsOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
    <EditAvatarPopup isOpen={editAvatarIsOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
    <AddPlacePopup isOpen={addCardIsOpen} onClose={closeAllPopups} onAddPlaseSubmit={handleAddPlaceSubmit}/>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    <InfoTooltip isOpen ={infoTooltipIsOpen} onClose={closeAllPopups}/>
  </CurrentUserContext.Provider>
  );
}

export default withRouter(App);