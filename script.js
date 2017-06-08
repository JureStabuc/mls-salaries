// TOTAL

var width = document.getElementById('total')
    .clientWidth;
var height = document.getElementById('total')
    .clientHeight;

var margin = {
  top: 50,
  bottom: 35,
  left: 80,
  right: 80
};

var svg = d3.select('#total')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip');

width = width - margin.left - margin.right;
height = height - margin.top - margin.bottom;

var dateParse = d3.timeParse('%Y');
var tooltipFormat = d3.timeFormat('%Y');

var x_scale = d3.scaleTime()
    .range([0, width]);

var y_scale = d3.scaleLinear()
    .range([height, 0]);

var band_scale = d3.scaleBand()
    .range([0, width]);

var line = d3.line()
    .x(function(d) {
        return x_scale(dateParse(d.year));
    })
    .y(function(d) {
        return y_scale(d.total);
    })
    .curve(d3.curveBasis);

var x_axis = d3.axisBottom()
    .scale(x_scale);

var y_axis = d3.axisLeft()
    .scale(y_scale);

var data;

svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, ' + height + ')');

svg.append('g')
    .attr('class', 'y axis');

svg.append("text")
    .attr("class", "title")
    .attr("x", (width/2))
    .attr("y", 0 - (margin.top/2))
    .text("Total amount of salaries in $");

// AVERAGE
var width_average = document.getElementById('average')
    .clientWidth;
var height_average = document.getElementById('average')
    .clientHeight;

var margin_average = {
  top: 50,
  bottom: 35,
  left: 80,
  right: 80
};

var svg_average = d3.select('#average')
    .append('svg')
    .attr('width', width_average)
    .attr('height', height_average)
    .append('g')
    .attr('transform', 'translate(' + margin_average.left + ',' + margin_average.top + ')');

var tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip');

width_average = width_average - margin_average.left - margin_average.right;
height_average = height_average - margin_average.top - margin_average.bottom;

var dateParse = d3.timeParse('%Y');
var tooltipFormat = d3.timeFormat('%Y');

var x_scale_average = d3.scaleTime()
    .range([0, width_average]);

var y_scale_average = d3.scaleLinear()
    .range([height_average, 0]);

var band_scale_average = d3.scaleBand()
    .range([0, width_average]);

var line_average = d3.line()
    .x(function(d) {
        return x_scale_average(dateParse(d.year));
    })
    .y(function(d) {
        return y_scale_average(d.average);
    })
    .curve(d3.curveBasis);


var x_axis_average = d3.axisBottom()
    .scale(x_scale_average);

var y_axis_average = d3.axisLeft()
    .scale(y_scale_average);

var data;

svg_average.append('g')
    .attr('class', 'x axis_average')
    .attr('transform', 'translate(0, ' + height_average + ')');

svg_average.append('g')
    .attr('class', 'y axis_average');

svg_average.append("text")
    .attr("class", "title")
    .attr("x", (width_average/2))
    .attr("y", 0 - (margin_average.top/2))
    .text("Average salary in $");

// MEDIAN
var width_median = document.getElementById('median')
    .clientWidth;
var height_median = document.getElementById('median')
    .clientHeight;

var margin_median = {
  top: 50,
  bottom: 35,
  left: 80,
  right: 80
};

var svg_median = d3.select('#median')
    .append('svg')
    .attr('width', width_median)
    .attr('height', height_median)
    .append('g')
    .attr('transform', 'translate(' + margin_median.left + ',' + margin_median.top + ')');

var tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip');

width_median = width_median - margin_median.left - margin_median.right;
height_median = height_median - margin_median.top - margin_median.bottom;

var dateParse = d3.timeParse('%Y');
var tooltipFormat = d3.timeFormat('%Y');

var x_scale_median = d3.scaleTime()
    .range([0, width_median]);

var y_scale_median = d3.scaleLinear()
    .range([height_median, 0]);

var band_scale_median = d3.scaleBand()
    .range([0, width_median]);

