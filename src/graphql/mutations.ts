/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      conversation {
        id
        owner
        userId {
          id
          owner
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
        }
        content
        messages {
          nextToken
        }
        createdAt
        updatedAt
        userConversationsId
      }
      createdAt
      updatedAt
      conversationMessagesId
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      conversation {
        id
        owner
        userId {
          id
          owner
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
        }
        content
        messages {
          nextToken
        }
        createdAt
        updatedAt
        userConversationsId
      }
      createdAt
      updatedAt
      conversationMessagesId
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      conversation {
        id
        owner
        userId {
          id
          owner
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
        }
        content
        messages {
          nextToken
        }
        createdAt
        updatedAt
        userConversationsId
      }
      createdAt
      updatedAt
      conversationMessagesId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      owner
      name
      email
      emailVerified
      image
      hashedPassword
      createdAt
      updatedAt
      accounts {
        items {
          id
          owner
          type
          provider
          providerAccountId
          refresh_token
          access_token
          expires_at
          token_type
          scope
          id_token
          session_state
          createdAt
          updatedAt
          userAccountsId
        }
        nextToken
      }
      conversations {
        items {
          id
          owner
          content
          createdAt
          updatedAt
          userConversationsId
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      owner
      name
      email
      emailVerified
      image
      hashedPassword
      createdAt
      updatedAt
      accounts {
        items {
          id
          owner
          type
          provider
          providerAccountId
          refresh_token
          access_token
          expires_at
          token_type
          scope
          id_token
          session_state
          createdAt
          updatedAt
          userAccountsId
        }
        nextToken
      }
      conversations {
        items {
          id
          owner
          content
          createdAt
          updatedAt
          userConversationsId
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      owner
      name
      email
      emailVerified
      image
      hashedPassword
      createdAt
      updatedAt
      accounts {
        items {
          id
          owner
          type
          provider
          providerAccountId
          refresh_token
          access_token
          expires_at
          token_type
          scope
          id_token
          session_state
          createdAt
          updatedAt
          userAccountsId
        }
        nextToken
      }
      conversations {
        items {
          id
          owner
          content
          createdAt
          updatedAt
          userConversationsId
        }
        nextToken
      }
    }
  }
`;
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      owner
      userId {
        id
        owner
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        accounts {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      type
      provider
      providerAccountId
      refresh_token
      access_token
      expires_at
      token_type
      scope
      id_token
      session_state
      createdAt
      updatedAt
      userAccountsId
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      owner
      userId {
        id
        owner
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        accounts {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      type
      provider
      providerAccountId
      refresh_token
      access_token
      expires_at
      token_type
      scope
      id_token
      session_state
      createdAt
      updatedAt
      userAccountsId
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      owner
      userId {
        id
        owner
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        accounts {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      type
      provider
      providerAccountId
      refresh_token
      access_token
      expires_at
      token_type
      scope
      id_token
      session_state
      createdAt
      updatedAt
      userAccountsId
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      owner
      userId {
        id
        owner
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        accounts {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      content
      messages {
        items {
          id
          content
          createdAt
          updatedAt
          conversationMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userConversationsId
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      owner
      userId {
        id
        owner
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        accounts {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      content
      messages {
        items {
          id
          content
          createdAt
          updatedAt
          conversationMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userConversationsId
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      owner
      userId {
        id
        owner
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        accounts {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      content
      messages {
        items {
          id
          content
          createdAt
          updatedAt
          conversationMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userConversationsId
    }
  }
`;
