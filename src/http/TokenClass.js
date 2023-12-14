class HttpToken {
    constructor() {
        this.token = ''
    }
    getToken() {
        return this.token;
    }
    setToken(newToken) {
        if (newToken === '') {
            throw 'The token cannot be empty';
        }
        this.token = newToken;
    }
}

export default new HttpToken

