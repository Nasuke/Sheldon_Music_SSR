import React, { memo, useState } from 'react';
import type { FC, ReactNode } from "react"
import { useRouter } from "next/router";

import styles from './index.module.scss';
import classNames from 'classnames';
import type { ISearchSuggest } from '../../service/module/home';

interface IProps {
    children?: ReactNode,
    searchData?: ISearchSuggest
}

const Search: FC<IProps> = memo((props) => {

    const { searchData } = props
    const router = useRouter()
    // 用input的focus的状态来控制panel状态
    const [inputFocus, setInputFocus] = useState<boolean>(false)
    // input默认显示
    const [placeHolder, setPlaceHolder] = useState<string>("Beats")



    // focus处理函数
    function handleInputFocus(isFocus: boolean) {
        setInputFocus(isFocus)
    }
    // enter处理函数
    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            const inputTarget = event.target as HTMLInputElement
            // 跳转到 inputTarget.value
            setInputFocus(false)
        }
    }
    function handleSearch(name: string) {
        setPlaceHolder(name);
        toSearch(name);
    }
    function toSearch(name: string) {
        router.push({
            pathname: "/search",
            query: {
                q: name,
            },
        });
    }
    return (
        <div className={styles.search}>
            <div className={styles["search-bg"]}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder={placeHolder}
                    onFocus={() => handleInputFocus(true)}
                    onBlur={() => handleInputFocus(false)}
                    onKeyDown={e => handleKeyDown(e as any)}
                ></input>
            </div>
            <div className={classNames(
                styles["search-panel"],
                inputFocus ? styles.show : styles.hide
            )}>
                <div className={styles.shadow}></div>
                <h2>热门搜索</h2>
                <ul>
                    {
                        searchData?.configKey && searchData.configKey.map((item, index) => {
                            return <li
                                key={item[index + 1]}
                                onMouseDown={() => handleSearch(item[index + 1])}
                            >{item[index + 1]}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
})

export default Search

Search.displayName = "Search"  //方便之后调试