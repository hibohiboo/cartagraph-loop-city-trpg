import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '@/components/atoms/app/Wrapper'
import ActionCard from '@/card/ActionCard'

const Top: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/actions">アクションカード一覧</Link>
        </li>
        <li>
          <Link to="/scenes">シーンカード一覧</Link>
        </li>
      </ul>
      <div>
        <ActionCard />
      </div>
      <div></div>
    </Wrapper>
  )
}
export default Top
