import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/usersSlice'
import acessFlowSlice from './slices/acessFlowSlice'


export const store = configureStore({
  reducer: {
    users: usersSlice,
    accessFlow: acessFlowSlice,
  }
})
