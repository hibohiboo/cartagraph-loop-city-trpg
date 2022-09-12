import React from 'react'
import { NpcCardProp, npcCardTemplate } from '@/domain/card/npcCard'
import BaseCard from '../BaseCard'
import {
  CardName,
  CardType,
  IconImage,
  KeyWords,
  RightBottom,
  SceneMainContent,
} from '../BaseCard/components'

const NpcCardFront: React.FC<{
  card?: NpcCardProp
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ card = npcCardTemplate, callback }) => {
  return (
    <BaseCard callback={callback}>
      <CardName name={card.name} ruby={card.nameRuby} />

      <IconImage iconKey="MdPerson" />
      <CardType text={`人物/${card.subType}`} />
      <KeyWords items={card.keywords} />

      <SceneMainContent effect={card.effect} flavor={card.flavor} />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
export default NpcCardFront
