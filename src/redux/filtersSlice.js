import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

console.log(initialState.filters.name);

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
      //   state.filters.name.filter((user) =>
      //     user.name.toLowerCase().includes(action.payload.toLowerCase())
      //   );
    },
  },
});

// const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

export const selectNameFilter = (state) => state.filters.filters.name;

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
