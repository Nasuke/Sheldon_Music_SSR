
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import homeReducer from './modules/home';

const store = configureStore({
    reducer: {
        home: homeReducer
    }
})
// const makeStore = () =>
// //     configureStore({
// //         reducer: {
// //             home: homeReducer
// //         },
// //         devTools: true
// //     })
// // 

const wrapper = createWrapper<AppStore>(makeStore)
export default wrapper
// 自定义类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
