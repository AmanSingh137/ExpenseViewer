import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';


const Chart = props => {
    const valuePoints = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...valuePoints);


    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />)}
    </div>
}


export default Chart;