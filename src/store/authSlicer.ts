import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
}

export const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: state => {

    }
  }
})

export const { auth } = authSlicer.actions
export default authSlicer.reducer