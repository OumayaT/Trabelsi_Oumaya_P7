const multer = require('multer') // Importter multer

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
}

//création d'un objet de configuration pour multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => { // Indique emplacement d'enregistrement des fichiers
    console.log(file)
    callback(null, 'public')
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_') //éliminer les espaces du nom d'origine
    const extension = MIME_TYPES[file.mimetype]
    callback(null, name + Date.now() + '.' + extension) //Genère le nom complet du fichier- Nom d'origine + numero unique + . + extension
  }
})

// Export de l'élément multer, seuls les fichiers de type image seront gérés
module.exports = multer({ storage: storage }).single('image')
