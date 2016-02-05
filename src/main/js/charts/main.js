var $ = require('jquery')(require('jsdom').jsdom().defaultView);
const extData = require('../data');
const cfgConstants = extData.cfgConstants;
const last = extData.last;
const avg = extData.avg;
const min = extData.min;
const max = extData.max;
var getScenarioChartObject = require('./util/common.js');
var single = require('./scenarios/single.js');
var chartsArray;

charts = function(array) {
    chartsArray = array;
    //
    return {
        single: drawSingleCharts,
    }
}

module.exports = charts;

drawSingleCharts = function(jsonValue) {
    var temp = (Array.isArray(jsonValue)) ? jsonValue[0] : jsonValue;
    //  conf params for single charts
    var runId = temp.contextMap[cfgConstants.runId],
        runScenarioName = temp.contextMap[cfgConstants.runScenarioName],
        runMetricsPeriodSec = parseInt(
            temp.contextMap[cfgConstants.runMetricsPeriodSec]
        );
    last.text = "last " + runMetricsPeriodSec + " sec";

    var tpAndBwData = [
        {
            name: avg,
            values: [
                {x: 0, y: 0}
            ]
        }, {
            name: last,
            values: [
                {x: 0, y: 0}
            ]
        }
    ];

    var latAndDurData = [
        {
            name: avg,
            values: [
                {x: 0, y: 0}
            ]
        }, {
            name: min,
            values: [
                {x: 0, y: 0}
            ]
        }, {
            name: max,
            values: [
                {x: 0, y: 0}
            ]
        }
    ];

    var throughput = $.extend(true, [], tpAndBwData),
        bandwidth = $.extend(true, [], tpAndBwData),
        latency = $.extend(true, [], latAndDurData),
        duration = $.extend(true, [], latAndDurData);

    if ((jsonValue !== undefined) && (jsonValue.length > 0)) {
        single.clearArrays(throughput);
        single.clearArrays(bandwidth);
        single.clearArrays(latency);
        single.clearArrays(duration);
        var tpSec = single.initDataArray(
            throughput, jsonValue, constants.getChartTypes().TP, runMetricsPeriodSec
        );
        var bwSec = single.initDataArray(
            bandwidth, jsonValue, constants.getChartTypes().BW, runMetricsPeriodSec
        );
        var latSec = single.initDataArray(
            latency, jsonValue, constants.getChartTypes().LAT, runMetricsPeriodSec
        );
        var durSec = single.initDataArray(
            duration, jsonValue, constants.getChartTypes().DUR, runMetricsPeriodSec
        );
        chartsArray.push(getScenarioChartObject(runId, runScenarioName,
            [single.drawThroughputCharts(throughput, jsonValue[0], tpSec),
                single.drawBandwidthCharts(bandwidth, jsonValue[0], bwSec),
                single.drawLatencyCharts(latency, jsonValue[0], latSec),
                single.drawDurationCharts(duration, jsonValue[0], durSec)]));
    } else {
        //
        chartsArray.push(getScenarioChartObject(runId, runScenarioName,
            [single.drawThroughputCharts(throughput, jsonValue),
                single.drawBandwidthCharts(bandwidth, jsonValue),
                single.drawLatencyCharts(latency, jsonValue),
                single.drawDurationCharts(duration, jsonValue)]));
    }
}