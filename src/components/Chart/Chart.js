import './Chart.css'
import ChartBar from './ChartBar';

const Chart=(props)=>{
    const valArr=props.dataPoints.map(dataPoint=>dataPoint.value)
    const max=Math.max(...valArr)
    return(
        <div className="chart">
            {
                props.dataPoints.map(dataPoint=>
                    <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={max} 
                     />
                )
            }
        </div>
    )
}
export default Chart;