var line_median = d3.line()
    .x(function(d) {
        return x_scale_median(dateParse(d.year));
    })
    .y(function(d) {
        return y_scale_median(d.median);
    })
    .curve(d3.curveBasis);


var x_axis_median = d3.axisBottom()
    .scale(x_scale_median);

var y_axis_median = d3.axisLeft()
    .scale(y_scale_median);

var data;

svg_median.append('g')
    .attr('class', 'x axis_median')
    .attr('transform', 'translate(0, ' + height_median + ')');

svg_median.append('g')
    .attr('class', 'y axis_median');

svg_median.append("text")
    .attr("class", "title")
    .attr("x", (width_median/2))
    .attr("y", 0 - (margin_median.top/2))
    .text("Median salary in $");

// NUMBER OF ALL PLAYERS

var width_allPlayers = document.getElementById('all-players')
    .clientWidth;
var height_allPlayers = document.getElementById('all-players')
    .clientHeight;

var margin_allPlayers = {
  top: 50,
  bottom: 35,
  left: 80,
  right: 80
};

var svg_allPlayers = d3.select('#all-players')
    .append('svg')
    .attr('width', width_allPlayers)
    .attr('height', height_allPlayers)
    .append('g')
    .attr('transform', 'translate(' + margin_allPlayers.left + ',' + margin_allPlayers.top + ')');

var tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip');

width_allPlayers = width_allPlayers - margin_allPlayers.left - margin_allPlayers.right;
height_allPlayers = height_allPlayers - margin_allPlayers.top - margin_allPlayers.bottom;

var dateParse = d3.timeParse('%Y');
var tooltipFormat = d3.timeFormat('%Y');

var x_scale_allPlayers = d3.scaleTime()
    .range([0, width_allPlayers]);

var y_scale_allPlayers = d3.scaleLinear()
    .range([height_allPlayers, 0]);

var band_scale_allPlayers = d3.scaleBand()
    .range([0, width_allPlayers]);

var line_allPlayers = d3.line()
    .x(function(d) {
        return x_scale_allPlayers(dateParse(d.year));
    })
    .y(function(d) {
        return y_scale_allPlayers(d.num_players);
    })
    .curve(d3.curveBasis);


var x_axis_allPlayers = d3.axisBottom()
    .scale(x_scale_allPlayers);

var y_axis_allPlayers = d3.axisLeft()
    .scale(y_scale_allPlayers);

var data;

svg_allPlayers.append('g')
    .attr('class', 'x axis_allPlayers')
    .attr('transform', 'translate(0, ' + height_allPlayers + ')');

svg_allPlayers.append('g')
    .attr('class', 'y axis_allPlayers');

svg_allPlayers.append("text")
    .attr("class", "title")
    .attr("x", (width_allPlayers/2))
    .attr("y", 0 - (margin_allPlayers.top/2))
    .text("Number of footballers in MLS");

// OVER MILLION

var width_overMio = document.getElementById('over-mio')
    .clientWidth;
var height_overMio = document.getElementById('over-mio')
    .clientHeight;

var margin_overMio = {
  top: 50,
  bottom: 35,
  left: 80,
  right: 80
};

var svg_overMio = d3.select('#over-mio')
    .append('svg')
    .attr('width', width_overMio)
    .attr('height', height_overMio)
    .append('g')
    .attr('transform', 'translate(' + margin_overMio.left + ',' + margin_overMio.top + ')');

var tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip');

width_overMio = width_overMio - margin_overMio.left - margin_overMio.right;
height_overMio = height_overMio - margin_overMio.top - margin_overMio.bottom;

var dateParse = d3.timeParse('%Y');
var tooltipFormat = d3.timeFormat('%Y');

var x_scale_overMio = d3.scaleTime()
    .range([0, width_overMio]);

var y_scale_overMio = d3.scaleLinear()
    .range([height_overMio, 0]);

var band_scale_overMio = d3.scaleBand()
    .range([0, width_overMio]);

