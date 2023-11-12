import type {Reducer} from "@reduxjs/toolkit";

export type Reducers = {
    sidebar: Reducer
}

export type SidebarInitialState = {
    isOpened: boolean;
    chosenPage: string
}

