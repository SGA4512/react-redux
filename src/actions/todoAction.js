import {
    FETCH_DATA, ADD_DATA
} from './types'
import axios from "axios"

export const fetchData = () => (dispatch) => {
    // dispatch({
    //     type: FETCH_DATA,
    //     payload: [{description: "learn Redux", done: false}]
    // })
    axios.get("https://haekal-todo-list-api.herokuapp.com/todos")
        .then( res => dispatch({
            type: FETCH_DATA,
            payload: res.data
        }))
        .catch(err => console.log(err))

}

export const createTodo = data => dispatch => {
    axios.post("https://haekal-todo-list-api.herokuapp.com/todos", data)
    .then( res => dispatch({
        type: ADD_DATA,
        payload: data
    }))
    .catch(err => console.log(err))
}