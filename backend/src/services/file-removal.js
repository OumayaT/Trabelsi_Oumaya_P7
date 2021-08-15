const fs = require('fs')  // Permet de gérer les fichiers stockés

function deleteFile (imageUrl) {
  if (!imageUrl) return
  const filename = imageUrl.split('/public/')[1]
  fs.unlink(`public/${filename}`, () => {})
}

module.exports = {
  deleteFile
}
