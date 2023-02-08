import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = 'http://localhost:3001/projects';

const initialState = {
    projects:[],
};

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjects: (state, action) => {
            state.projects = [action.payload];
        }
    }
});

const api = axios.create({
    baseURL: "http://localhost:3001/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  

export function getProjectsAsync() {
    return async (dispatch) => {
        api
            .get("/projects")
            .then((response) => {
                dispatch(getProjects(response.data))
            })
            .catch((error) => {
                throw new Error(error);
            })
    }
};

// export the actions
export const { getProjects } = projectSlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
// export const showProjects = (state) => state.projects.data;

// export the default reducer
export default projectSlice.reducer;