import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./Store";
import { SearchBoxForm } from "../interfaces";

// Define the initial state using that type
const initialState: SearchBoxForm = {
  pickUpPlace: "",
  dropOffPlace: "",
  pickUpDate: {
    date: "",
    time: "00:00",
  },
  dropOffDate: {
    date: "",
    time: "00:00",
  },
};

export const counterSlice = createSlice({
  name: "searchBoxForm",
  initialState,
  reducers: {
    setPlaceBoxForm: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const name = action.payload.name as "pickUpPlace" | "dropOffPlace";
      state[name] = action.payload.value;
    },
    setDatesBoxForm: (
      state,
      action: PayloadAction<{
        name: "pickUpDate" | "dropOffDate";
        value: string;
        typeOfInput: "date" | "time";
      }>
    ) => {
      const name = action.payload.name;
      state[name][action.payload.typeOfInput] = action.payload.value;
    },
    clearInputs: (state) => {
      state.pickUpPlace = "";
      state.dropOffPlace = "";
      state.pickUpDate = {
        date: "",
        time: "00:00",
      };
      state.dropOffDate = {
        date: "",
        time: "00:00",
      };
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const { setPlaceBoxForm, setDatesBoxForm,clearInputs  } = counterSlice.actions;

export default counterSlice.reducer;
