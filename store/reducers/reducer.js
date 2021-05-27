import { SET_STATE } from '../actions/action';


const initialState = {
    state: null,
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case SET_STATE:
            return {
                ...state,
                state: action.state
            }
        default:
            return state
    }
}