import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AcessFlowProps = {
    currentAccess: number;
}

const initialState: AcessFlowProps = {
    currentAccess: Number(localStorage.getItem("pageKey")) | 1,
}

export const acessFlowSlice = createSlice({
    name: "currentAccess",
    initialState,
    reducers: {
        setCurrentAccess: (state, action: PayloadAction<number>) => {
            state.currentAccess = action.payload;
            localStorage.setItem("pageKey", JSON.stringify(action.payload));
        }
    }
})

export const { setCurrentAccess } = acessFlowSlice.actions;
export const selectAccessPage = (state: { accessFlow: AcessFlowProps }) => state.accessFlow.currentAccess;

export default acessFlowSlice.reducer;