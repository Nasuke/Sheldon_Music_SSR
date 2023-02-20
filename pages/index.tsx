import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { changeCountAction } from '@/store/modules/home';

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = memo((props) => {
  const { children } = props

  const { count } = useSelector((state: RootState) => ({
    count: state.home.count
  }))

  const dispatch: AppDispatch = useDispatch()
  function addCount() {
    dispatch(changeCountAction(2))
  }

  return (
    <div className="Home">
      <div>{count}</div>
      <button onClick={addCount}>+1</button>
    </div>
  )
})

export default Home

Home.displayName = "Home"  //方便之后调试