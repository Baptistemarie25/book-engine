const { Book, User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, { username }) => {
        return User.findOne({ username }).populate('thoughts');
      },
  },
    Mutation: {
        createUser: async (parent, args) => {
        return await User.create(args);
        },
        saveBook: async (parent, { user, book }) => {
            console.log(user);
        try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { savedBooks: book } },
            { new: true, runValidators: true }
        );
        return updatedUser;
        } catch (err) {
        console.log(err);
        return err
        }
        },
        deleteBook: async (parent, { user, book }) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: params.bookId } } },
                { new: true }
            );
            if (!updatedUser) {
                return res.status(404).json({ message: "Couldn't find user with this id!" });
            }
            return res.json(updatedUser);
        },
    }
};

module.exports = resolvers;