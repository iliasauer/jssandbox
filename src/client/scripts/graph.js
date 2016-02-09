main = function() {
    const newJson = {
        "name": "chrtpckg",
        "runId": "2016.02.03.22.05.24.588",
        "loadJobName": "0-S3-Create-1x1",
        "durMinChart": [
            {"x": 0.0, "y": 0.0},
            {"x": 10.0, "y": 25686.0},
            {"x": 20.0, "y": 37789.0},
            {"x": 30.0, "y": 37789.0},
            {"x": 40.0, "y": 48961.0},
            {"x": 50.0, "y": 53478.0},
            {"x": 60.0, "y": 61548.0},
            {"x": 70.0, "y": 70588.0},
            {"x": 80.0, "y": 77154.0},
            {"x": 90.0, "y": 78995.0},
            null],
        "durMaxChart": [{"x": 0.0, "y": 0.0}, null],
        "durAvgChart": [{"x": 0.0, "y": 0.0}, null],
        "latMinChart": [{"x": 0.0, "y": 0.0}, null],
        "latMaxChart": [{"x": 0.0, "y": 0.0}, null],
        "latAvgChart": [{"x": 0.0, "y": 0.0}, null],
        "tpAvgChart": [{"x": 0.0, "y": 0.0}, null],
        "tpLastChart": [{"x": 0.0, "y": 0.0}, null],
        "bwAvgChart": [{"x": 0.0, "y": 0.0}, null],
        "bwLast": [{"x": 0.0, "y": 0.0}, null]
    };

    const MARGIN_DEF_VAL = 80;
    const MARGINS = {
        TOP: MARGIN_DEF_VAL,
        RIGHT: MARGIN_DEF_VAL,
        BOTTOM: MARGIN_DEF_VAL,
        LEFT: MARGIN_DEF_VAL
    };
    const WIDTH = 1000;
    const HEIGHT = 500;
    const MIN_Y = 0;
    const MAX_Y = 200000;
    const MIN_X = 0;
    const NUM_OF_VALUES = 10;
    const SCALE = 10;

    var numArr = function (generator) {
        var arr = [];
        for (var i = 0; i < NUM_OF_VALUES; i++) {
            arr.push(generator(i));
        }
        return arr;
    };

    var defaultRandomNumGenerator = function () {
        var randomNumGenerator = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        return randomNumGenerator(MIN_Y, MAX_Y);
    };

    var defaultNumAdditor = function (index) {
        var numAdditor = function (num, addition) {
            return num + addition;
        };
        return numAdditor(MIN_X, index);
    };

    const xArr = numArr(defaultNumAdditor);
    const yArr = numArr(defaultRandomNumGenerator);

    var xScale = d3.scale.linear()
        .domain([MIN_X, (MIN_X * SCALE) + ((NUM_OF_VALUES - 1) * SCALE)])
        .range([MARGINS.LEFT, WIDTH - MARGINS.RIGHT]);

    var yScale = d3.scale.linear()
        .domain([MIN_Y, MAX_Y])
        .range([HEIGHT - MARGINS.TOP, MARGINS.BOTTOM]);

    var xAxis = d3.svg.axis()
        .scale(xScale);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    var getX = function (data) {
        return xScale(data["x"]);
    };

    var getY = function (data) {
        return yScale(data["y"])
    };

    var lineGenerator = d3.svg.line()
        .x(getX)
        .y(getY);

    var graph = d3.select("#graph").append("svg:svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);

    graph.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, " + (HEIGHT - MARGINS.BOTTOM) + ")")
        .call(xAxis);

    graph.append("svg:g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + MARGINS.LEFT + ", 0)")
        .call(yAxis);

    newJson.durMinChart.pop();

    graph.append("svg:path")
        .attr("d", lineGenerator(newJson.durMinChart))
        .attr('stroke', 'green')
        .attr('stroke-width', 2)
        .attr('fill', 'none');
};
main();
