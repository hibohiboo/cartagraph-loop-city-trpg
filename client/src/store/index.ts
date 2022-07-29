import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/domain/firebase'
import {
  initJourneyEntity,
  persistJourneyMiddleWare,
} from '@/domain/journey/repository'
import {
  authSlice,
  eventTablesSlice,
  journeysSlice,
  paragraphsSlice,
  previewSlice,
} from './slices'
import { login } from './slices/auth'
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journeys: journeysSlice.reducer,
    paragraphs: paragraphsSlice.reducer,
    eventTables: eventTablesSlice.reducer,
    preview: previewSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistJourneyMiddleWare),
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

// 初期値の復元
initJourneyEntity(store.dispatch)
