const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookID: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type book {
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      bookId: ID!
    ): Book
    deleteBook (bookId: ID!): User 
  }
`;

module.exports = typeDefs;