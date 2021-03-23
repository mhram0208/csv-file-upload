import React,{useState} from 'react'
import GetDuration from './GetDuration'
import ColumnChart from './ColumnChart'
import Search from './Search';
import ParticipantsTable from './ParticipantsTable'

const Report = (props) =>{
    const {data} = props
    const [searchText, setSearchText] = useState('')

    const handleSearchChange = (e) =>{
        setSearchText(e.target.value)
    }

    const hostData = data.find((ele)=>{
        return ele.Guest==='No'
    })

    const filteredParticipants = () =>{
        const result =  data.filter((ele)=>{
            return ele['Name (Original Name)'].toLowerCase().includes(searchText) || ele['User Email'].toLowerCase().includes(searchText)
        })
        return result
    }

    return(
        <div>
            <hr/>
            <h3>Report</h3>
            <h5>Host - {hostData['Name (Original Name)']}</h5>
            <h5>Total Particpants - {data.length}</h5>
            <GetDuration time={hostData['Total Duration (Minutes)']} /><hr/>
            <div className="row">
                <Search searchText={searchText} handleSearchChange={handleSearchChange}/>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ParticipantsTable data={filteredParticipants()}/>
                </div>
                <div className="col-md-6">
                    <ColumnChart data={data}/>
                </div>
            </div>
        </div>
    )
}

export default Report