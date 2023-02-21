import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import { Col, Row } from 'antd';
import type { ICategory } from 'service/module/home';

import styles from "./index.module.scss"
import classNames from 'classnames';
import Image from 'next/image';

interface IProps {
  children?: ReactNode,
  category?: ICategory[]
}

const TabCategory: FC<IProps> = memo((props) => {
  const { category } = props
  return (
    <div className={styles['tab-category']}>
      <div className={classNames("wrapper", styles.content)}>
        <Row>
          {
            category?.map(item => {
              return (
                <Col span={6} key={item.cid}>
                  <div className={styles["category-item"]}>
                    <Image
                      className={styles.image}
                      src={item.picStr!}
                      alt="category"
                      width={48}
                      height={48}
                    ></Image>
                    <div className={styles.right}>
                      <div className={styles.title}>{item.title}</div>
                      {
                        // type === 1显示
                        item.type === 1 && (
                          <div className={styles['sub-title']}>
                            <span className={styles.count}>{item.count}</span>
                            <span className={styles.desc}>{item.desc}</span>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  )
})

export default TabCategory

TabCategory.displayName = "TabCategory"  //方便之后调试