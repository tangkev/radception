import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

export default class GoogleLineGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const readings = this.props.graphReadings;
    const axesNames = [['Time', 'Dose']];
    const plotting = axesNames.concat(readings)

    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', padding: 0 }}>
        <Chart
          width={400}
          height={400}
          chartType="Line"
          loader={<div>Loading Chart</div>}
          data={plotting}
          options={{
            legend: { position:'none' },
            chart: {
              title: 'Live Dose Rate',
            },
            hAxis: {
              title: 'Time',
            },
            vAxis: {
              title: 'Dose',
            },
          }}
        />
      </div>
    );
  }
}