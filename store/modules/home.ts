import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';


type countType = number
interface HomeInitialState {
    count: number 
}
const initialHomeState: HomeInitialState = {
    count:100
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
        })
    },
})

export const { changeCountAction } = homeSlice.actions

export default homeSlice.reducer