import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FullLoadingProps = {
    isLoading: boolean;
}

const initialState: FullLoadingProps = {
    isLoading: false,
}

export const fullLoading = createSlice({
    name: "fullLoading",
    initialState,
    reducers: {
        setFullLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;

            console.log(action.payload)
        }
    }
})

export const { setFullLoading } = fullLoading.actions;
export const selectFullLoading = (state: { fullLoading: FullLoadingProps }) => state.fullLoading.isLoading;

export default fullLoading.reducer;