import { renderToStaticMarkup } from 'react-dom/server'
import * as icons from '@/components/atoms/icon/icons'
import { useImage } from './useImage'
export type UseIconsKey = keyof typeof icons

export const useIconImage = (icon: UseIconsKey, size?: number) => {
  const svgString = encodeURIComponent(
    renderToStaticMarkup(icons[icon]({ size })),
  )
  const dataUri = `data:image/svg+xml,${svgString}`

  return useImage(dataUri)
}
