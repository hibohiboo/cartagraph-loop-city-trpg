import React, { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'
import styled from 'styled-components'
const Wrapper = styled.div`
  --txt-color: #fff; /* opacity 0.9 のときの #fffの値 */
  --oveflow-color: #010101; /* ブラックスミア防止に#000を避ける */
  --base-color: #1f2023;
  --surface-color: #27292d;
  --overlay-dark-color: #202f34;
  --overlay-light-color: #38384d;
  --green-color: #55c500;
  background-color: var(--oveflow-color);
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 100px;
`

const Top: React.FC = () => {
  return (
    <Wrapper>
      <Home></Home>Hello World
    </Wrapper>
  )
}
export default Top

const Home = () => {
  const ref = useRef<HTMLDivElement>(null)
  let app: PIXI.Application, container: PIXI.Container, sprite: PIXI.Sprite
  const sizes = {
    width: 242,
    height: 342,
  }

  const init = (main: HTMLDivElement) => {
    if (app) return
    app = new PIXI.Application({
      width: sizes.width,
      height: sizes.height,
    })

    main.appendChild(app.view)

    // コンテナの作成
    container = new PIXI.Container()
    app.stage.addChild(container)
    const graphics = new PIXI.Graphics()
    graphics.beginFill(0xde3249)
    graphics.drawRect(50, 50, 100, 100)
    graphics.endFill()
    app.stage.addChild(graphics)
  }

  useEffect(() => {
    if (!ref.current) return
    init(ref.current)
  }, [ref, init])
  return (
    <>
      <div
        ref={ref}
        style={{
          height: '100%',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      ></div>
    </>
  )
}
