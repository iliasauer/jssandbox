const extData = require('../../data');
const cfgConstants = extData.cfgConstants;
const chartTypes = extData.chartTypes;
const threadNamePattern = extData.threadNamePattern;
var common = require('../util/common');

exports.clearArrays = function(array) {
    array.forEach(function(d) {
        return d.values.shift();
    });
};

exports.drawThroughputCharts = function(data, json, sec) {
    var updateFunction = drawChart(data, json, "t[seconds]", "Rate[op/s]",
        "#tp-" + json.contextMap[cfgConstants.runId].split(".").join("_"),
        sec);
    return {
        update: function(json) {
            updateFunction(chartTypes.TP, json.message.formattedMessage);
        }
    };
};

exports.drawBandwidthCharts = function(data, json, sec) {
    var updateFunction = drawChart(data, json, "t[seconds]", "Rate[MB/s]",
        "#bw-" + json.contextMap[cfgConstants.runId].split(".").join("_"),
        sec);
    return {
        update: function(json) {
            updateFunction(chartTypes.BW, json.message.formattedMessage);
        }
    };
};

exports.drawLatencyCharts = function(data, json, sec) {
    var updateFunction = drawChart(data, json, "t[seconds]", "Latency[us]",
        "#lat-" + json.contextMap[cfgConstants.runId].split(".").join("_"),
        sec);
    return {
        update: function(json) {
            updateFunction(chartTypes.LAT, json.message.formattedMessage);
        }
    };
};

exports.drawDurationCharts = function(data, json, sec) {
    var updateFunction = drawChart(data, json, "t[seconds]", "Duration[us]",
        "#dur-" + json.contextMap[cfgConstants.runId].split(".").join("_"),
        sec);
    return {
        update: function(json) {
            updateFunction(chartTypes.DUR, json.message.formattedMessage);
        }
    };
};

drawChart = function(data, json) {
    var runMetricsPeriodSec = json.contextMap[cfgConstants.runMetricsPeriodSec];
    json.threadName = json.threadName.match(threadNamePattern)[0];
    console.log("d3 works right here (SVG creation)");
    return function (chartType, value) {
        var parsedValue = common.parsePerfAvgLogEvent(chartType, value);
        console.log("Done! JSON has been parsed.")
    };
};