import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import type { IRecommend } from '../../service/module/home';
import { Col, Row } from 'antd';

import styles from "./index.module.scss"
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
    children?: ReactNode,
    recommend?: IRecommend[]
}

const Recommend: FC<IProps> = memo((props) => {
    const { recommend } = props
    return (
        <div className={styles.recommend}>
            <div className={classNames("wrapper", styles.content)}>
                <Row>
                    {
                        recommend?.map(item => {
                            return (
                                <Col span={12} key={item.id}>
                                    <Link href={'/'} className={styles.item}> 
                                        <Image
                                            className={styles.image}
                                            src={item.picStr!}
                                            alt="recommend"
                                            width={542}
                                            height={300}></Image>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
})

export default Recommend

Recommend.displayName = "Recommend"  //方便之后调试