import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'en',
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
      toggleLanguage: (state) => {
        if (state.language === 'en') {
            state.language = 'fr'
        } else if (state.language === 'fr') {
            state.language = 'en'
        }
      },
    },
  })
  

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;