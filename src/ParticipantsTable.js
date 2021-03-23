import React from 'react'

const ParticipantsTable = (props) =>{
    const {data} = props
    return(
            <table className="table table-striped">
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
                                <td>{d['User Email']}</td>
                                <td>{d['Total Duration (Minutes)']}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    )
}

export default ParticipantsTable