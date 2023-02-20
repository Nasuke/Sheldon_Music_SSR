import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import NavBar from '../navbar';
import Footer from '../footer';

interface IProps {
  children?: ReactNode
}

const Layout: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="Layout">
      <NavBar></NavBar>
      { children }
      <Footer></Footer>
    </div>
  )
})

export default Layout

Layout.displayName = "Layout"  //方便之后调试