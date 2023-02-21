import React, { ElementRef, memo, useRef, useState } from 'react';
import type { FC, ReactNode } from "react"
import { Carousel } from 'antd';

import styles from "./index.module.scss"
import classNames from 'classnames';
import type { IBanner } from 'service/module/home';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

interface IProps {
  children?: ReactNode
  banners?: IBanner[]
}

const Slider: FC<IProps> = memo((props) => {
  const { banners } = props

  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  // dots处理
  const onChange = (curPage: number) => {
    setIndex(curPage)
  }
  // 按钮处理函数
  function ToNext() {
    bannerRef.current?.next()
  }
  function ToPrev() {
    bannerRef.current?.prev()
  }

  const [index, setIndex] = useState(0)

  return (
    <div className={styles["top-swiper"]}>
      <div className={classNames("wrapper", styles.content)}>
        {/* 背景变大就是这个类实现的 实际上是轮播图变大 但是图片不变 item跟着变大 */}
        <Carousel
          afterChange={onChange}
          className={styles.carousel}
          dots={false}
          ref={bannerRef}
        >
          {
            banners?.map((banner) => {
              return (
                <div key={banner.id} className={styles['swiper-item']}>
                  <div
                    className={styles["swiper-bg"]}
                    style={{ backgroundImage: `url(${banner.backendPicStr})` }}
                  ></div>
                  <Image
                    className={styles.image}
                    src={banner.picStr!}
                    alt="banner"
                    width={1100}
                    height={480}>
                  </Image>
                </div>
              )
            })
          }
        </Carousel>
        <ul className={styles.dots}>
          {
            banners?.map((banner, idx) => {
              return <li key={banner.id} className={classNames(styles.dot, idx === index ? styles.active : "")}></li>
            })
          }
        </ul>

      </div>

      {/* 自定义button */}
      <button className={styles.prev} onClick={ToPrev}>
        <span></span>
      </button>
      <button className={styles.next} onClick={ToNext}>
        <span></span>
      </button>
    </div>
  )
})

export default Slider

Slider.displayName = "Slider"  //方便之后调试