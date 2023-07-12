import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    companyA: '',
    companyB: '',
    email: '',
    location:""
  },
  reducers: {
    updateFormInput: (state, action) => {
      const { fieldName, value } = action.payload;
      state[fieldName] = value;
    },
  },
});

export const { updateFormInput } = formSlice.actions;
export default formSlice.reducer;
