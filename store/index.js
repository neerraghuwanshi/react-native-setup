import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux'
import Thunk from 'redux-thunk'

import { reducer } from './reducers/reducer'


const combinedReducer = combineReducers({
    reducer: reducer,
})


export const store = createStore(
    combinedReducer,
    applyMiddleware(Thunk)
)