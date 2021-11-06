const router = require('express').Router();
const { 
  addThought,
  removeThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/').get(getAllThoughts).post(addThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;