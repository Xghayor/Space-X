import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  loading: false,
  error: null,
};

export const getMissions = createAsyncThunk('get/missions', () => axios.get('https://api.spacexdata.com/v3/missions')
  .then((response) => response.data)
  .catch((error) => {
    throw error;
  }));

const missionSlice = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    toggleJoinStatus: (state, action) => {
      const id = action.payload;
      state.missions = state.missions.map((mission) => (
        mission.mission_id !== id ? mission : { ...mission, joined: !mission.joined }
      ));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleJoinStatus } = missionSlice.actions;
export default missionSlice.reducer;
