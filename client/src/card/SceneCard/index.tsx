import React, { useRef } from 'react'
import BaseCard from '../BaseCard'
import { Stage, Layer, Rect, Image } from 'react-konva'
import { useIconImage } from '@/domain/konva/useIconImage'
import { IconImage } from '../BaseCard/components'

const SceneCard: React.FC = ({ children }) => {
  return (
    <>
      <BaseCard>
        <IconImage />
      </BaseCard>
    </>
  )
}
export default SceneCard
