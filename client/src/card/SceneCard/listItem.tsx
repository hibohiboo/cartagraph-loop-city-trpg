import React from 'react'
import styled from 'styled-components'
import { SceneCardProp } from '@/domain/card/sceneCard'
import { textToIncludeRubyTagsTextSnitized } from '@/domain/ruby'
import { family } from '../BaseCard/components'
import SceneCardFront, { SceneCardBack } from '.'
import { useSceneCardHook } from '@/hooks/useSceneCardHook'

const FlavorDiv = styled.div`
  white-space: pre-line;
  width: 210px;
  background-color: white;
  color: black;
  font-size: 12px;
  font-family: ${family.serif};
  rt {
    font-size: 8px;
  }
`

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
      {/* 非表示のテキスト作成部分. display:noneだと画像作成されない */}
      <div style={{ width: '1px', height: '1px', overflow: 'hidden' }}>
        <FlavorDiv
          ref={hook.flavor.ref}
          dangerouslySetInnerHTML={{
            __html: textToIncludeRubyTagsTextSnitized(card.flavor),
          }}
        ></FlavorDiv>
      </div>
    </div>
  )
}
export default SceneCardListItem
