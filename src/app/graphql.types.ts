/*

  Spring Boot GraphQL API:

  type Query {
      emails: [Email],
      emailById(id: ID!): Email
  }

  type Mutation {
      saveEmail(email: EmailInput): Email
  }

  input EmailInput {
      senderEmail: String!
      senderName: String!
      message: String!
  }

  type Email {
      id: ID!
      senderEmail: String!
      senderName: String!
      message: String!
      date: String!
  }

 */

type EmailInput = {
  senderEmail: String,
  senderName: String,
  message: String,
}

type ClickInput = {
  linkName: String
}

export { EmailInput }
