"use strict"
const { Op } = require("sequelize");
const { Author, User, Novel, UserIdentity } = require("../models")
class novelController {
    static readList(req, res) {
        Novel.findAll()
            .then(data => {
                // res.send(data)
                res.render('readNovel', { data })
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
    static addForm(req, res) {
        Novel.findAll()
            .then(data => {
                // res.send(data)
                res.render('addNovel', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static addNovel(req, res) {
        const { title, imageUrl, description, authorName } = req.body
        // console.log(req.body)
        Novel.create({
            title,
            imageUrl,
            description,
            authorName
        })
            .then(() => {
                res.redirect('/novels')
            })
            .catch(err => {
                res.send(err)
            })
    }

}
module.exports = novelController