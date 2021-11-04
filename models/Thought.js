const ReactionSchema = new Schema(
  {
    reactionId: {},
    reactionBody: {},
    username: {},
    createdAt: {},
  },
  {
    toJSON: {},
  }
);

const ThoughtSchema = new Schema({
  thoughtText: {},
  createdAt: {},
  username: {},
});

// create Thought model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
