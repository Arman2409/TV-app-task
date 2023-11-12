import { createSlice, Slice } from "@reduxjs/toolkit";
import { SidebarInitialState } from "../types/store";

const initialState:SidebarInitialState = {
    isOpened: false,
    chosenPage: "home"
}

const sidebarSlice:Slice = createSlice({
    name:  "sidebarSlice",
    initialState,
    reducers: {
        updateStatus: (state, action) => {
            state.isOpened = action.payload;
        },
        changeChosenPage:(state,action)=>{
            state.chosenPage = action.payload;
        }
    }
    }
);

export const { updateStatus, changeChosenPage } = sidebarSlice.actions;
export default sidebarSlice.reducer;