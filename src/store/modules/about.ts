import { createSlice } from "@reduxjs/toolkit"

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    message: "这是about页面"
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = aboutSlice.actions
export default aboutSlice.reducer
