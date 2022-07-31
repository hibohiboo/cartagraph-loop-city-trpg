import React from 'react'
import styled from 'styled-components'
import { cardTemplate } from '@/domain/card/sceneCard'
import SceneCardFront, { SceneCardBack } from '@/card/SceneCard'
import { useSceneCardHook } from '@/hooks/useSceneCardHook'
const Wrapper = styled.div`
  --txt-color: #fff; /* opacity 0.9 のときの #fffの値 */
  --oveflow-color: #010101; /* ブラックスミア防止に#000を避ける */
  --base-color: #1f2023;
  --surface-color: #27292d;
  --overlay-dark-color: #202f34;
  --overlay-light-color: #38384d;
  --green-color: #55c500;
  background-color: var(--oveflow-color);
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 100px;
`

const Top: React.FC = () => {
  const card = cardTemplate
  const hook = useSceneCardHook(card)
  return (
    <Wrapper>
      <div style={{ paddingLeft: '200px' }}>
        <SceneCardFront {...hook.frontProp} />
        <SceneCardBack {...hook.backProp} />
        <button onClick={hook.createZipHandler}>zip</button>
      </div>
    </Wrapper>
  )
}
export default Top
