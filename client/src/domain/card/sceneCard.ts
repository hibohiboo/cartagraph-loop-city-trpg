import { createCardWithProp } from './udonariumZip'

export const cardTemplate = {
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

export const createSceneCard = (
  doc: Document,
  stackName: string,
  frontIdentifier: string,
  backIdentifier: string,
) => {
  const props = [
    {
      title: 'カード',
      props: [
        { label: '種別', value: 'シーンカード' },
        { label: 'タイミング', value: '幕間' },
      ],
    },
  ]
  return createCardWithProp(
    doc,
    stackName,
    frontIdentifier,
    backIdentifier,
    props,
  )
}
