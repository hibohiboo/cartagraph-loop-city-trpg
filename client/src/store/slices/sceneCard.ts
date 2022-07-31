import { createSlice } from '@reduxjs/toolkit'
import { sceneCardAdapter } from '../api/spreadsheetApi'

export const sceneCardSlice = createSlice({
  name: 'sceneCard',
  initialState: sceneCardAdapter.getInitialState<{ selectedId?: string }>({
    selectedId: undefined,
  }),
  reducers: {},
  extraReducers: (builder) => {},
})
