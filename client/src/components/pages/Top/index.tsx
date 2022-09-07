import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '@/components/atoms/app/Wrapper'
import ActionCard from '@/card/ActionCard'
import SceneCardFront from '@/card/SceneCard'

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
        <li>
          <a href="https://docs.google.com/spreadsheets/d/1H5jUuPpnFn3igrwB1MDr0BCqjvoBYkFSFAnYqBolPeA/edit#gid=1126116038">
            カード一覧 - spread sheet
          </a>
        </li>
        <li>
          <Link to="/a">ブギーポップ因数分解</Link>
        </li>
      </ul>
      <div style={{ display: 'flex' }}>
        <SceneCardFront />

        <ActionCard />
      </div>
      <div></div>
    </Wrapper>
  )
}
export default Top