var line_overMio = d3.line()
    .x(function(d) {
        return x_scale_overMio(dateParse(d.year));
    })
    .y(function(d) {
        return y_scale_overMio(d.num_over_mio);
    })
    .curve(d3.curveBasis);


var x_axis_overMio = d3.axisBottom()
    .scale(x_scale_overMio);

var y_axis_overMio = d3.axisLeft()
    .scale(y_scale_overMio);

var data;

svg_overMio.append('g')
    .attr('class', 'x axis_overMio')
    .attr('transform', 'translate(0, ' + height_overMio + ')');

svg_overMio.append('g')
    .attr('class', 'y axis_overMio');

svg_overMio.append("text")
    .attr("class", "title")
    .attr("x", (width_overMio/2))
    .attr("y", 0 - (margin_overMio.top/2))
    .text("Number of players earning more than a million $");


// TOP 10

var width_top = document.getElementById('vis')
    .clientWidth;
var height_top = document.getElementById('vis')
    .clientHeight;

var margin_top = {
    top: 10,
    bottom: 90,
    left: 70,
    right: 20
}

var svg_top = d3.select('#vis')
    .append('svg')
    .attr('width', width_top)
    .attr('height', height_top)
    .append('g')
    .attr('transform', 'translate(' + margin_top.left + ',' + margin_top.right + ')');

width_top = width_top - margin_top.left - margin_top.right;
height_top = height_top - margin_top.top - margin_top.bottom;

var csv_data = {};

var x_scale_top = d3.scaleBand()
    .rangeRound([0, width_top])
    .padding(0.1);

var y_scale_top = d3.scaleLinear()
    .range([height_top, 0]);

var colour_scale = d3.scaleQuantile()
    .range(['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d']);

var y_axis_top = d3.axisLeft(y_scale_top);
var x_axis_top = d3.axisBottom(x_scale_top);

svg_top.append('g')
    .attr('class', 'x axis_top')
    .attr('transform', 'translate(0,' + height_top + ')');

svg_top.append('g')
    .attr('class', 'y axis_top');

var tooltip_top = d3.select("body").append("div").attr("class", "tooltip_top");

svg_top.append("text")
    .attr("class", "title")
    .attr("x", (width_top/2))
    .attr("y", 10 - (margin_top.top/5))
    .text("MLS top 10 highest earners");

// TOTAL
d3.csv('salaries.csv', function(csv_data) {
    data = csv_data;
    console.log(data);
    data.forEach(function(d) {
      d.total = +d.total;
    });

    y_scale.domain([0, d3.max(data, function(d) {
        return d.total;
    })]);

    x_scale.domain(d3.extent(data, function(d) {
        return dateParse(d.year);
    }));

    band_scale.domain(data.map(function(d) {
        return dateParse(d.year);
    }));

    var lines = svg.selectAll('.line')
        .data([data]);

    lines
        .enter()
        .append('path')
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .merge(lines)
        .transition()
        .attr('d', line);

    var bars = svg.selectAll('.bar')
        .data(data);

    bars
        .exit()
        .remove();

    bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', function(d) {
            return band_scale(dateParse(d.year));
        })
        .attr('width', band_scale.bandwidth())
        .attr('height', height)
        .attr('y', 0)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .on('mouseover', mouseOver)
        .on('mousemove', mouseMove)
        .on('mouseout', mouseOut);

    d3.select('.x.axis')
        .call(x_axis);

    d3.select('.y.axis')
        .transition()
        .call(y_axis
          // .ticks(20)
          .tickFormat(d3.format(".0s")));

    function mouseOver(d) {
        var format = d3.format(",");
        var date = dateParse(d.year);
        var displayDate = tooltipFormat(date);
        var a = format(d.total);


        d3.select(this)
            .transition()
            .style('opacity', 0.3);

        tooltip
            .style('display', null)
            .html('<p>Year: ' + displayDate + '<br>Total salaries: $' + a + '</p>');
    };

    function mouseMove(d) {
        tooltip
            .style('top', (d3.event.pageY - 20) + "px")
            .style('left', (d3.event.pageX + 20) + "px");
    };

    function mouseOut(d) {
        d3.select(this)
            .transition()
            .style('opacity', 0)

        tooltip
            .style('display', 'none');
    };
});

