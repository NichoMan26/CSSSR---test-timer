import React, {useEffect} from 'react'

const Timer = (props) => {
    let interval
    if (props.taimer.taimerState === 'start') {
            interval = setTimeout(() => {
            props.setCountTaim(props.taimer.countTaim + props.taimer.intervalStep)
        }, props.taimer.intervalStep * 1000)

    }
    const resetSettings = () =>{
        clearInterval(interval)
        props.setTaimerState('finish')
        props.changeInterval(1)
        props.setCountTaim(0)
    }
    return (
        <div>
            <p>
                Интервал обновления секундомера: {props.taimer.intervalStep} сек.
                <button onClick={() => {
                    clearInterval(interval)
                    props.changeInterval(props.taimer.intervalStep + 1)
                    }}>+</button>
                <button onClick={() => {
                    clearInterval(interval)
                    props.changeInterval(props.taimer.intervalStep - 1)
                    }}>-</button>
            </p>
            <p>Секундомер: {props.taimer.countTaim} сек.</p>
            <div>
                <button onClick={() => {props.setTaimerState('start')}}>Старт</button>
                <button onClick={() => {resetSettings()}}>Стоп</button>
            </div>
           
        </div>
    )
}
export default Timer