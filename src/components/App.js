import React from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.jsx';
import EditPofilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Login from './Login.js';
import Register from './Register.js';
import InfoTooltip from './InfoTooltip.js';
import ProtectedRoute from './ProtectedRoute';
import * as mestoAuth from './mestoAuth';

function App() {

  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [editProfileIsOpen , isEditProfilePopupOpen] = React.useState(false)
  const [addCardIsOpen , isAddPlacePopupOpen] = React.useState(false)
  const [editAvatarIsOpen , isEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({state:false, src: ''});
  const [infoTooltipIsOpen , isinfoTooltipOpen] = React.useState(false)
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

  function handleRegisterClick(password, email) {
    isinfoTooltipOpen(true)
    console.log(password, email)
    mestoAuth.register(password, email)
      .then(data => {
        if (data) {
          setCurrentUser({
            _id: data._id,
            email: data.email
          })
          history.push('/sign-in')
        }
      })
      .catch(err => console.log(err))
  }

  function handleLoginClick(password, email) {
    mestoAuth.authorization(password, email)
      .then(data => {
        if(data.token) {
          localStorage.setItem('token', data.token)
          setCurrentUser({
            token: data.token
          })
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
        tokenCheck()
  },[])

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <Header />
    <Switch>
      <Route path="/sign-in">
        <Login handleLogin={handleLoginClick}/>
      </Route>
      <Route path="/sign-up">
        <Register handleRegister={handleRegisterClick}/>
      </Route>
      <ProtectedRoute path="/" component={
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddCardClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} 
        cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}>
        </Main>
      }  loggedIn={loggedIn}>
      </ProtectedRoute>
      <Route path="/">
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

export default App;
