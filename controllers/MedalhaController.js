const {Medalha} = require('../models');


module.exports = {

    listar: async (req,res,next) =>{
        try {
            let medalhas = await Medalha.findAll({

            });
            res.send(medalhas)
            } catch (error) {
            console.log(error)
        }
    },

    salvar: async(req,res) =>{
        try {
            let {
                id_post,
                remetente_id
            }=req.body;

            const salvar = await Medalha.create({
                id_post,
                remetente_id
            });
            res.send("Medalha dada!")
        } catch (error) {
            console.log(error)
        }
    }, excluir: async(req,res) =>{
        try {
            let {
                id
            }=req.body;

            const salvar = await Medalha.destroy({
               where:{id}
            });
            res.send("Medalha excluída.")
        } catch (error) {
            console.log(error)
        }
    },




}