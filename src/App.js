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
  
  const handleUpload = (e) =>{
    if( document.getElementById("csvFile").files.length == 0 ){
      alert('No file Selected')
  } else {
      Papa.parse(csvData,{
        header : true,
        skipEmptyLines : true,
        complete : (result) =>{
          console.log(result)
          setData(result.data)
        }
      })
    } 
  }

  return(
    <div className="container">
      <h2>File Upload + CSV Parser</h2>
      <input type="file" id="csvFile" onChange = {handleFileChange} name="file" />
      <button type="submit" className="btn btn-primary" onClick={handleUpload}>Upload</button>
      {data.length > 0 && <Report data={data}/>}
    </div>
  )
}


export default App