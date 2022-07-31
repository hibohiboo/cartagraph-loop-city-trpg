import { convertDocToXML, createElement } from '../udonarium/fileArchiver'

export const createCardStackElment = (doc: Document, stackName: string) => {
  // #card-stack
  const cardStack = createElement(doc, 'data', [['name', 'card-stack']])
  const image = createElement(doc, 'data', [['name', 'image']])
  const imageIdentifier = createElement(doc, 'data', [
    ['name', 'imageIdentifier'],
    ['type', 'image'],
  ])
  const common = createElement(doc, 'data', [['name', 'common']])
  const name = createElement(doc, 'data', [['name', 'name']], stackName)
  const detail = createElement(doc, 'data', [['name', 'detail']])
  image.appendChild(imageIdentifier)
  common.appendChild(name)
  cardStack.appendChild(image)
  cardStack.appendChild(common)
  cardStack.appendChild(detail)

  return cardStack
}

export const createCardStackXML = (
  stackName: string,
  doc: XMLDocument,
  children: HTMLElement[],
) => {
  const cardStackWrapper = createElement(doc, 'card-stack', [
    ['location.name', 'table'],
    ['location.x', '50'],
    ['location.y', '500'],
    ['posZ', '0'],
    ['rotate', '0'],
    ['roll', '0'],
    ['zindex', '0'],
    ['state', '0'],
    ['isShowTotal', 'true'],
  ])
  children.forEach((child) => cardStackWrapper.appendChild(child))

  return createXML(stackName, doc, cardStackWrapper)
}

export const createXML = (
  xmlName: string,
  doc: XMLDocument,
  target: HTMLElement,
) => {
  doc.appendChild(target)
  const sXML = convertDocToXML(doc)
  return new File([sXML], `${xmlName}.xml`, { type: 'text/plain' })
}

const createCardBase = ({
  doc,
  stackName,
  frontIdentifier,
  backIdentifier,
  common = createElement(doc, 'data', [['name', 'common']]),
  detail = createElement(doc, 'data', [['name', 'detail']]),
}: {
  doc: Document
  stackName: string
  frontIdentifier: string
  backIdentifier: string
  common?: HTMLElement
  detail?: HTMLElement
}) => {
  const cardWrapper = createElement(doc, 'card', [
    ['location.name', 'table'],
    ['location.x', '50'],
    ['location.y', '500'],
    ['posZ', '0'],
    ['rotate', '0'],
    ['roll', '0'],
    ['zindex', '0'],
    ['state', '0'],
  ])
  const cardData = createElement(doc, 'data', [['name', 'card']])
  const image = createElement(doc, 'data', [['name', 'image']])
  const imageIdentifier = createElement(doc, 'data', [
    ['name', 'imageIdentifier'],
    ['type', 'image'],
  ])
  const front = createElement(
    doc,
    'data',
    [
      ['name', 'front'],
      ['type', 'image'],
    ],
    frontIdentifier,
  )
  const back = createElement(
    doc,
    'data',
    [
      ['name', 'back'],
      ['type', 'image'],
    ],
    backIdentifier,
  )
  image.appendChild(imageIdentifier)
  image.appendChild(front)
  image.appendChild(back)

  const name = createElement(doc, 'data', [['name', 'name']], stackName)
  const size = createElement(doc, 'data', [['name', 'size']], '2')

  image.appendChild(imageIdentifier)
  common.appendChild(name)
  common.appendChild(size)
  cardData.appendChild(image)
  cardData.appendChild(common)
  cardData.appendChild(detail)
  cardWrapper.appendChild(cardData)
  return cardWrapper
}

export const createCard = (
  doc: Document,
  stackName: string,
  frontIdentifier: string,
  backIdentifier: string,
) => {
  return createCardBase({ doc, stackName, frontIdentifier, backIdentifier })
}

export const createCardRoot = (doc: Document, children: HTMLElement[]) => {
  const cardRoot = createElement(doc, 'node', [['name', 'cardRoot']])
  children.forEach((child) => cardRoot.appendChild(child))
  return cardRoot
}

export const createCardWithProp = (
  doc: Document,
  stackName: string,
  frontIdentifier: string,
  backIdentifier: string,
  cardProps: {
    title: string
    props: { label: string; value: string; type?: string }[]
  }[],
) => {
  const detail = createElement(doc, 'data', [['name', 'detail']])
  cardProps.forEach((p) => {
    const tmp = createElement(doc, 'data', [['name', p.title]])
    p.props.forEach((prop) => {
      const arr: [string, string][] = [['name', prop.label]]
      if (prop.type) {
        arr.push(['type', prop.type])
      }
      tmp.appendChild(createElement(doc, 'data', arr, prop.value))
    })
    detail.appendChild(tmp)
  })

  return createCardBase({
    doc,
    stackName,
    frontIdentifier,
    backIdentifier,
    detail,
  })
}
