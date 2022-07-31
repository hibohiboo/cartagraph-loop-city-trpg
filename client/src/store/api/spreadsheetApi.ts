import { createEntityAdapter, EntityState } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  SceneCardProp,
  SceneCardSpreadSheetColumns,
} from '@/domain/card/sceneCard'

if (!import.meta.env.VITE_GPC_API_KEY_FOR_SPREAD_SHEET) {
  console.error('gcp api domain undefined')
  throw new Error()
}

// カード名	ルビ	キーワード	タイミング	場所	効果	フレーバー
type SpreadSheetResponse<T> = {
  range: string
  majorDimension: string
  values: T[]
}

export const sceneCardAdapter = createEntityAdapter<SceneCardProp>({
  selectId: ({ id }) => id,
})

const spreadId = import.meta.env.VITE_SPREAD_SHEET_ID
const key = import.meta.env.VITE_GPC_API_KEY_FOR_SPREAD_SHEET
const sheet = 'シーンカード'
const range = 'A2:H100'
export const spreadsheetApi = createApi({
  reducerPath: 'spreadsheet',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sheets.googleapis.com/v4/spreadsheets/',
  }),
  endpoints: (builder) => ({
    getSceneCardsApi: builder.query<EntityState<SceneCardProp>, void>({
      query: () => `${spreadId}/values/${sheet}!${range}?key=${key}`,
      transformResponse(
        response: SpreadSheetResponse<SceneCardSpreadSheetColumns>,
      ) {
        const ret = response.values.map(
          (
            [name, nameRuby, keywords, timing, location, effect, flavor],
            id,
          ) => ({
            id,
            name,
            nameRuby,
            keywords: keywords.split(','),
            timing,
            location,
            effect,
            flavor,
          }),
        )

        return sceneCardAdapter.addMany(sceneCardAdapter.getInitialState(), ret)
      },
    }),
  }),
})
export const { useGetSceneCardsApiQuery } = spreadsheetApi
