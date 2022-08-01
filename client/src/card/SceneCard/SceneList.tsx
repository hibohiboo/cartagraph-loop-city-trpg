import React from 'react'
import { useGetSceneCardsApiQuery } from '@/store/api/spreadsheetApi'
import SceneCardListItem from '@/card/SceneCard/listItem'

const SceneCardList: React.FC = () => {
  const { data } = useGetSceneCardsApiQuery()
  return (
    <div>
      {data &&
        data.map((card) => {
          return <SceneCardListItem card={card} key={card.id} />
        })}
    </div>
  )
}
export default SceneCardList
