import React from 'react'
import { ActionCardProp, actionCardTemplate } from '@/domain/card/actionCard'
import BaseCard from '../BaseCard'
import {
  CardName,
  CardType,
  KeyWords,
  RightBottom,
  SceneMainContent,
  TimingProperty,
} from '../BaseCard/components'
import { ActionIconImage } from './components'

const ActionCardFront: React.FC<{
  card?: ActionCardProp
  callback?: (canvas: HTMLCanvasElement) => void
  flavor?: HTMLImageElement
}> = ({ card = actionCardTemplate, callback, flavor }) => {
  return (
    <BaseCard callback={callback}>
      <CardName name={card.name} ruby={card.nameRuby} />
      <ActionIconImage subType={card.subType} />
      <CardType text={`アクション/${card.subType}`} />
      <KeyWords items={card.keywords} />
      <TimingProperty value={card.timing} />

      <SceneMainContent effect={card.effect} flavor={flavor} />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
export default ActionCardFront
