import React from 'react'
import Wrapper from '@/components/atoms/app/Wrapper'
import InfoCardFront from '@/card/InfoCard'
import NpcCardFront from '@/card/NpcCard'
import CharacterCardWithWords from '@/card/NpcCard/CharacterWithWords'
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
        <div style={{ display: 'flex' }}>
          <PlaceCardFront card={placeIntroduction2} />
          <NpcCardFront />
          <InfoCardFront card={infoIntroduction2} />
          <InfoCardFront />
        </div>
      </section>
      <RomanticWorrior />
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
const placeIntroduction2 = {
  id: 0,
  name: '県立深陽学園',
  nameRuby: 'けんりつしんようがくえん',
  keywords: ['学校'],
  effect: `高校。県の中ぐらいの進学校。`,
  flavor: ``,
}

const infoIntroduction2 = {
  id: 0,
  name: '風紀委員',
  subType: '組織',
  nameRuby: '',
  keywords: ['情報', '学校'],
  effect: ``,
  flavor: `生活指導は教師の仕事。
  風紀委員はただの飾り。`,
}

// --------------------------------------------

const RomanticWorrior: React.FC = () => {
  return (
    <section>
      <h2>
        <ruby>
          浪漫の騎士 <rt>Romantic Worrior</rt>
        </ruby>
        <span style={{ paddingLeft: '20px', fontSize: '1rem' }}>
          三年F組 竹田啓司
        </span>
      </h2>
      <div style={{ display: 'flex' }}>
        <NpcCardFront card={npcRomanticWorrior_0} />
        <CharacterCardWithWords />
      </div>
      <div style={{ display: 'flex' }}>
        <SceneCardFront card={sceneRomanticWorrior_1} />
        <PlaceCardFront card={placeRomanticWorrior_1} />
        <NpcCardFront card={npcRomanticWorrior_1} />
        <NpcCardFront card={npcRomanticWorrior_2} />
        <InfoCardFront card={infoRomanticWorrior_1} />
      </div>
    </section>
  )
}
const placeRomanticWorrior_1 = {
  id: 0,
  name: '駅前',
  nameRuby: '',
  keywords: ['街中'],
  effect: ``,
  flavor: ``,
}
const sceneRomanticWorrior_1 = {
  id: 0,
  name: '駅前での出来事',
  nameRuby: '',
  keywords: ['邂逅'],
  timing: '幕間',
  location: '駅前',
  effect: `マスターシーンを開始する。
竹田がブギーポップの調査を決めたら、シーンを終了する`,
  flavor: `秋の中ごろ。日曜日。15時ごろ。
付き合っている後輩の到着を待つが約束の時間の11時を過ぎても来ない。
  `,
}

const npcRomanticWorrior_0 = {
  id: 0,
  name: '竹田啓司',
  nameRuby: 'たけだ けいじ',
  subType: '学生',
  keywords: ['学生'],
  effect: `深陽学園3年生。語り手`,
  flavor: ``,
}
const npcRomanticWorrior_1 = {
  id: 0,
  name: '宮下藤花',
  nameRuby: 'みやした とうか',
  subType: '学生',
  keywords: ['学生'],
  effect: `深陽学園2年生。
家が厳しい。電話をかけること禁止。`,
  flavor: ``,
}
const npcRomanticWorrior_2 = {
  id: 0,
  name: '早乙女',
  nameRuby: 'さおとめ',
  subType: '学生',
  keywords: ['学生'],
  effect: `深陽学園。竹田と同じ委員会。風紀委員。
何処にいても溶け込んだ感じのするやつ。
  `,
  flavor: `グループ交際。
女子2人。もう一人男子。
`,
}
const infoRomanticWorrior_1 = {
  id: 0,
  name: '風紀委員',
  subType: '組織',
  nameRuby: '',
  keywords: ['情報', '学校'],
  effect: `竹田、早乙女`,
  flavor: ``,
}

const npcRomanticWorrior_0_2 = {
  id: 0,
  name: '竹田啓司',
  nameRuby: 'たけだ けいじ',
  subType: '学生',
  keywords: ['学生'],
  effect: `風紀委員。`,
  flavor: ``,
}
