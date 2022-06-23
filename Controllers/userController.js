class Controller{


    static register(req, res){
        res.send('register')
    }

    static saveRegistration(req,res){
        // res.send('register')

    }
    static userProfile(req,res){
        res.send('profile')
    }
}

module.exports = Controller