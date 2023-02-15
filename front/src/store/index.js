import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../reducers/projectReducer';
import languageReducer from '../reducers/languageReducer';

const store = configureStore({
    reducer: {
        projects: projectReducer,
        language: languageReducer,
    },
});

export default store;
