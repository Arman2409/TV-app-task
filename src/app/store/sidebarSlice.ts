import { createSlice, Slice } from "@reduxjs/toolkit";
import { SidebarInitialState } from "../types/store";

const initialState:SidebarInitialState = {
    isOpened: false,
    chosenPage: "home"
}

const socketSlice:Slice = createSlice({
    name:  "socketSlice",
    initialState,
    reducers: {
        updateStatus: (state, action) => {
            state.isOpened = action.payload;
        },
        changeChosenPage:(state,action)=>{
            state.chosenPage=action.payload;
        }
    }
    }
);

export const { updateStatus, changeChosenPage } = socketSlice.actions;
export default socketSlice.reducer;