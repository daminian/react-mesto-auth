import React from 'react';
import { Link } from 'react-router-dom';

function Register({handleRegister}) {
    
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
    let {password, email} = data
    handleRegister(password, email)
  }

  return(
    <div className="register">
      <p className="register__welcome">
        Регистрация
      </p>
      <form className="register__form" onSubmit={handleSubmit}>
        <input required className="register__input" id="email" name="email" type="email" value={data.email} onChange={handleChange} />
        <label htmlFor="email"></label>
        <input required className="register__input" id="password" name="password" type="password" value={data.password} onChange={handleChange} />
        <label htmlFor="password"></label>
        <div className="register__button-container">
          <button type="submit" className="register__button" >Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signin">
        <Link to="/sign-in" className="register__link">Уже зарегистрированы? Войти</Link>
      </div>
    </div>
  )
}
  
  export default Register;