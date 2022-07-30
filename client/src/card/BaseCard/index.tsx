import React from 'react'
import { Stage, Layer, Rect } from 'react-konva'
const canvasWidth = 242
const canvasHight = 342

const BaseCard: React.FC = ({ children }) => {
  return (
    <Stage width={canvasWidth} height={canvasHight}>
      <Layer>
        <OutLine width={canvasWidth} height={canvasHight} />
        {children}
      </Layer>
    </Stage>
  )
}
export default BaseCard

const OutLine: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  return (
    <Rect
      x={0}
      y={0}
      width={width}
      height={height}
      fill={'white'}
      stroke={'black'}
      strokeWidth={1}
      cornerRadius={10}
    />
  )
}
