import { graphql } from 'react-apollo'

import { mutate as mutation } from 'lib/graphql'

/* Typings */
import * as Schema from 'lib/graphql/schema'

import { AuthServerProps, AuthSocialProps, WithRouter } from './types'

export const loginSocial = graphql<Schema.LoginWithAuth0Mutation, {}, WithRouter>(mutation.LoginWithAuth0, {
  alias: 'loginSocial',
  props: props => ({
    loginSocialUser: ({ idToken }: Schema.LoginUserWithAuth0Input) => props.mutate({
      variables: { input: { idToken } }
    }).then(
      ({ data }) => ({ ...data.loginUserWithAuth0.user }))
  })
})

export const updateUser = graphql<Schema.UpdateUserMutation, {}, AuthServerProps | AuthSocialProps>(
    mutation.UpdateUser, {
    alias: 'updateUser',
    props: props => ({
      updateUser: ({ ...user }: Schema.UpdateUserInput) => props.mutate({
        variables: { input: { ...user } }
      }).then(
        ({ data }) => ({ ...data.updateUser.changedUser })
      )
    })
  }
)

export const createUser = graphql<Schema.CreateUserMutation, {}, AuthServerProps>(mutation.CreateUser, {
  alias: 'createUser',
  props: props => ({
    createUser: (user: Schema.CreateUserInput) => props.mutate({
      variables: { input: { ...user } }
    }).then(
      ({ data: { createUser: { token, changedUser }} }) => ({ token, changedUser })
    )
  })
})

export const deleteUser = graphql<Schema.UpdateUserMutation, {}, AuthSocialProps>(mutation.DeleteUser, {
  alias: 'deleteUser',
  props: props => ({
    deleteUser: (id: Schema.DeleteUserInput) => props.mutate({
      variables: { input: { id } }
    })
  })
})

export const login = graphql<Schema.LoginUserMutation, {}, AuthServerProps>(mutation.LoginUser, {
  props: props => ({
    alias: 'login',
    loginUser: (credentials: Schema.LoginUserInput) => props.mutate({
      variables: { input: { ...credentials } }
    }).then(
      ({ data: { loginUser: { token, user }} }) => ({ token, user })
    )
  })
})

export const forgotPassword = graphql<Schema.ForgotPasswordMutation, {}, AuthServerProps>(mutation.ForgotPassword, {
  alias: 'forgotPassword',
  props: props => ({
    forgotPassword: (newCredentials: Schema.ChangeUserPasswordInput) => props.mutate({
      variables: { input: { ...newCredentials } }
    }).then(
      ({ data }) => ({ ...data.changeUserPassword.changedUser })
    )
  })
})
