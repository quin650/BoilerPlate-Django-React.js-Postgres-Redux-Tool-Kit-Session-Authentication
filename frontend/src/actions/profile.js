import Cookies from 'js-cookie';
import axios from 'axios';
import { profActions } from '../reducers/profile';
import { tasksActions } from '../reducers/tasks';
export const create_user_profile = (first_name, last_name, phone, city)  => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ 'withCredentials': true, first_name, last_name, phone, city});
        const createProfile = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/profile/create_user_profile`, body, config);
            return res;
        };
        try {
            const res = await createProfile();
            console.log('res.data: ', res.data);
            if ( res.data.profile && res.data.username){
                dispatch(profActions.createUserProfileSuccess(res.data));
            } else {
                dispatch(profActions.createUserProfileFail());
            }
        } catch (err) {
            console.log(err);
            dispatch(profActions.createUserProfileFail());
        };
    };
};
export const load_user_profile = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        const loadUser = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/profile/load_user_profile`, config);
            return res;
        };
        try {
            const res = await loadUser();
            if (res.data.error) {
                dispatch(profActions.loadUserProfileFail());
            } else {
                dispatch(profActions.loadUserProfileSuccess(res.data));
            }
        } catch (err) {
            dispatch(profActions.loadUserProfileFail());
        };
    };
};
export const update_user_profile = (first_name, last_name, phone, city)  => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ 'withCredentials': true, first_name, last_name, phone, city});
        const updateProfile = async () => {
            const res = await axios.put(`http://127.0.0.1:8000/profile/update_user_profile`, body, config)
            return res;
        };
        try {
            const res = await updateProfile();
            if ( res.data.profile && res.data.username){
                dispatch(profActions.updateUserProfileSuccess(res.data));
            } else {
                dispatch(profActions.updateUserProfileFail());
            }
        } catch (err) {
            dispatch(profActions.updateUserProfileFail());
        };
    };
};
export const create_user_profile_tasks = (data) => { 
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        let task_title = data['task_title']
        let task_description = data['task_description']
        let task_tags = data['task_tags']
        let task_order = data['task_order']
        let task_priority_level = data['task_priority_level']
        let task_links = data['task_links']
        let task_due_date = data['task_due_date']

        const body = JSON.stringify({ 'withCredentials': true, task_title, task_description, task_tags, task_order, task_priority_level, task_links, task_due_date});
        const createTask = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/profile/create_user_profile_tasks`, body, config);
            return res;
        };
        try {
            const res = await createTask();
            if ( res.data.tasks && res.data.username){
                console.log('create_user_profile_tasks --- res.data: ', res.data)
                dispatch(tasksActions.addTaskSuccess(res.data));
            } else {
                dispatch(tasksActions.addTaskFail());
            }
        } catch (err) {
            console.log(err);
            dispatch(tasksActions.addTaskFail());
        };
    };
};
export const load_user_profile_tasks = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        const loadTasks = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/profile/load_user_profile_tasks`, config);
            return res;
        };
        try {
            const res = await loadTasks();
            if (res.data.error) {
                dispatch(tasksActions.loadTaskFail());
            } else {
                console.log('action: load_user_profile_tasks --- res.data.tasks: ', res.data.tasks);
                dispatch(tasksActions.loadTaskSuccess(res.data));
                
            }
        } catch (err) {
            dispatch(tasksActions.loadTaskFail());
        };
    };
};
export const update_user_profile_tasks = (task_id, task_title, task_description, task_tags, task_order, task_priority_level, task_links, task_due_date)  => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ 'withCredentials': true, task_id, task_title, task_description, task_tags, task_order, task_priority_level, task_links, task_due_date});
        const updateTasks = async () => {
            const res = await axios.put(`http://127.0.0.1:8000/profile/update_user_profile_tasks`, body, config)
            return res;
        };
        try {
            const res = await updateTasks();
            if ( res.data.tasks && res.data.username){
                console.log('update_user_profile_tasks --- res.data.tasks: ', res.data);
                dispatch(tasksActions.updateTaskSuccess(res.data));
            } else {
                dispatch(tasksActions.updateTaskFail());
            }
        } catch (err) {
            dispatch(tasksActions.updateTaskFail());
        };
    };
};
export const delete_user_profile_task = (task_id) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({'withCredentials': true, task_id});
        const deleteTasks = async () => {
            const res = await axios.delete(`http://127.0.0.1:8000/profile/delete_user_profile_task`, { data: body, headers: config.headers })
            return res;
        };
        try {
            const res = await deleteTasks();
            if (res.data.error){
                console.log('res.data: ', res.data)
                console.log('delete action failed, task_id: ', task_id)
                dispatch(tasksActions.deleteTaskFail());
            } else {
                console.log('res.data: ', res.data)
                console.log('deleteTaskSuccess, task_id: ', task_id);
                dispatch(tasksActions.deleteTaskSuccess(task_id));
            }
        } catch (err) {
            console.log('err: ', err)
            console.log('delete action errored out, task_id: ', task_id)
            dispatch(tasksActions.deleteTaskFail());
        };
    };
};