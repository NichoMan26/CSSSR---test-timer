import {connect} from 'react-redux'
import Taimer from './Taimer'
import {changeInterval, setTaimerState, setCountTaim} from '../../redux/taimerReducer'
let mapStateToProps = (state) => {
    return{
        taimer:state.taimer,
    }
}
let mapStateDispatch = (dispatch) => {
    return{
        changeInterval:(interval) => {
            dispatch(changeInterval(interval))
        },
        setTaimerState:(timerState) => {
            dispatch(setTaimerState(timerState))
        },
        setCountTaim:(countTaim) => {
            dispatch(setCountTaim(countTaim))
        },
    }
}


export default connect(mapStateToProps, mapStateDispatch)(Taimer)