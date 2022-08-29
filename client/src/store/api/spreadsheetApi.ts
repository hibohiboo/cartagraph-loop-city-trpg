import { createEntityAdapter } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  ActionCardProp,
  ActionCardSpreadSheetColumns,
} from '@/domain/card/actionCard'
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

const spreadId = import.meta.env.VITE_SPREAD_SHEET_ID
const key = import.meta.env.VITE_GPC_API_KEY_FOR_SPREAD_SHEET
const sheet = 'シーンカード'
const range = 'A2:H100'

export const sceneCardAdapter = createEntityAdapter<SceneCardProp>({
  selectId: ({ id }) => id,
})

export const spreadsheetApi = createApi({
  reducerPath: 'spreadsheet',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sheets.googleapis.com/v4/spreadsheets/',
  }),
  endpoints: (builder) => ({
    getSceneCardsApi: builder.query<
      // EntityState<SceneCardProp>
      SceneCardProp[],
      void
    >({
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
        return ret

        // return sceneCardAdapter.addMany(sceneCardAdapter.getInitialState(), ret)
      },
    }),
    getActionCardsApi: builder.query<ActionCardProp[], void>({
      query: () =>
        `${spreadId}/values/${'アクションカード'}!${range}?key=${key}`,
      transformResponse(
        response: SpreadSheetResponse<ActionCardSpreadSheetColumns>,
      ) {
        const ret = response.values.map(
          (
            [subType, name, nameRuby, keywords, timing, effect, flavor],
            id,
          ) => ({
            id,
            subType,
            name,
            nameRuby,
            keywords: keywords.split(','),
            timing,
            effect,
            flavor,
          }),
        )
        return ret
      },
    }),
  }),
})
export const { useGetSceneCardsApiQuery, useGetActionCardsApiQuery } =
  spreadsheetApi
