
//Class for authentication, token monitoring, and member identification
//Design pattern SingletonClass
class _Auth {
    public _userId: any;
    public _token: any;
    public _role: any;

    constructor() {
        this._userId = localStorage.getItem('userId') || ""
        this._token = localStorage.getItem('token') || ""
        this._role = localStorage.getItem('role') || ""
    }
    setToken(token: any) {
        localStorage.setItem('token', token)
        this._token = token
    }
    setUserId(userId: any) {
        localStorage.setItem('userId', userId);
        this._userId = userId;
    }
    setRole(role: any) {
        localStorage.setItem('role', role);
        this._role = role;
    }
    getToken(): any {
        return this._token;
    }
    getUserId(): any {
        return this._userId;
    }
    getRole() {
        return this._role;
    }



    clearAll() {
        // remove user from local storage to log user out

        this._token = "";
        localStorage.clear()
        window.location.reload();
    }

    isAuth() {

        return Boolean(this._token)
    }




}

export default new _Auth()
