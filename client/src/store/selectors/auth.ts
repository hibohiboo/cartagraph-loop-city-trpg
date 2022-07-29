import { createSelector } from 'reselect'
import { RootState } from '../index'

export const authSelector = (state: RootState) => state.auth

export const uidSelector = createSelector(authSelector, (auth) => {
  return auth.uid
})

export const isUserAuthenticatedSelector = createSelector(
  authSelector,
  (auth) => {
    return auth.authenticated
  },
)

export const errorSelector = createSelector(authSelector, (auth) => {
  return auth.error
})
