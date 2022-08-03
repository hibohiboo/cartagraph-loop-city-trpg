import React, { useCallback } from 'react'
import { Stage, Layer, Rect } from 'react-konva'
import { canvasHight, canvasWidth } from './components'

const BaseCard: React.FC<{
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ children, callback = () => {} }) => {
  const canvasRef = useCallback(
    (node) => {
      if (!node) return
      callback(node.getCanvas()._canvas as HTMLCanvasElement)
    },
    [callback],
  )

  return (
    <Stage width={canvasWidth} height={canvasHight}>
      <Layer ref={canvasRef} listening={false}>
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
