import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type navBarNavigationProps = {
    currentNavigation: number;
}

const initialState: navBarNavigationProps = {
    currentNavigation: Number(localStorage.getItem("navBarNavigation")) | 1,
}

export const currentNavBarNavigation = createSlice({
    name: "navBarNavigation",
    initialState,
    reducers: {
        setCurrentNavBarNavigation: (state, action: PayloadAction<number>) => {
            state.currentNavigation = action.payload;
            localStorage.setItem("navBarNavigation", JSON.stringify(action.payload));
        }
    }
})

export const { setCurrentNavBarNavigation } = currentNavBarNavigation.actions;
export const currentNavNavigation = (state: { navBarNavigation: navBarNavigationProps }) => state.navBarNavigation.currentNavigation;
export default currentNavBarNavigation.reducer;