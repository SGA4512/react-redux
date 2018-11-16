import {
    FETCH_DATA
} from '../actions/types'

const initialState = {
    todo_list: [], 
    new_todo: []
}

export default function( state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA : 
                return {
                    ...state,
                    todo_list: action.payload
                }
            default: 
                return state
    }

}