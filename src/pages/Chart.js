import React, { useContext } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { Context } from '../Context/Context';
import '../App.css'

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const Chart = () => {
  const { surveyResults } = useContext(Context);

  const colorRange = {
    "color": [{
      "minValue": "0",
      "maxValue": "3",
      "code": "#e44a00"
    }, {
      "minValue": "3",
      "maxValue": "7",
      "code": "#f8bd19"
    }, {
      "minValue": "7",
      "maxValue": "10",
      "code": "#6baa01"
    }]
  };
  
  const dials = {
    "dial": [{
      "value": surveyResults.nps_score
    }]
  };  

  const chartConfigs = {
    type: 'angulargauge',
    width: '700', 
    height: '400', 
    dataFormat: 'json', 
    dataSource: {
        "chart": {
          "caption": "Customer Satisfaction Score",
          "subcaption": "Last week",
          "lowerLimit": "0",
          "upperLimit": "10",
          "theme": "fusion"
        },
        "colorRange": colorRange,
        "dials": dials
    }
  }

  return (
    <>
      {surveyResults ? (<ReactFC {...chartConfigs} className="chart"/>) : ''}
    </>
  )
}

export default Chart;