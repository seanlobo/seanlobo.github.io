$(function () {
    $('#chart').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'A Guide to my Interests'
        },
        subtitle: {
            text: 'With normalized interest levels<br> (aka don\'t pay too much attention to them)'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
            // http://php.net/manual/en/function.strftime.php for time stuff
                month: '%e. %b',
                year: '%Y'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Interest level (%)'
            },
            endOnTick: false,
            min: 0,
            max: 105
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%b %Y}: {point.y:.2f}%'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Computer Science',
            color: "#FFC107",
            data: [
                [Date.UTC(2014, 5), 0], // Start jcvi internship
                [Date.UTC(2014, 6), 10],
                [Date.UTC(2014, 7), 20],
                [Date.UTC(2014, 8), 35],
                [Date.UTC(2014, 9), 45],
                [Date.UTC(2014, 11), 50],
                [Date.UTC(2015, 0), 50],
                [Date.UTC(2015, 3), 55],
                [Date.UTC(2015, 6), 55],
                [Date.UTC(2015, 7), 55],
                [Date.UTC(2015, 8), 70],
                [Date.UTC(2015, 10), 80],
                [Date.UTC(2016, 0), 85],
                [Date.UTC(2016, 1), 90],
                [Date.UTC(2016, 2), 100],
                [Date.UTC(2016, 3), 100]
            ]
        }, {
            name: 'Biology',
            color: "#0097A7",
            data: [
                [Date.UTC(2011, 5), 20],
                [Date.UTC(2012, 3), 20],
                [Date.UTC(2012, 7), 30], // Sophomore Year starts
                [Date.UTC(2012, 11), 35],
                [Date.UTC(2013, 2), 40],
                [Date.UTC(2013, 5), 45], // Sophomore Year ends
                [Date.UTC(2013, 8), 45],
                [Date.UTC(2014, 0), 50],
                [Date.UTC(2014, 6), 60], // JCVI Starts
                [Date.UTC(2014, 8), 70],
                [Date.UTC(2015, 0), 70],
                [Date.UTC(2015, 6), 65], // College starts
                [Date.UTC(2016, 0), 70],
                [Date.UTC(2016, 4), 70],
            ]
        }, {
            name: 'Smash',
            color: "#8BC34A",
            data: [
                [Date.UTC(2013, 7), 5], // Junior Year Starts
                [Date.UTC(2014, 0), 15],
                [Date.UTC(2014, 7), 14], // Senior Year
                [Date.UTC(2015, 0), 16],
                [Date.UTC(2015, 2), 30], 
                [Date.UTC(2015, 4), 50],
                [Date.UTC(2015, 7), 40], // Senior year ends
                [Date.UTC(2015, 9), 45],
                [Date.UTC(2015, 11), 50],
                [Date.UTC(2016, 0), 45],
                [Date.UTC(2016, 1), 60],
                [Date.UTC(2016, 2), 75],
                [Date.UTC(2016, 3), 80],
            ]
        }, {
            name: 'Anime',
            color: "#536DFE",
            data: [
                [Date.UTC(2013, 11), 0],
                [Date.UTC(2014, 0), 0], // New years Junior year
                [Date.UTC(2014, 1), 10],
                [Date.UTC(2014, 2), 20],
                [Date.UTC(2014, 3), 35],
                [Date.UTC(2014, 6), 40], // JCVI Starts
                [Date.UTC(2014, 8), 40],
                [Date.UTC(2015, 0), 45],
                [Date.UTC(2015, 2), 80], 
                [Date.UTC(2015, 3), 70],
                [Date.UTC(2015, 5), 60], // College starts
                [Date.UTC(2015, 11), 40], 
                [Date.UTC(2016, 0), 50],
                [Date.UTC(2016, 4), 40],
            ]
        }]
    });



    var clearGraphs = function() {
        var chart = $('#chart').highcharts();
        for (i = 0; i < chart.series.length; i++) {
            $(".chart-data").find("[data-chart='" + i + "']").css("visibility", "hidden");
            chart.series[i].hide();
        }
    };

    $(".chart-button").click(function() {
        clearGraphs();
        var chart = $('#chart').highcharts();
        var topic = $(this).data("chart");
        var series = chart.series[topic];

        $("div").find("[data-chart='" + topic + "']").css("visibility", "visible");
        series.show();
    });


    clearGraphs();
    $('.buttons').find("[data-chart='0']").click();


    // my attempt to automate setting the colors of buttons
    // function() {
    //     $(".chart-button").css("background-color", 
    //        $('#chart').highcharts().series[$(this).data("chart")].color);
    // };

});
