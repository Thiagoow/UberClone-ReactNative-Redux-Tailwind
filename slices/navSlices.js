import { createSlice } from '@reduxjs/toolkit';

//Defining the states:
const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    //State actions (that change dynamically the state - PUSH):
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    }
  }
});

//Selectors (that PULLs the states):
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

//Export actions & reducer:
export const { setOrigin, setDestination, setTravelTimeInfo } =
  navSlice.actions;
export default navSlice.reducer;
