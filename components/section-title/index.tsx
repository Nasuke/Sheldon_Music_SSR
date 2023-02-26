import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode;
  title?: string
}

const SectionTitle: FC<IProps> = memo((props) => {
  const { title } = props
  return (
    <div className="SectionTitle">
      <div>SectionTitle</div>
    </div>
  )
})

export default SectionTitle

SectionTitle.displayName = "SectionTitle"  //方便之后调试