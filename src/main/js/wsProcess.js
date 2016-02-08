var $ = require('jquery')(require('jsdom').jsdom().defaultView);
const extData = require('./data');
const scenarioName = extData.scenarios;
const markers = extData.markers;
const oldJson = extData.oldJson;
const newJson = extData.newJson;
var charts = require('./charts/main.js');
var chartsArray = [];

wsProcess = function () {
    if ($.isArray(oldJson)) {
        var logEventsByRunId = {};
        oldJson.forEach(function (element) {
            var runId = element.contextMap["run.id"];
            if (element.marker !== null) {
                if (!logEventsByRunId.hasOwnProperty(runId)) {
                    logEventsByRunId[runId] = [];
                }
                logEventsByRunId[runId].push(element);
            }
        });
        for (var runId in logEventsByRunId) {
            if (logEventsByRunId.hasOwnProperty(runId)) {
                console.log('run handleLogEventsArray()');
            }
        }
    } else {
        console.log('run processJsonLogEvents()');
        processJsonLogEvents(chartsArray, oldJson)
    }
};

processJsonLogEvents = function (chartsArray, json) {
    var runId = json.contextMap["run.id"],
        runMetricsPeriodSec = json.contextMap["load.metricsPeriodSec"],
        scenarioChainLoad = json.contextMap["scenario.type.chain.load"],
        rampupConnCounts = json.contextMap["scenario.type.rampup.connCounts"],
        loadRampupSizes = json.contextMap["scenario.type.rampup.sizes"];

    var entry = runId.replace(/\./g, "_");

    if (!(json.marker && json.loggerName)) {
        return;
    }
    if (json.marker === null)
        return;

    var isContained = false;
    chartsArray.forEach(function (each) {
        if (each["run.id"] == runId) {
            isContained = true;
        }
    });

    if (!isContained) {
        if (json.contextMap["scenario.name"] == scenarioName.rampup) {
            chartBase.charts(chartsArray).rampup(
                runId, scenarioChainLoad, rampupConnCounts, loadRampupSizes
            );
        }
    }

    switch (json.marker.name) {
        case markers.ERR:
            appendMessageToTable(entry, logFiles.ERR, countOfRecords, json);
            break;
        case markers.MSG:
            appendMessageToTable(entry, logFiles.MSG, countOfRecords, json);
            break;
        case markers.PERF_SUM:
            appendMessageToTable(entry, logFiles.PERF_SUM, countOfRecords, json);
            if (json.contextMap["scenario.name"] === scenarioName.rampup) {
                chartsArray.forEach(function (d) {
                    if (d["run.id"] === runId) {
                        d.charts.forEach(function (c) {
                            c.update(json);
                        });
                    }
                });
            }
            break;
        case markers.PERF_AVG:
            //appendMessageToTable(entry, logFiles.PERF_AVG, countOfRecords, json);
            console.log("now messages are appended to table");
            // todo start of handling to change
            var isFound = false;
            chartsArray.forEach(function (chartObj) {
                if (chartObj["run.id"] === runId) {
                    isFound = true;
                    chartObj.charts.forEach(function (chart) {
                        chart.update(json);
                    });
                }
            });
            if (!isFound) {
                switch (json.contextMap["scenario.name"]) {
                    case scenarioName.single:
                        console.log("now chartsArray is passed to charts() as a single mode chart");
                        charts(chartsArray).single(json);
                        break;
                    case scenarioName.chain:
                        json.threadName = json.threadName.match(common.getThreadNamePattern())[0];
                        //chartBase.charts(chartsArray).chain(
                        //    runId, runMetricsPeriodSec, json.threadName
                        //);
                        console.log("now chartsArray is passed to charts() as a chain mode chart");
                        break;
                }
            }
            // todo finish of handling to change
            break;
    }
};

//wsProcess();
processJsonLogEvents(chartsArray, oldJson);
processJsonLogEvents(chartsArray, oldJson);
processJsonLogEvents(chartsArray, oldJson);