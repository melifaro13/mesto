export class UserInfo {
    constructor({ nameSelector, infoSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement = document.querySelector(infoSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._infoElement.textContent,
        }
    }

    setUserId(id) {
        this._id = id;
    }
    
    getUserId() {
        return this._id;
    }

    setUserInfo({ name, about }) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = about;
      }
    
    setUserAvatar(avatar) {
        this._avatarElement.src = avatar;
    }
}