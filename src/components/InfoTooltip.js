import React from 'react';

const InfoTooltip = ({isOpen, onClose}) => {
    return (
        <section className={`popup ${isOpen ? ("popup_opened"):("")}`}>
        <div className="popup__container">
            <div className="popup__form">
                <button type="button" className="popup__close" onClick={onClose}></button>
                <div alt="" className="popup__image"></div>
                <p className="popup__text">Вы успешно зарегистрировались!</p>
            </div>
        </div>
        </section>
    )
}

export default InfoTooltip