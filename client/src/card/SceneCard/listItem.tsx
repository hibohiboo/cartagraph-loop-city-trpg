import React from 'react'
import { SceneCardProp } from '@/domain/card/sceneCard'
import SceneCardFront, { SceneCardBack } from '.'
import { useSceneCardHook } from '@/hooks/useSceneCardHook'

const SceneCardListItem: React.FC<{
  card: SceneCardProp
}> = ({ card }) => {
  const hook = useSceneCardHook(card)

  return (
    <div style={{ display: 'flex' }}>
      <SceneCardBack {...hook.backProp} />
      <SceneCardFront card={card} {...hook.frontProp} />

      <button onClick={hook.createZipHandler}>
        ユドナリウムのカードをダウンロード
      </button>
    </div>
  )
}
export default SceneCardListItem
