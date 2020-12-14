import React from 'react';

const InfoTooltip = ({isOpen, onClose}) => {
    return (
        <section className={`popup ${isOpen.state ? ("popup_opened"):("")}`}>
        <div className="popup__container">
            <div className="popup__form">
                <button type="button" className="popup__close" onClick={onClose}></button>
                <img alt="" className="popup__error-image" src={isOpen.src}></img>
                <p className="popup__text">{isOpen.text}</p>
            </div>
        </div>
        </section>
    )
}

export default InfoTooltip