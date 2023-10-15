import { createSlice } from '@reduxjs/toolkit';
import { HomeworkModel } from '../../models/homework';
import hw1 from '../../assets/data/hw1';
import hw2 from '../../assets/data/hw2';

export interface CounterState {
  homeworkSet: HomeworkModel[]
}

const initialState: CounterState = {
  homeworkSet: [
    hw1,
    hw2
  ]
};

export const homeworkSlice = createSlice({
  name: 'homework',
  initialState,
  reducers: {
  },
});

export default homeworkSlice.reducer;
