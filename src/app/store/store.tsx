import { configureStore, Store} from "@reduxjs/toolkit";

import sidebarReducer from "./sidebarSlice";
import type {Reducers} from "../types/store";


const reducers:Reducers = {
    sidebar: sidebarReducer,
}

const store:Store = configureStore({
    reducer:reducers,
})


export default store;
export type IRootState = ReturnType<typeof store.getState>; 