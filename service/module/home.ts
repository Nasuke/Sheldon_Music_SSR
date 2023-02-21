import SCRequest from '../index';
import type { IResultData } from '../index';

export interface ISearchSuggest {
    id: number,
    defaultKey: string,
    configKey: any[]
}
export interface IBanner {
    id: number
    picStr?: string
    backendPicStr?: string
}
export interface ICategory {
    cid: number
    picStr?: string
    title?: string
    tabIndex?: number
    targetUrl?: string
    count?: number
    desc?: string
    type?: number
}
export interface IRecommend {
    id: number
    picStr?: string
    title?: string
}
export interface IDigitalData {
    digitalIcon: string
    name: string
    desc: string
    buyNow: string
    picStr: string
    picStr2: string
    picStr1: string
}
export interface IHomeInfo {
    banners: IBanner[],
    categorys: ICategory[],
    recommends?:IRecommend[],
    digitalData?: Partial<IDigitalData[]>,
}

export function getSearchSuggestion() {
    return SCRequest.get<IResultData<ISearchSuggest>>("/searchsuggest/get")
}
export function getHomeInfo() {
    return SCRequest.get<IResultData<IHomeInfo>>("/home/info")
}