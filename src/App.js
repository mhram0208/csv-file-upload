import React, {useState} from 'react'
import Papa from 'papaparse/papaparse.min';
import Report from './Report'

const App = (props)=>{
  const [csvData, setCsvData] = useState({})
  const [data, setData] = useState([])

  const handleFileChange = (e) =>{
    const result = e.target.files[0]
    setCsvData(result)
  }
  
  const handleUpload = () =>{
    console.log(csvData)
    Papa.parse(csvData,{
      header : true,
      skipEmptyLines : true,
      complete : (result) =>{
        console.log(result)
        setData(result.data)
      }
    })
  }
  return(
    <div>
      <h2>File Upload + CSV Parser</h2>
        <input type="file" onChange = {handleFileChange} name="file" />
        <button type="submit" onClick={handleUpload}>Upload</button><br/>
        {data.length > 0 && <Report data={data}/>}
        
    </div>
  )
}


export default App