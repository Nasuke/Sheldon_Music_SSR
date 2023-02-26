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
    recommends?: IRecommend[],
    digitalData?: Partial<IDigitalData[]>,
}
export interface IProduct {
    id?: number;
    type?: number;
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    originalCost?: number;
    couponLabelDesc?: string;
    coverUrl?: string;
}

export interface IHotProduct {
    id?: number;
    products?: IProduct;
}

export interface IEditorRecommend {
    count?: number;
    hasMore?: boolean;
    hotProduct?: IHotProduct[];
}

export interface IHotRecommend {
    count?: number;
    allProduct?: IProduct[];
}

export function getSearchSuggestion() {
    return SCRequest.get<IResultData<ISearchSuggest>>("/searchsuggest/get")
}
export function getHomeInfo() {
    return SCRequest.get<IResultData<IHomeInfo>>("/home/info")
}
export function getEditorRecommendData() {
    return SCRequest.get<IResultData<IEditorRecommend>>("/hotproduct_v2/gets");
}
export function getHotRecommendData() {
    return SCRequest.get<IResultData<IHotRecommend>>("/allProduct/gets");
}

