export default class LocalStorageManager {
  static setUserToken(userToken) {
    localStorage.setItem('JWT', JSON.stringify(userToken));
  }

  static removeUserToken() {
    localStorage.removeItem('JWT');
  }

  static getUserToken() {
    return JSON.parse(localStorage.getItem('JWT'));
  }
}
