import React from 'react'
import moment from 'moment';

const GetDuration = (props) =>{
    const {time} = props
    const result = moment.duration(time, 'minutes')
    console.log('result', result)
    return(
        result._data && <h5>Duration - {`${time} minutes (${result._data.hours} hour ${result._data.minutes} minutes)`} </h5>
    )
}

export default GetDuration