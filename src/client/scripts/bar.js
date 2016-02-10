var numbers = [15, 8, 42, 4, 32];

var pxValue = function (datum) {
    return datum + "px";
};

var update = function () {
    var removeItemAndUpdate = function (value, index) {
        numbers.splice(index, 1);
        update();
    };
    var bars = d3.select("#chart").selectAll(".bar").data(numbers)
        .style("height", pxValue).on("click", removeItemAndUpdate);
    bars.enter()
        .append("div")
        .attr("class", "bar")
        .style("height", pxValue)
        .on("click", removeItemAndUpdate);
    bars.exit().remove();
};

update();