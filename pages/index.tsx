import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import type { GetServerSideProps } from 'next';
import type { IBanner, ICategory, IDigitalData, IRecommend, IProduct, IHotProduct } from 'service/module/home';

import styles from './index.module.scss';

import { fetchSearchSuggest } from '@/store/modules/home';
import {
  getHomeInfo,
  getEditorRecommendData,
  getHotRecommendData
} from '../service/module/home';
import wrapper from '../store';
import Slider from '@/components/slider';
import TabCategory from '@/components/tab-category';
import Recommend from '@/components/recommend';
import classNames from 'classnames';
import SectionTitle from '@/components/section-title';
import GridView from '@/components/grid-view';
import DigitalPanel from '@/components/digital-panel';


interface IProps {
  children?: ReactNode,
  banners: IBanner[],
  category: ICategory[],
  recommend: IRecommend[],
  digitalData: Partial<IDigitalData[]>,
  editorProducts: IHotProduct[];
  hotRecommends: IProduct[]
}

const Home: FC<IProps> = memo((props) => {
  const { banners = [],
    category = [],
    recommend = [],
    editorProducts = [],
    hotRecommends = [],
    digitalData = [] } = props
  return (
    <div className={styles.home}>
      <Slider banners={banners}></Slider>
      <TabCategory category={category}></TabCategory>
      <Recommend recommend={recommend}></Recommend>
      <div className={classNames("wrapper", styles.content)}>
        <SectionTitle title='编辑推荐'></SectionTitle>
        <GridView products={editorProducts}></GridView>
        <DigitalPanel itemData={digitalData}></DigitalPanel>
        <SectionTitle title='热门商品'></SectionTitle>
        <GridView products={hotRecommends}></GridView>
      </div>
    </div>
  )
})

export default Home

Home.displayName = "Home"  //方便之后调试


//  每次访问主页都会执行该函数
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => {
  return async (context) => {
    // 触发异步action来发起请求 并将数据保存到redux
    // 这个不是函数式组件 所以我们需要wrapper.getServerSideProps包裹以提供store
    await store.dispatch(fetchSearchSuggest())

    // 2. 发起网络请求获取首页数据
    const res = await getHomeInfo()
    const editorResult = await getEditorRecommendData();
    const hotRecommendResult = await getHotRecommendData();
    return {
      props: {
        banners: res.data.banners || [],
        category: res.data.categorys || [],
        recommend: res.data.recommends || [],
        digitalData: res.data.digitalData || [],
        editorProducts: editorResult.data.hotProduct || [],
        hotRecommends: hotRecommendResult.data.allProduct || [],
      }
    }
  }
})