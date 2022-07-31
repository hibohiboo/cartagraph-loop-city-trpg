import React from 'react'
import BaseCard from '../BaseCard'
import {
  CardBackImage,
  CardName,
  CardType,
  IconImage,
  KeyWords,
  LocationProperty,
  RightBottom,
  SceneMainContent,
  TimingProperty,
} from '../BaseCard/components'

const cardTemplate = {
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
type SceneCardProp = typeof cardTemplate
const SceneCardFront: React.FC<{
  card?: SceneCardProp
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ card = cardTemplate, callback }) => {
  return (
    <BaseCard callback={callback}>
      <CardName name={card.name} ruby={card.nameRuby} />
      <IconImage iconKey="MdOndemandVideo" />
      <CardType text="シーン" />
      <KeyWords items={card.keywords} />
      <TimingProperty value={card.timing} />
      <LocationProperty value={card.location} />
      <SceneMainContent effect={card.effect} flavor={card.flavor} />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
export default SceneCardFront
export const SceneCardBack: React.FC<{
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ callback }) => {
  return (
    <BaseCard callback={callback}>
      <CardType text="シーン" />
      <CardBackImage iconKey="MdOndemandVideo" />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
