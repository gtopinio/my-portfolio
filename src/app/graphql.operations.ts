import { gql } from 'apollo-angular';

/*

  Operations from Spring Boot:

  type Query {
    emails: [Email],
    emailById(id: ID!): Email,
    clicks: [Click],
}

type Mutation {
    saveEmail(email: EmailInput): Email,
    saveClick(click: ClickInput): Click
}

input EmailInput {
    senderEmail: String!
    senderName: String!
    message: String!
}

input ClickInput {
    linkName: String!
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
      senderEmail
      senderName
      message
      date
    }
  }
`;

const SAVE_CLICK = gql`
  mutation saveClick($click: ClickInput!) {
    saveClick(click: $click) {
      linkName
      ipAddress
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

export { SAVE_EMAIL, GET_EMAILS, GET_EMAIL_BY_ID, SAVE_CLICK }
