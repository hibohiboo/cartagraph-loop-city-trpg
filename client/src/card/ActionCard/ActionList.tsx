import React from 'react'
import { useGetActionCardsApiQuery } from '@/store/api/spreadsheetApi'
import ActionCardFront from '.'

const ActionCardList: React.FC = () => {
  const { data } = useGetActionCardsApiQuery()
  return (
    <div>
      {data &&
        data.map((card) => {
          return <ActionCardFront card={card} key={card.id} />
        })}
    </div>
  )
}
export default ActionCardList
