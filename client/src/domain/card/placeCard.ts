import { createCardWithProp } from './udonariumZip'

export const placeCardTemplate = {
  id: 0,
  name: '茶室',
  nameRuby: '',
  keywords: ['部屋'],
  effect: `小さな和風の部屋。床は畳、障子で仕切られている。`,
  flavor: `い草の香り。
座卓と座布団。
欄間の描く影。
`,
}
export type PlaceCardProp = typeof placeCardTemplate

export const createPlaceCard = (
  doc: Document,
  stackName: string,
  frontIdentifier: string,
  backIdentifier: string,
  card: PlaceCardProp,
) => {
  const props = [
    {
      title: 'カード',
      props: [{ label: '種別', value: '場所カード' }],
    },
  ]
  if (card.keywords.includes('情報')) {
    props.push({
      title: '情報',
      props: [{ label: '本文', value: card.effect }],
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
