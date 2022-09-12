import React from 'react'
import Wrapper from '@/components/atoms/app/Wrapper'
import PlaceCardFront from '@/card/PlaceCard'

const BoogieAnalytics: React.FC = () => {
  return (
    <Wrapper>
      <h1>ブギーポップ因数分解</h1>
      <section>
        <h2>イントロダクション Introduction</h2>
        <PlaceCardFront />
      </section>
    </Wrapper>
  )
}
export default BoogieAnalytics
