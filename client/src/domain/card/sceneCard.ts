import { createCardWithProp } from './udonariumZip'

export const cardTemplate = {
  id: 0,
  name: '捜査の基本は脚',
  nameRuby: ' そうさ       きほん      あし',
  keywords: ['情報'],
  timing: '幕間',
  location: '現場',
  effect: `調査シーンを開始する。
情報カードを1つ獲得する。
獲得した情報へのリアクションを演出し、次への引きを作ったらシーンを終了する。`,
  flavor: `「捜査の基本だ」 刑事は呟く。
実際に足を運び、関係者の生の声を聴く。
現場の空気からしか得られないものがある。
`,
}
export type SceneCardProp = typeof cardTemplate

// カード名	ルビ	キーワード	タイミング	場所	効果	フレーバー
type Name = string
type CardName = string
type Ruby = string
type Keyword = string
type Location = string
type Effect = string
type Flavor = string
export type SceneCardSpreadSheetColumns = [
  Name,
  CardName,
  Ruby,
  Keyword,
  Location,
  Effect,
  Flavor,
]
export const createSceneCard = (
  doc: Document,
  stackName: string,
  frontIdentifier: string,
  backIdentifier: string,
  card: SceneCardProp,
) => {
  const props = [
    {
      title: 'カード',
      props: [
        { label: '種別', value: 'シーンカード' },
        { label: 'タイミング', value: card.timing, type: '' },
      ],
    },
  ]
  if (card.keywords.includes('情報')) {
    props.push({
      title: '情報',
      props: [
        { label: '本文', value: card.effect, type: 'note' },
        // { label: 'フレーバー', value: card.flavor },
      ],
    })
  }
  return createCardWithProp(
    doc,
    stackName,
    frontIdentifier,
    backIdentifier,
    props,
  )
}
