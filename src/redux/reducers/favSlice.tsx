import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  fav: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    favAdd: (state, { payload }: PayloadAction) => {
     const item  = state.fav.find((as) =>as.id === payload.id) 
     if (item) {
      return
     }
     else {
      state.fav.push({
        id: payload.id,
        img: payload.img,
        title: payload.title,
        rate: payload.rate,
        type: payload.type,
      })
    }
    },

    favRemove: (state, { payload }: PayloadAction) => {
      const itemId = payload;
      state.fav = state.fav.filter((itme) => itme.id !== itemId)
    },
  },
});

export const { favAdd, favRemove } = favSlice.actions;

export default favSlice.reducer;
