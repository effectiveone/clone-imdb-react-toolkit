import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "movie",
  initialState: {
   lang: "en"
  },
  reducers: {
    getLanguage(category) {
      return category;
    },
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },


},
});

export const {
    getLanguage,
    setLanguage

} = languageSlice.actions;

export default languageSlice.reducer;