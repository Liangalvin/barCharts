$(document).ready(function (){
  var url = "http://localhost:3000/";
  var dev = url + "dev";
  var pm = url + "pm";
  var des = url + "des";
  var devButton = document.getElementById("dev-btn");
  var pmButton = document.getElementById("pm-btn");
  var desButton = document.getElementById("des-btn");

  devButton.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dev);
    xhr.onreadystatechange = function() {
      var datas = JSON.parse(xhr.responseText);
      // console.log(data.salary);
      var devMin = parseInt(datas.salary.min);
      var devMed = parseInt(datas.salary.median);
      var devMax = parseInt(datas.salary.max);
      var data = [{salary: "Developer starting", frequency: devMin}, {salary: "Developer mean", frequency: devMed}, {salary: "Developer max", frequency: devMax}];
      console.log(data);

      var margin = {top: 40, right: 20, bottom: 30, left: 40},
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

      var formatPercent = d3.format("$100");

      var x = d3.scale.ordinal()
          .rangeRoundBands([0, width], .1);

      var y = d3.scale.linear()
          .range([height, 0]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom");

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
          .tickFormat(formatPercent);

      var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
          return "<strong>Frequency:</strong> <span style='color:red'>" + "$" + d.frequency + "</span>";
        })

        d3.select("svg")
          .remove();

      var svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



      svg.call(tip);

      // The following code was contained in the callback function.
      x.domain(data.map(function(d) { return d.salary; }));
      y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Frequency");

      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.salary); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.frequency); })
          .attr("height", function(d) { return height - y(d.frequency); })
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide)

      function type(d) {
        d.frequency = +d.frequency;
        return d;
      }
    }

    xhr.send();
  });

  pmButton.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", pm);
    xhr.onreadystatechange = function() {
      var datas = JSON.parse(xhr.responseText);
      // console.log(data.salary);
      var pmMin = parseInt(datas.salary.min);
      var pmMed = parseInt(datas.salary.median);
      var pmMax = parseInt(datas.salary.max);
      var data = [{salary: "Product Manager starting", frequency: pmMin}, {salary: "Product Manager mean", frequency: pmMed}, {salary: "Product Manager max", frequency: pmMax}];
      console.log(data);

      var margin = {top: 40, right: 20, bottom: 30, left: 40},
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

      var formatPercent = d3.format("$100");

      var x = d3.scale.ordinal()
          .rangeRoundBands([0, width], .1);

      var y = d3.scale.linear()
          .range([height, 0]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom");

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
          .tickFormat(formatPercent);

      var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
          return "<strong>Frequency:</strong> <span style='color:red'>" + "$" + d.frequency + "</span>";
        })

        d3.select("svg")
          .remove();

      var svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



      svg.call(tip);

      // The following code was contained in the callback function.
      x.domain(data.map(function(d) { return d.salary; }));
      y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Frequency");

      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.salary); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.frequency); })
          .attr("height", function(d) { return height - y(d.frequency); })
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide)

      function type(d) {
        d.frequency = +d.frequency;
        return d;
      }
    }

    xhr.send();
  });

  desButton.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", des);
    xhr.onreadystatechange = function() {
      var datas = JSON.parse(xhr.responseText);
      // console.log(data.salary);
      var desMin = parseInt(datas.salary.min);
      var desMed = parseInt(datas.salary.median);
      var desMax = parseInt(datas.salary.max);
      var data = [{salary: "UX/Designer starting", frequency: desMin}, {salary: "UX/Designer mean", frequency: desMed}, {salary: "UX/Designer max", frequency: desMax}];
      console.log(data);

      var margin = {top: 40, right: 20, bottom: 30, left: 40},
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

      var formatPercent = d3.format("$100");

      var x = d3.scale.ordinal()
          .rangeRoundBands([0, width], .1);

      var y = d3.scale.linear()
          .range([height, 0]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom");

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
          .tickFormat(formatPercent);

      var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
          return "<strong>Frequency:</strong> <span style='color:red'>" + "$" + d.frequency + "</span>";
        })

        d3.select("svg")
          .remove();

      var svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



      svg.call(tip);

      // The following code was contained in the callback function.
      x.domain(data.map(function(d) { return d.salary; }));
      y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Frequency");

      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.salary); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.frequency); })
          .attr("height", function(d) { return height - y(d.frequency); })
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide)

      function type(d) {
        d.frequency = +d.frequency;
        return d;
      }
    }

    xhr.send();
  });


});