// AVERAGE

d3.csv('salaries.csv', function(csv_data) {
    data = csv_data;
    console.log(data);
    data.forEach(function(d) {
      d.average = +d.average;
    });

    y_scale_average.domain([0, d3.max(data, function(d) {
        return d.average;
    })]);

    x_scale_average.domain(d3.extent(data, function(d) {
        return dateParse(d.year);
    }));

    band_scale_average.domain(data.map(function(d) {
        return dateParse(d.year);
    }));

    var lines_average = svg_average.selectAll('.line_average')
        .data([data]);

    lines_average
        .enter()
        .append('path')
        .attr('class', 'line_average')
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .merge(lines_average)
        .transition()
        .attr('d', line_average);

    var bars = svg_average.selectAll('.bar')
        .data(data);

    bars
        .exit()
        .remove();

    bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', function(d) {
            return band_scale_average(dateParse(d.year));
        })
        .attr('width', band_scale_average.bandwidth())
        .attr('height', height_average)
        .attr('y', 0)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .on('mouseover', mouseOver)
        .on('mousemove', mouseMove)
        .on('mouseout', mouseOut);

    d3.select('.x.axis_average')
        .call(x_axis_average);

    d3.select('.y.axis_average')
        .transition()
        .call(y_axis_average
          .tickFormat(d3.format(".0s")));

    function mouseOver(d) {
        var format = d3.format(",");
        var date = dateParse(d.year);
        var displayDate = tooltipFormat(date);
        var a = format(d.average);

        d3.select(this)
            .transition()
            .style('opacity', 0.3);

        tooltip
            .style('display', null)
            .html('<p>Year: ' + displayDate + '<br>Average salary: $' + a + '</p>');
    };

    function mouseMove(d) {
        tooltip
            .style('top', (d3.event.pageY - 20) + "px")
            .style('left', (d3.event.pageX + 20) + "px");
    };

    function mouseOut(d) {
        d3.select(this)
            .transition()
            .style('opacity', 0)

        tooltip
            .style('display', 'none');
    };
});

// MEDIAN

d3.csv('salaries.csv', function(csv_data) {
    data = csv_data;
    console.log(data);
    data.forEach(function(d) {
      d.median = +d.median;
    });

    y_scale_median.domain([0, d3.max(data, function(d) {
        return d.median;
    })]);

    x_scale_median.domain(d3.extent(data, function(d) {
        return dateParse(d.year);
    }));

    band_scale_median.domain(data.map(function(d) {
        return dateParse(d.year);
    }));

    var lines_median = svg_median.selectAll('.line_median')
        .data([data]);

    lines_median
        .enter()
        .append('path')
        .attr('class', 'line_median')
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .merge(lines_median)
        .transition()
        .attr('d', line_median);

    var bars = svg_median.selectAll('.bar')
        .data(data);

    bars
        .exit()
        .remove();

    bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', function(d) {
            return band_scale_median(dateParse(d.year));
        })
        .attr('width', band_scale_median.bandwidth())
        .attr('height', height_median)
        .attr('y', 0)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .on('mouseover', mouseOver)
        .on('mousemove', mouseMove)
        .on('mouseout', mouseOut);

    d3.select('.x.axis_median')
        .call(x_axis_median);

    d3.select('.y.axis_median')
        .transition()
        .call(y_axis_median
          .tickFormat(d3.format(".0s")));

    function mouseOver(d) {
        var format = d3.format(",");
        var date = dateParse(d.year);
        var displayDate = tooltipFormat(date);
        var a = format(d.median);

        d3.select(this)
            .transition()
            .style('opacity', 0.3);

        tooltip
            .style('display', null)
            .html('<p>Year: ' + displayDate + '<br>Median salary: $' + a + '</p>');
    };

    function mouseMove(d) {
        tooltip
            .style('top', (d3.event.pageY - 20) + "px")
            .style('left', (d3.event.pageX + 20) + "px");
    };

    function mouseOut(d) {
        d3.select(this)
            .transition()
            .style('opacity', 0)

        tooltip
            .style('display', 'none');
    };
});

