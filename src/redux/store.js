import {createStore, combineReducers} from 'redux'
import taimerReducer from './taimerReducer'

let reducers = combineReducers({
    taimer:taimerReducer,
})
let store = createStore(reducers)
window.store = store
export default store