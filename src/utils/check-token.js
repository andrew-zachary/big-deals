import jwt_decode from "jwt-decode";

const checkAuth = () => {
    let auth = {};
    let token = localStorage.getItem("bd-token");
    let ids = localStorage.getItem("bd-user-ids")?{...JSON.parse(localStorage.getItem("bd-user-ids"))}:"";
    if (token !== null && token !== "undefined" && token !== "" && ids !== "") {
        if (!jwt_decode(token).exp < Date.now() / 1000) {
            auth.state = true;
            auth.data = ids;
            return auth;
        }
    }
}

export default checkAuth;