import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    tasks: [],
};
const todoSlice = createSlice({
	name: 'task',
	initialState,
reducers: {
    addTask: (state, action) => {
        const task = {
            id: Math.random().toString(),
            task_title: action.payload.tasks.task_title,
            task_description: action.payload.tasks.task_description,
            task_tags: action.payload.tasks.task_tags,
            task_order: action.payload.tasks.task_order,
            task_priority_level: action.payload.tasks.task_priority_level,
            task_links: action.payload.tasks.task_links,
            // task_due_date: action.payload.task_due_date
            };
        console.log('action.payload: ', action.payload.tasks)
        console.log('action.payload.task_title: ', action.payload.tasks.task_title)
        state.tasks.push(task);
        state.count += 1;
        },
    removeTask: (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
        state.count -= 1;
        },
    updateUserProfileTasksFail(state) {
        state;
        },
    },
});

export const tasksActions  = todoSlice.actions;
export default todoSlice;