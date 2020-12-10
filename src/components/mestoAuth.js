export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponce = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": `${password}`,
            "email": `${email}`})
    })
    .then(checkResponce)
};