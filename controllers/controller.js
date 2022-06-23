const { User , UserIdentity }= require('../models')
const formatDate = require('../Helper/helper')
class Controller{


    static home(req, res){
        res.render('home')
    }

    static profile(req, res){
        const id = +req.params.id

        const options = {
            include:[User],
            where: {
                UserId : 3
            } 
        }
        UserIdentity.findOne(options)
        .then(data => {
            res.render('profileUser' , {data, formatDate})
        })
        .catch((err) => {
            res.send(err)
        });
    }
}

module.exports = Controller