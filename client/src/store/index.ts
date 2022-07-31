import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/domain/firebase'
import { spreadsheetApi } from './api/spreadsheetApi'
import { authSlice } from './slices'
import { login } from './slices/auth'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,

    [spreadsheetApi.reducerPath]: spreadsheetApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spreadsheetApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const refresh = async (uid: string) => {
  const userData = {
    uid,
  }
  return store.dispatch(login(userData))
}
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    store.dispatch(login({}))
  }

  if (user) {
    return await refresh(user.uid)
  }
})
