import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import type { IHotProduct, IProduct } from 'service/module/home';

import styles from "./index.module.scss";
import { Row, Col } from "antd";
import GridViewItem from "../grid-view-item";

interface IProps {
  children?: ReactNode;
  products: IProduct[] | IHotProduct[]
}

const GridView: FC<IProps> = memo((props) => {
  const { products = [] } = props
  return (
    <div className={styles["grid-view"]}>
      <Row>
        {products.map((item, index) => {
          return (
            <Col key={item.id} span={6}>
              <div className={styles["view-item"]}>
                <GridViewItem itemData={item} showTip={index === 0} />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
})

export default GridView

GridView.displayName = "GridView"  //方便之后调试