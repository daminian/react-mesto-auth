import React from 'react';
import { withRouter } from 'react-router-dom';

function Login() {

  const [data, setData] = React.useState({
    password: '',
    email: ''
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit(e) {
      e.preventDefault();

    }

    return (
      <div className="login">
        <p className="login__welcome">
          Вход
        </p>
        <form onSubmit={handleSubmit} className="login__form">
          <input required className="login__input" id="email" name="email" type="email" value={data.email || ''} onChange={handleChange} />
          <label htmlFor="email"></label>
          <input required className="login__input" id="password" name="password" type="password" value={data.password || ''} onChange={handleChange} />
          <label htmlFor="password"></label>
          <div className="login__button-container">
            <button type="submit" className="login__button" >Войти</button>
          </div>
        </form>
      </div>
    )

  }
  
  export default withRouter(Login);