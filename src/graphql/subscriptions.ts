/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onCreateConversation(filter: $filter) {
      id
      name
      messages {
        items {
          id
          conversationId
          createdAt
          updatedAt
          conversationMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onUpdateConversation(filter: $filter) {
      id
      name
      messages {
        items {
          id
          conversationId
          createdAt
          updatedAt
          conversationMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onDeleteConversation(filter: $filter) {
      id
      name
      messages {
        items {
          id
          conversationId
          createdAt
          updatedAt
          conversationMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      conversationId
      content {
        type
        message
      }
      createdAt
      conversation {
        id
        name
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      conversationMessagesId
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      conversationId
      content {
        type
        message
      }
      createdAt
      conversation {
        id
        name
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      conversationMessagesId
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      conversationId
      content {
        type
        message
      }
      createdAt
      conversation {
        id
        name
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      conversationMessagesId
    }
  }
`;
