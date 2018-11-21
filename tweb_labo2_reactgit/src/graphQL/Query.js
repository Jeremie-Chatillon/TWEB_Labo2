import gql from 'graphql-tag'

const GET_REPOSITORY  = function(owner, name, count, after){

  ret = `query {
    repository(owner: $owner, name: $name) {
      issues(first: 10, after:"") {
        totalCount
        edges {
          cursor
          node {
            title
            state
            author { login avatarUrl }
            body
            createdAt
            comments {
              totalCount

            }
          }
        }
      }
    }
  }`

}