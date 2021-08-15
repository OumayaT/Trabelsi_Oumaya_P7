const express = require('express')
const router = express.Router() //// Appel du routeur avec la méthode mise à disposition par Express

//Ajout de fonction pour la création des posts
const postsCtrl = require('../controllers/posts')
const commentsCtrl = require('../controllers/comments')
const likesCtrl = require('../controllers/likes')

// IMPORTATION MIDDLEWARES
const auth = require('../middleware/auth')  
const multer = require('../middleware/multer-config')



//Création des différentes ROUTES de l'API 
router.post('/', auth, multer, postsCtrl.createPost)
router.get('/:id', auth, postsCtrl.getOnePost)
router.get('/', auth, postsCtrl.getAllPosts)
router.put('/:id', auth, multer, postsCtrl.modifyPost)
router.delete('/:id', auth, postsCtrl.deletePost)

router.post('/:postId/comments', auth, commentsCtrl.createComment)
router.get('/:postId/comments/:id', auth, commentsCtrl.getOneComment)
router.get('/:postId/comments/', auth, commentsCtrl.getAllComments)
router.put('/:postId/comments/:id', auth, commentsCtrl.modifyComment)
router.delete('/:postId/comments/:id', auth, commentsCtrl.deleteComment)

router.post('/:postId/likes', auth, likesCtrl.likeOnePost)
router.get('/:postId/like', auth, likesCtrl.getLikeOnOnePost)
router.get('/:postId/likes', auth, likesCtrl.getAllLikesOfOnePost)

module.exports = router
