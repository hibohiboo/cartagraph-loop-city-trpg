import React from 'react'
import Wrapper from '@/components/atoms/app/Wrapper'
import { ActionCardEditForm } from '@/card/ActionCard/EditForm'
import SceneCardList from '@/card/SceneCard/SceneList'

const SceneCardListPage: React.FC = () => {
  return (
    <Wrapper>
      <SceneCardList />
      <ActionCardEditForm />
    </Wrapper>
  )
}
export default SceneCardListPage
