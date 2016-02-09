const extData = require('../../data');
const chartTypes = extData.chartTypes;

exports.getScenarioChartObject = function(runId, runScenarioName, scenarioCharts) {
    return {
        "run.id": runId,
        "run.scenario.name": runScenarioName,
        "charts": scenarioCharts
    };
};

exports.parsePerfAvgLogEvent = function(chartType, value) {
    var pattern = null;
    switch(chartType) {
        case chartTypes.TP:
            pattern = "[\\s]+TP\\[op/s]=\\(([\\.\\d]+)/([\\.\\d]+)\\)";
            break;
        case chartTypes.BW:
            pattern = "[\\s]+BW\\[MB/s]=\\(([\\.\\d]+)/([\\.\\d]+)\\)";
            break;
        case chartTypes.LAT:
            pattern = "[\\s]+latency\\[us\\]=\\((\\d+)/(\\d+)/(\\d+)\\)";
            break;
        case chartTypes.DUR:
            pattern = "[\\s]+duration\\[us\\]=\\((\\d+)/(\\d+)/(\\d+)\\)";
            break;
    }
    var matched = value.match(pattern);
    return matched.slice(1, matched.length.length);
};