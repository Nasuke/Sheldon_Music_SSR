import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import classNames from 'classnames';

import Link from 'next/link';
import Image from 'next/image';

import Search from '@/components/search';
import styles from './index.module.scss';
import logo from '@/assets/images/logo.png';
interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className={styles.navbar}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles['content-left']}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles.logo} priority={true} ></Image>
            <span>Sheldon Store</span>
          </Link>
          <h1 className={styles.title}>Sheldon Store</h1>
        </div>
        <div className={styles['content-right']}>
          <Search />
          <div className={styles["right-cart"]}>
            <Link href="/" className={styles.cart}>
              <span className={styles.count}>0</span>
            </Link>
          </div>
          <div className={styles["right-login"]}>登录</div>
        </div>
      </div>
    </div>
  )
})

export default NavBar

NavBar.displayName = "NavBar"  //方便之后调试