// NUMBER OF ALL PLAYERS

d3.csv('salaries.csv', function(csv_data) {
    data = csv_data;
    console.log(data);
    data.forEach(function(d) {
      d.num_players = +d.num_players;
    });

    y_scale_allPlayers.domain([0, d3.max(data, function(d) {
        return d.num_players;
    })]);

    x_scale_allPlayers.domain(d3.extent(data, function(d) {
        return dateParse(d.year);
    }));

    band_scale_allPlayers.domain(data.map(function(d) {
        return dateParse(d.year);
    }));

    var lines_allPlayers = svg_allPlayers.selectAll('.line_allPlayers')
        .data([data]);

    lines_allPlayers
        .enter()
        .append('path')
        .attr('class', 'line_allPlayers')
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .merge(lines_allPlayers)
        .transition()
        .attr('d', line_allPlayers);

    var bars = svg_allPlayers.selectAll('.bar')
        .data(data);

    bars
        .exit()
        .remove();

    bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', function(d) {
            return band_scale_allPlayers(dateParse(d.year));
        })
        .attr('width', band_scale_allPlayers.bandwidth())
        .attr('height', height_allPlayers)
        .attr('y', 0)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .on('mouseover', mouseOver)
        .on('mousemove', mouseMove)
        .on('mouseout', mouseOut);

    d3.select('.x.axis_allPlayers')
        .call(x_axis_allPlayers);

    d3.select('.y.axis_allPlayers')
        .transition()
        .call(y_axis_allPlayers);

    function mouseOver(d) {
        var format = d3.format(",");
        var date = dateParse(d.year);
        var displayDate = tooltipFormat(date);
        var a = format(d.num_players);

        d3.select(this)
            .transition()
            .style('opacity', 0.3);

        tooltip
            .style('display', null)
            .html('<p>Year: ' + displayDate + '<br>Number of footballers in MLS: ' + a + '</p>');
    };

    function mouseMove(d) {
        tooltip
            .style('top', (d3.event.pageY - 20) + "px")
            .style('left', (d3.event.pageX + 20) + "px");
    };

    function mouseOut(d) {
        d3.select(this)
            .transition()
            .style('opacity', 0)

        tooltip
            .style('display', 'none');
    };
});


// OVER MILLION

d3.csv('salaries.csv', function(csv_data) {
    data = csv_data;
    console.log(data);
    data.forEach(function(d) {
      d.num_over_mio = +d.num_over_mio;
    });

    y_scale_overMio.domain([0, d3.max(data, function(d) {
        return d.num_over_mio;
    })]);

    x_scale_overMio.domain(d3.extent(data, function(d) {
        return dateParse(d.year);
    }));

    band_scale_overMio.domain(data.map(function(d) {
        return dateParse(d.year);
    }));

    var lines_overMio = svg_overMio.selectAll('.line_overMio')
        .data([data]);

    lines_overMio
        .enter()
        .append('path')
        .attr('class', 'line_overMio')
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .merge(lines_overMio)
        .transition()
        .attr('d', line_overMio);

    var bars = svg_overMio.selectAll('.bar')
        .data(data);

    bars
        .exit()
        .remove();

    bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', function(d) {
            return band_scale_overMio(dateParse(d.year));
        })
        .attr('width', band_scale_overMio.bandwidth())
        .attr('height', height_overMio)
        .attr('y', 0)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .on('mouseover', mouseOver)
        .on('mousemove', mouseMove)
        .on('mouseout', mouseOut);

    d3.select('.x.axis_overMio')
        .call(x_axis_overMio);

    d3.select('.y.axis_overMio')
        .transition()
        .call(y_axis_overMio);


    function mouseOver(d) {
        var format = d3.format(",");
        var date = dateParse(d.year);
        var displayDate = tooltipFormat(date);
        var a = format(d.num_over_mio);

        d3.select(this)
            .transition()
            .style('opacity', 0.3);

        tooltip
            .style('display', null)
            .html('<p>Year: ' + displayDate + '<br>Number of players earning more than a million $: ' + a + '</p>');
    };

    function mouseMove(d) {
        tooltip
            .style('top', (d3.event.pageY - 20) + "px")
            .style('left', (d3.event.pageX + 20) + "px");
    };

    function mouseOut(d) {
        d3.select(this)
            .transition()
            .style('opacity', 0)

        tooltip
            .style('display', 'none');
    };
});

