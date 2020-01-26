const INIT_TAIMER = 'INIT_TAIMER'
const CHANGE_INTERVAL = 'CHANGE_INTERVAL'
const SET_STATE_TAIMER = 'SET_STATE_TAIMER'
const SET_COUNT_TAIM = 'SET_COUNT_TAIM'

let initState = {
    taimerState: 'finish',
    countTaim: 0,
    intervalStep: 1,
}

const taimerReducer = (state = initState, action) => {
    switch(action.type){
        case INIT_TAIMER:
            return {...state}
        case CHANGE_INTERVAL:
            return {...state, intervalStep:action.interval}
        case SET_STATE_TAIMER:
            return {...state, taimerState: action.timerState}
        case SET_COUNT_TAIM:
            return {...state, countTaim: action.countTaim}
        default:
            return state
    }
    
}
export const initTaimer = () => ({type:'INIT_TAIMER'})
export const changeInterval = (interval) => ({type:'CHANGE_INTERVAL', interval})
export const setTaimerState = (timerState) => ({type:'SET_STATE_TAIMER', timerState})
export const setCountTaim = (countTaim) => ({type:'SET_COUNT_TAIM', countTaim})
export default taimerReducer