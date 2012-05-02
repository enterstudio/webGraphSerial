
// var source = new EventSource('/data');
// source.onmessage = function(e) {
//	 document.getElementById('data').innerHTML = e.data;
// };

$(function () {
$(document).ready(function() {
	var chart;
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'data_container',
			type: 'spline',
			marginRight: 10,
			events: {
				load: function() {
					// set up the updating of the chart each second
					var series = this.series[0];
						setInterval(function() {
							var x = (new Date()).getTime(), // current time
							y = Math.random();
							series.addPoint([x, y], true, true);
					 	}, 1000);
				}
			}
		},

		title: {
			text: 'Live random data'
		},

		xAxis: {
			type: 'datetime',
			tickPixelInterval: 150
		},

		yAxis: {
			title: { text: 'Value' },

			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},

		series: [{
			name: 'Random data',
			data: (function() {
				// generate an array of random data
				var data = [],
					time = (new Date()).getTime(),
					i;

				for (i = -19; i <= 0; i++) {
					data.push({
						x: time + i * 1000,
						y: Math.random()
					});
				}
				return data;
			})()
		}]
	});//new highchart

}); //$(document).ready
}); //anomous fcn