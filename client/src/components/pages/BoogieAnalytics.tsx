import React from 'react'
import Wrapper from '@/components/atoms/app/Wrapper'
import PlaceCardFront from '@/card/PlaceCard'
import SceneCardFront from '@/card/SceneCard'

const BoogieAnalytics: React.FC = () => {
  return (
    <Wrapper>
      <h1>ブギーポップ因数分解</h1>
      <section>
        <h2>イントロダクション Introduction</h2>
        <div style={{ display: 'flex' }}>
          <SceneCardFront card={sceneIntroduction} />
          <PlaceCardFront />
        </div>
      </section>
    </Wrapper>
  )
}
export default BoogieAnalytics

const sceneIntroduction = {
  id: 0,
  name: 'Introduction',
  nameRuby: 'イントロダクション',
  keywords: ['事件', '邂逅'],
  timing: '幕間',
  location: '茶室',
  effect: `マスターシーンを開始する。
物語の始まりの予感を演出したら、シーンを終了する`,
  flavor: `茶室の真ん中に黒髪の少女の死体があるのを少年は発見する。
「見たな」
天井に張り付いた殺戮者。男でも女でもない生き物が、少年に跳びかかった。
`,
}
