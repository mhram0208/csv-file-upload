import React from 'react'
import Chart from "react-google-charts";

const ColumnChart = (props) =>{
    const {data} = props
    const chartData = [
        ['Student Names', 'Minutes Attended'],
    ]
    for(const key in data){
        // console.log([data[key]['Name (Original Name)'],data[key]['Total Duration (Minutes)']])
        chartData.push([data[key]['Name (Original Name)'],Number(data[key]['Total Duration (Minutes)'])])
    }
    return (
    <div style={{ display: 'flex', maxWidth: 900 }}>
        <Chart
            width={500}
            height={400}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
            title: 'Column Chart',
            chartArea: { width: '30%' },
            hAxis: {
                title: 'Student Names',
                minValue: 0,
            },
            vAxis: {
                title: 'Minutes Attended',
            },
            }}
            legendToggle
        />
    </div>
    )
}

export default ColumnChart