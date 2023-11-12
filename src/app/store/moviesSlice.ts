import { createSlice, Slice } from "@reduxjs/toolkit";

import type { MoviesInitialState } from "../types/store";
import type { Movie } from "../types/pages";

const initialState: MoviesInitialState = {
    chosenMovie: {} as Movie
}

const moviesSlice: Slice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        changeChosenMovie: (state, action) => {
            state.chosenMovie = action.payload;
        }
    }
}
);

export const { changeChosenMovie } = moviesSlice.actions;
export default moviesSlice.reducer;