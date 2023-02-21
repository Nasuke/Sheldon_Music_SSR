import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { getSearchSuggestion } from '../../service/module/home';
import type { ISearchSuggest } from '../../service/module/home';

interface HomeInitialState {
    count: number,
    navbar: ISearchSuggest
}
const initialHomeState: HomeInitialState = {
    count: 10,
    navbar: {} as ISearchSuggest
}
const homeSlice = createSlice({
    name: "home",
    initialState: initialHomeState,
    reducers: {
        changeCountAction(state, { payload }: PayloadAction<number>) {
            state.count += payload
        }
    },
    extraReducers(builder) {
        builder.addCase(HYDRATE, (state, action: any) => {
            return {
                // state -> initialState
                // action.payload -> rootState
                ...state,
                ...action.payload.home
            }
        }).addCase(fetchSearchSuggest.fulfilled, (state, { payload }:PayloadAction<ISearchSuggest>) => {
            state.navbar = payload
        })
    },
})

export const fetchSearchSuggest = createAsyncThunk("home/searchSuggest", async () => {
    const res = await getSearchSuggestion()
    return res.data
})

export const { changeCountAction } = homeSlice.actions

export default homeSlice.reducer