import { createSlice } from '@reduxjs/toolkit';
import { HomeworkModel } from '../../models/homework';
import hw1 from '../../assets/data/hw1';

export interface CounterState {
  homeworkSet: HomeworkModel[]
}

const initialState: CounterState = {
  homeworkSet: [
    hw1
  ]
};

export const homeworkSlice = createSlice({
  name: 'homework',
  initialState,
  reducers: {
  },
});

export default homeworkSlice.reducer;
