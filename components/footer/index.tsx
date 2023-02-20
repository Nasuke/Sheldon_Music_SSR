import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Footer: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="Footer">
      <div>Footer</div>
    </div>
  )
})

export default Footer

Footer.displayName = "Footer"  //方便之后调试