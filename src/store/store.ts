import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/usersSlice'
import acessFlowSlice from './slices/acessFlowSlice'
import fullLoading from './slices/fullLoading'


export const store = configureStore({
  reducer: {
    users: usersSlice,
    accessFlow: acessFlowSlice,
    fullLoading: fullLoading,
  }
})
