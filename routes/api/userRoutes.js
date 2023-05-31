const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend

} = require('../../controllers/userController')

router.route('/users').get(getUsers).post(createNewUser)
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)
router.route('/users/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router