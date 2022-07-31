import React from 'react'
import BaseCard from '../BaseCard'
import {
  CardName,
  CardType,
  IconImage,
  KeyWords,
  LocationProperty,
  TimingProperty,
} from '../BaseCard/components'

const cardTemplate = {
  name: '捜査の基本は脚',
  nameRuby: ' そうさ       きほん      あし',
  keywords: ['情報'],
  timing: '幕間',
  location: '事件現場',
}
type SceneCardProp = typeof cardTemplate
const SceneCard: React.FC<{ card?: SceneCardProp }> = ({
  card = cardTemplate,
}) => {
  return (
    <BaseCard>
      <CardName name={card.name} ruby={card.nameRuby} />
      <IconImage iconKey="MdOndemandVideo" />
      <CardType text="シーン" />
      <KeyWords items={card.keywords} />
      <TimingProperty value={card.timing} />
      <LocationProperty value={card.location} />
    </BaseCard>
  )
}
export default SceneCard
