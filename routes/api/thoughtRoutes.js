const router = require('express').Router();
const {
getThoughts,
getSingleThought,
createNewThought,
updateThought,
deleteThought,
postReaction,
deleteReaction
} = require ('../../controllers/thoughtController')
router.route('/thoughts').get(getThoughts).post(createNewThought)
router.route('/:thoughtid').get(getSingleThought).put(updateThought).delete(deleteThought)
router.route('/api/thoughts/:thoughtId/reactions').post(postReaction).delete(deleteReaction)
module.exports = router