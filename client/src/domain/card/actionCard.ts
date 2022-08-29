import { createCardWithProp } from './udonariumZip'

export const actionCardTemplate = {
  id: 0,
  name: '舞台裏の調べもの',
  subType: '情報',
  nameRuby: '',
  keywords: ['情報'],
  timing: '幕間',
  effect: `情報カードを1つ獲得する。`,
  flavor: `「ほらよ」 
折りたたんだ紙束をテーブルに。
「これは？」
「お前が頼んだんだろうが。一覧にまとめてある」
`,
}
export type ActionCardProp = typeof actionCardTemplate

export const actionSubTypes = {
  info: '情報',
  physical: '肉体',
} as const
type ActionSubTypes = typeof actionSubTypes
type ActionSubTypeKeys = keyof ActionSubTypes

// 種別 カード名	ルビ	キーワード	タイミング	場所	効果	フレーバー
type SubType = ActionSubTypes[ActionSubTypeKeys]
type Name = string
type CardName = string
type Ruby = string
type Keyword = string
type Location = string
type Effect = string
type Flavor = string
export type ActionCardSpreadSheetColumns = [
  SubType,
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
  card: ActionCardProp,
) => {
  const props = [
    {
      title: 'カード',
      props: [
        { label: '種別', value: 'アクションカード' },
        { label: 'タイミング', value: card.timing, type: '' },
      ],
    },
  ]
  if (card.keywords.includes('情報')) {
    props.push({
      title: '情報',
      props: [{ label: '本文', value: card.effect, type: 'note' }],
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
