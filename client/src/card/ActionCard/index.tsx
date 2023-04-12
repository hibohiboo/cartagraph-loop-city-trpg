import React from 'react'
import { ActionCardProp, actionCardTemplate } from '@/domain/card/actionCard'
import { ActionIconImage } from './components'
import BaseCard from '../BaseCard'
import {
  CardName,
  CardType,
  KeyWords,
  RightBottom,
  SceneMainContent,
  TimingProperty,
} from '../BaseCard/components'

const ActionCardFront: React.FC<{
  card?: ActionCardProp
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ card = actionCardTemplate, callback }) => {
  return (
    <BaseCard callback={callback}>
      <CardName name={card.name} ruby={card.nameRuby} />
      <ActionIconImage subType={card.subType} />
      <CardType text={`アクション/${card.subType}`} />
      <KeyWords items={card.keywords} />
      <TimingProperty value={card.timing} />
      <SceneMainContent effect={card.effect} flavor={card.flavor} />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
export default ActionCardFront
