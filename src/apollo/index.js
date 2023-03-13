import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, concat } from 'apollo-link'

const httpLink = new HttpLink({ uri: 'https://cv-project-js.inno.ws/api/graphql' })

const getNewToken = async () => {
  try {
    fetch('https://cv-project-js.inno.ws/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `query getUsers($auth: AuthInput!) {
          login(auth: $auth) {
              user {
              email
              }, access_token
          }
      }`,
        variables: {
          auth: {
            email: 'aleksandr_kalinin_1995@mail.ru',
            password: '123456'
          }
        }
      })
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('token', res.data.login.access_token)
        return res.data.login.access_token
      })
  } catch (error) {
    console.log(error)
  }
}

const authMiddleware = new ApolloLink((operation, forward) => {
  let token = localStorage.getItem('token')
  if (!token) {
    token = getNewToken()
  }
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })
  return forward(operation)
})
export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
})
