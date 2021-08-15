const db = require('../../src/models')
const jwt = require('jsonwebtoken') // Import token d'authentification
const { User } = db.sequelize.models

//Middleware d'authentification
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1] 
    const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET)
    const userId = decodedToken.userId  //Le token devient un objet JS classique qu'on place dans une constante, et on y récupère l'user ID pour comparaison
    if (req.body.userId && req.body.userId !== userId) {
      throw 'User ID non valable !'
    } else {
      User.findOne({ where: { id: userId } }).then(user => {
        req.user = user
        next()
      })
    }
  } catch (error) { // probleme d'autentification si erreur on renvoie le statut 401 non autorisé
    res.status(401).json({
      error: new Error('Requête non authentifiée !')
    })
  }
}
