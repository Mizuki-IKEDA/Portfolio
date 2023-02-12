import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    projects:[],
    status: 'idle',
    error: null,
};

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async () => {
        try {
            const response = await axios.get(
                "http://localhost:3001/projects"
            );
            return [...response.data];
        } catch (error) {
            return error.message;
        }
    }
)

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.projects = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
        }
    }
);

// Selectors
export const selectProjects = state => state.projects.projects;
export const getProjectsStatus = state => state.projects.status;
export const getProjectsError = state => state.projects.error;

// export the default reducer
export default projectSlice.reducer;