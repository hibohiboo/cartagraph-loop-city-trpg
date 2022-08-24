import React from 'react'
import Wrapper from '../atoms/app/Wrapper'
import ActionCard from '@/card/ActionCard'
import { ActionCardEditForm } from '@/card/ActionCard/EditForm'

const Top: React.FC = () => {
  return (
    <Wrapper>
      <ActionCard />
      <ActionCardEditForm />
    </Wrapper>
  )
}
export default Top
