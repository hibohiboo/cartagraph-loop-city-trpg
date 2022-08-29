import React from 'react'
import { actionSubTypes } from '@/domain/card/actionCard'
import { IconImage } from '../BaseCard/components'

const keyFactory = (subType: string) => {
  if (subType === actionSubTypes.physical) return 'MdDirectionsRun'
  return 'MdSimCardDownload'
}

export const ActionIconImage: React.FC<{
  subType: string
}> = ({ subType }) => {
  const key = keyFactory(subType)

  return <IconImage iconKey={key} />
}
