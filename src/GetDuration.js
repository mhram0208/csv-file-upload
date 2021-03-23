import React from 'react'
import moment from 'moment';

const GetDuration = (props) =>{
    const {time} = props
    const result = moment.duration(time, 'minutes')
    console.log('result', result)
    return(
        <div>
            {result._data && <h2>Duration - {`${time} minutes (${result._data.hours} hour ${result._data.minutes} minutes)`} </h2>}
        </div>
    )
}

export default GetDuration