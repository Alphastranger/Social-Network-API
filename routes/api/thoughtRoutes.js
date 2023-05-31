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
router.route('/').get(getThoughts).post(createNewThought)
router.route('/:thoughtid').get(getSingleThought).put(updateThought).delete(deleteThought)
router.route('/:thoughtId/reactions').post(postReaction).delete(deleteReaction)
module.exports = router