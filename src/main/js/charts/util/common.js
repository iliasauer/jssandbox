getScenarioChartObject = function(runId, runScenarioName, scenarioCharts) {
    return {
        "run.id": runId,
        "run.scenario.name": runScenarioName,
        "charts": scenarioCharts
    };
};

module.exports = getScenarioChartObject