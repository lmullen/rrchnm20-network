  var optArray = [];
for (var key in nodes) {
    optArray.push(key);
}
optArray = optArray.sort();
$(function () {
    $("#search").autocomplete({
        source: optArray
    });
});
function searchNode() {
    //find the node
    var selectedVal = document.getElementById('search').value;
    result = svg.selectAll(".node").filter(function(d) {
      return d.name === selectedVal;
    }).style("fill", "red");
    var node = svg.selectAll(".node");
    if (selectedVal == "none") {
        node.style("stroke", "white").style("stroke-width", "1");
    } else {
        var selected = node.filter(function (d, i) {
            return d.name != selectedVal;
        });
        selected.style("opacity", "0.2");
        var link = svg.selectAll(".link")
        link.style("opacity", "0.2");
        d3.selectAll(".node").transition()
            .duration(5000)
            .style("opacity", 1.0);
        d3.selectAll(".link").transition()
            .duration(5000)
            .style("opacity", 0.3);
    }
}
