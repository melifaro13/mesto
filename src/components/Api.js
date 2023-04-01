export class Api {
    constructor(option) {
        this._baseUrl = option.baseUrl; 
        this._headers = option.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    // Получение информации о пользователе с сервера
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers
        })
        .then(res => this._checkResponse(res));
    }

    // Получение карточек с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: this._headers
        })
        .then(res => this._checkResponse(res));
    }

    // Редактирование информации о пользователе
    editProfile(data) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify(data)
        })
        .then(res => this._checkResponse(res));
    }

    // Добавление новой карточки через попап
    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify(data)
        })
        .then(res => this._checkResponse(res));
    }

    // Удаление карточки
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        })
        .then(res => this._checkResponse(res));
    }

    // Ставим лайк карточке
    putLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'PUT',
          headers: this._headers
        })
        .then(res => this._checkResponse(res));
    }
  
      // Удаляем лайк
      deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'DELETE',
          headers: this._headers
        })
        .then(res => this._checkResponse(res));
    }
  
    // Редактирование аватара пользователя через попап
    editProfileAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
      })
      .then(res => this._checkResponse(res));
  }
}
