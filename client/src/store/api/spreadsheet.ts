import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

if (!import.meta.env.VITE_GPC_API_KEY_FOR_SPREAD_SHEET) {
  console.error('gcp api domain undefined')
  throw new Error()
}

type StreadSheetResoponse = {
  range: string
  majorDimension: string
  values: string[][]
}
const spreadId = '1H5jUuPpnFn3igrwB1MDr0BCqjvoBYkFSFAnYqBolPeA'
const key = import.meta.env.VITE_GPC_API_KEY_FOR_SPREAD_SHEET
const sheet = 'シーンカード'
const range = 'A2:H100'
export const spreadsheetApi = createApi({
  reducerPath: 'spreadsheet',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sheets.googleapis.com/v4/spreadsheets/',
  }),
  endpoints: (builder) => ({
    getSceneCardsApi: builder.query<StreadSheetResoponse, void>({
      query: () => `${spreadId}/values/${sheet}!${range}?key=${key}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSceneCardsApiQuery } = spreadsheetApi
