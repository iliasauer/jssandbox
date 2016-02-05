const extData = require('../../data');
const cfgConstants = extData.cfgConstants;

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

drawChart = function() {
    console.log("d3 works right here (SVG creation)");
};