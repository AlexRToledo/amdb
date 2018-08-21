const config = require('../config');

const view = __dirname + config.view_path;
const path = config.path;
let logguer = true;

class MainController {
    constructor($app) {
        this.app = $app;
    }

    Router(){
        this.app.get(`${path}`,                      this.Index);
        this.app.get(`${path}/login`,                this.Login);
        this.app.post(`${path}/login`,               this.LoginAction);
    }

    async Index(req, res, next) {
        if(logguer !== false) {
            // logguer = false;
            res.render(`${view}/index`);
        } else {
            res.redirect(`${path}/login`);
        }
    }

    async Login(req, res) {
        res.render(`${view}/login`);
    }

    async LoginAction(req, res) {
        try {
            if(req.body.username === config.credentials.user && req.body.password === config.credentials.password) {
                req.flash = {
                    class: "alert-success",
                    msg: "Welcome."
                };
                logguer = true;
                res.redirect(`${path}`);
            } else {
                req.flash = {
                    class: "alert-danger",
                    msg: "Bad Credentials, password or username incorrect."
                };
                res.redirect(`${path}/login`);
            }
        } catch (e) {
            req.flash = {
                class: "alert-danger",
                msg: "An error has occurred."
            };
            res.redirect(`${path}/login`);
        }
    }
}

module.exports = MainController;