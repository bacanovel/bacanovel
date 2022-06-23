

const { Novel } = require('../models')
const formatDate = require('../Helper/helper')

class novelController {
    static home(req, res) {
        let id = req.session.iduser
        res.render("novelList", { id });
    }
    static novelList(req, res) {
        const { search } = req.query
        // console.log(search)
        Novel.List(search)
            .then(data => {
                res.render('novelList', { data, formatDate })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getaddNovel(req, res) {
        res.render('addNovel')
    }

    static postaddNovel(req, res) {
        const { title, authorName, imageUrl, description } = req.body
        console.log(req.body)
        let newdataId;
        Novel.findAll()
            .then(data => {
                newdataId = data.length + 1
                return Novel.create({ title, authorName, imageUrl, description })
            })
            .then(data => {
                // console.log(newdataId)
                res.redirect(`/novels/${newdataId}/detail`)
            })
    }
    static novelDetail(req, res) {
        const id = +req.params.id
        const options = { where: id }
        // console.log(req.session)
        if (!req.session.iduser) {
            res.redirect('/login')
        } else {
            Novel.findOne(options)
                .then(data => {
                    res.render('readNovel', { data, formatDate })
                })
                .catch(err => {
                    res.send(err)
                })
        }
    }
    static getEditNovel(req, res) {
        const id = +req.params.id
        const options = { where: id }
        if (req.session.roleuser != 'admin') {
            res.send('unauthorize access')
            //alert error
        } else {
            Novel.findOne(options)
                .then(data => {
                    res.render('editNovel', { data, formatDate })
                })
                .catch(err => {
                    res.send(err)
                })
        }
    }

    static postEditNovel(req, res) {
        const id = +req.params.id
        const options = { where: { id: id } }
        const { title, authorName, imageURL, createdAt, description } = req.body

        Novel.update({ title, authorName, imageURL, createdAt, description }, options)
            .then((data) => {
                console.log(data)
                res.redirect(`/novels/${id}/detail`)
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })

    }

}


module.exports = novelController

