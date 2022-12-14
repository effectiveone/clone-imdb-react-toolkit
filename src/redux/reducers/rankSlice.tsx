import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  rank: [],
};

export const rankSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {
    rankAdd: (state, { payload }) => {
      // let index = state.rank.findIndex(i=>i.id == payload.id)
      // state.rank.splice(index, 1)


   const index =   state.rank.find(z=> z.id === payload.id) 

if(index){

  index.updatedRankingMovie = payload.updatedRankingMovie
} else {

          state.rank.push({
            id: payload.id,
            updatedRankingMovie: payload.updatedRankingMovie
          })

        }

      
    },

    rankRemove: (state, { payload }: PayloadActionInterface) => {
      const itemId = payload;
      state.rank = state.rank.filter((itme) => itme.id !== itemId)
    },
  },
});





export const { rankAdd, rankRemove } = rankSlice.actions;

export default rankSlice.reducer;


// interface PayloadActionInterface {
//   id: number,
//   rank: number
// }