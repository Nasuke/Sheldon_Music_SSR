import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import type { GetServerSideProps } from 'next';
import type { IBanner, ICategory, IDigitalData, IRecommend } from 'service/module/home';

import styles from './index.module.scss';

import {  fetchSearchSuggest } from '@/store/modules/home';
import { getHomeInfo } from '../service/module/home';
import wrapper from '../store';
import Slider  from '@/components/slider';
import TabCategory from '@/components/tab-category';
import Recommend from '@/components/recommend';


interface IProps {
  children?: ReactNode,
  banners: IBanner[],
  category: ICategory[],
  recommend: IRecommend[],
  digitalData: Partial<IDigitalData[]>
}

const Home: FC<IProps> = memo((props) => {
  const { banners = [], category = [], recommend = [] } = props
  return (
    <div className={styles.home}>
      <Slider banners={banners}></Slider>
      <TabCategory category={category}></TabCategory>
      <Recommend recommend={recommend}></Recommend>
    </div>
  )
})

export default Home

Home.displayName = "Home"  //方便之后调试


//  每次访问主页都会执行该函数
export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps((store) => {
  return async (context) => {
    // 触发异步action来发起请求 并将数据保存到redux
    // 这个不是函数式组件 所以我们需要wrapper.getServerSideProps包裹以提供store
    await store.dispatch(fetchSearchSuggest())

    // 2. 发起网络请求获取首页数据
    const res = await getHomeInfo()
    return {
      props: {
        banners: res.data.banners || [],
        category: res.data.categorys || [],
        recommend: res.data.recommends || [],
        digitalData: res.data.digitalData || []
      }
    }
  }
})