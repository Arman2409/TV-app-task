import type {Reducer} from "@reduxjs/toolkit";

import type { Movie } from "./pages";

export type Reducers = {
    sidebar: Reducer
    movies: Reducer
}

export type SidebarInitialState = {
    isOpened: boolean
    chosenPage: string
}

export type MoviesInitialState = {
    chosenMovie: Movie
}
