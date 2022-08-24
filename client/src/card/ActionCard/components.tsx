import React from 'react'
import { IconImage } from '../BaseCard/components'

export const ActionIconImage: React.FC<{
  subType: string
}> = ({ subType }) => {
  const key = 'MdSimCardDownload'
  return <IconImage iconKey={key} />
}