// TOP 10

function draw(year) {

    var data_csv = csv_data[year];

    var t = d3.transition()
        .duration(2000);

    var names = data_csv.map(function(d) {
        return d.last_name;
    });
    x_scale_top.domain(names);

    var max_value = d3.max(data_csv, function(d) {
        return +d.guaranteed_compensation;
    });

    y_scale_top.domain([0, max_value]);
    colour_scale.domain([0, max_value]);

    var bars_top = svg_top.selectAll('.bar_top')
        .data(data_csv)

    bars_top
        .exit()
        .remove();

    var new_bars_top = bars_top
        .enter()
        .append('rect')
        .attr('class', 'bar_top')
        .attr('x', function(d) {
            return x_scale_top(d.last_name);
        })
        .attr('width', x_scale_top.bandwidth())
        .attr('y', height_top)
        .attr('height', 0)
        .on("mousemove", function(d){
            var format = d3.format(",");
            var guaranteed_compensation = format(d.guaranteed_compensation);


            tooltip_top
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((d.first_name) + " " + (d.last_name) + "<br>" + "$" + (guaranteed_compensation));
        })
        .on("mouseout", function(d){ tooltip_top.style("display", "none");});

    new_bars_top.merge(bars_top)
        .transition(t)
        .attr('y', function(d) {
            return y_scale_top(+d.guaranteed_compensation);
        })
        .attr('height', function(d) {
            return height_top - y_scale_top(+d.guaranteed_compensation)
        })
        .attr('fill', function(d) {
            return colour_scale(+d.guaranteed_compensation);
        })

    svg_top.select('.x.axis_top')
        .call(x_axis_top)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", function(d) {
            return "rotate(-65)"
            });

    formatValue = d3.format(".2s");

    svg_top.select('.y.axis_top')
        .transition(t)
        .call(y_axis_top
          .ticks(5)
          .tickFormat(d3.format(".0s"))
          );
}

d3.queue()
    .defer(d3.csv, 'top10/mls-top10-2017.csv')
    .defer(d3.csv, 'top10/mls-top10-2016.csv')
    .defer(d3.csv, 'top10/mls-top10-2015.csv')
    .defer(d3.csv, 'top10/mls-top10-2014.csv')
    .defer(d3.csv, 'top10/mls-top10-2013.csv')
    .defer(d3.csv, 'top10/mls-top10-2012.csv')
    .defer(d3.csv, 'top10/mls-top10-2011.csv')
    .defer(d3.csv, 'top10/mls-top10-2010.csv')
    .defer(d3.csv, 'top10/mls-top10-2009.csv')
    .defer(d3.csv, 'top10/mls-top10-2008.csv')
    .defer(d3.csv, 'top10/mls-top10-2009.csv')


    .await(function(error, d2017, d2016, d2015, d2014, d2013, d2012, d2011, d2010, d2009, d2008, d2007) {
        csv_data['2007'] = d2007;
        csv_data['2008'] = d2008;
        csv_data['2009'] = d2009;
        csv_data['2010'] = d2010;
        csv_data['2011'] = d2011;
        csv_data['2012'] = d2012;
        csv_data['2013'] = d2013;
        csv_data['2014'] = d2014;
        csv_data['2015'] = d2015;
        csv_data['2016'] = d2016;
        csv_data['2017'] = d2017;

        draw('2017');
    });

var slider = d3.select('#year');
slider.on('change', function() {
    draw(this.value);
});
