import React from 'react'
import {
  CharacterCardWithSerifProp,
  characterCardWithSerifTemplate,
} from '@/domain/card/npcCard'
import BaseCard from '../BaseCard'
import {
  CardName,
  CardType,
  IconImage,
  RightBottom,
  SceneMainContent,
  Word,
} from '../BaseCard/components'

const CharacterCardWithWords: React.FC<{
  card?: CharacterCardWithSerifProp
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ card = characterCardWithSerifTemplate, callback }) => {
  return (
    <BaseCard callback={callback}>
      <CardName name={card.name} ruby={card.nameRuby} />
      <Word word={card.words[0] ?? ''} />
      <IconImage iconKey="MdPerson" />
      <CardType text={`人物/${card.subType}`} />
      <SceneMainContent effect={card.keywords.join(' , ')} flavor={''} />

      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
export default CharacterCardWithWords
