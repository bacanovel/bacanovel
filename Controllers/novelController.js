const { Novel } = require('../models')
const formatDate = require('../Helper/helper')

class Controller{


    static novelList(req, res){

        Novel.findAll()
        .then(data =>{
            res.render('novelList' ,{data , formatDate})
        })
    }

    static getaddNovel(req,res){
        res.render('addNovel')
    }

    static postaddNovel(req,res){
         const { title, authorName, imageURL,description } = req.body
         let newdataId;
         Novel.findAll()
         .then(data =>{
             newdataId = data.length
             return Novel.create({ title, authorName, imageURL,description } )
         })
         .then(data=>{
            console.log(newdataId)
            console.log(data.length)
            res.redirect(`/novels/${newdataId}/detail`)
         })
    }
    static novelDetail(req,res){
        const id = +req.params.id
        const options = {where: id}

        Novel.findOne(options)
        .then(data =>{
            res.render('readNovel' ,{data, formatDate})
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static getEditNovel(req,res){
        const id = +req.params.id
        const options = {where: id}
        Novel.findOne(options)
        .then(data =>{
            res.render('editNovel' ,{data, formatDate})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static postEditNovel(req,res){
        const id = +req.params.id
        const options = {where: {id: id}}
        const { title, authorName, imageURL, createdAt ,description } = req.body
        Novel.update({ title, authorName, imageURL, createdAt ,description },options)
        .then((data)=>{
            console.log(data)
            res.redirect(`/novels/${id}/detail`)
        })
        .catch(err=>{
            console.log(err)
            res.send(err)
        })
    }

}

module.exports = Controller