import React from 'react'
import GetDuration from './GetDuration'

const Report = (props) =>{
    const {data} = props
    const hostData = data.find((ele)=>{
        return ele.Guest==='No'
    })

    return(
        <div>
            <hr/>
            <h1>Report</h1>
            <h2>Host - {hostData['Name (Original Name)']}</h2>
            <h2>Total Particpants - {data.length}</h2>
            <GetDuration time={hostData['Total Duration (Minutes)']} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,i)=>{
                        return(
                            <tr key={i}>
                                <td>{d['Name (Original Name)']}</td>
                                <td>{d['Total Duration (Minutes)']}</td>
                                <td>{d['User Email']}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Report