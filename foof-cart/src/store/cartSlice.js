const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((iteam) => iteam.id !== action.payload);
    },
    removeOne(state, action){
      const cardIndex = state.findIndex((iteam)=>iteam.id===action.payload)
        //  if(state.[cardIndex].quantity>=1)
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
