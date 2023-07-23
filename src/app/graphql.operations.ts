import { gql } from 'apollo-angular';

/*

  Operations from Spring Boot:

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

const SAVE_EMAIL = gql`
  mutation saveEmail($email: EmailInput!) {
    saveEmail(email: $email) {
      id
      senderEmail
      senderName
      message
      date
    }
  }
`;

const GET_EMAILS = gql`
  query getEmails {
    emails {
      id
      senderEmail
      senderName
      message
      date
    }
  }
`;

const GET_EMAIL_BY_ID = gql`
  query getEmailById($id: ID!) {
    emailById(id: $id) {
      id
      senderEmail
      senderName
      message
      date
    }
  }
`;

export { SAVE_EMAIL, GET_EMAILS, GET_EMAIL_BY_ID }
