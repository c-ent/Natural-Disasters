// JavaScript Document

$(document).ready(function() {
    // navbar
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('open');
    });

    $('.counter-count').counterUp({
        delay: 10,
        time: 1000
    });
    $('.natural-count').counterUp({
        delay: 10,
        time: 1000
    });

    // average fatalities Start
    var options = {
        series: [98, 23, 105, 79, 185, 38, 58, 70],
        labels: ['Flood', 'Lightning', 'Heat', 'Tornado', 'Winter', 'Cold', 'Wind', 'Rip currents'],
        colors: ['#1a1c1c', '#3b4040', '#585f5f', '#767f7f', '#959d9d', '#b5baba', '#d5d7d7', '#eaebeb'],
        chart: {
            type: 'donut',
        },
        legend: {
            position: 'bottom'
        },
        responsive: [{
            breakpoint: 380,
            options: {
                chart: {
                    width: 300
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#average_fatalities"), options);
    chart.render();
    // average fatalities End

    // worldwide Start
    var options = {
        series: [{
            name: '1990-2021',
            data: [4535, 3132, 860, 570, 529, 497, 366, 157]
        }],
        colors: ["#276db8"],
        chart: {
            height: 450,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '43px',
            }
        },
        dataLabels: {
            enabled: false,
        },

        xaxis: {
            categories: ["Floods", "Storms", "Earthquake", "Landslide", "Extreme temperature", "Drought", "Wildfire", "Volcanoes"],
            position: 'bottom',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: true,
            },
            tooltip: {
                enabled: false,
            },
            labels: {
                // rotate: 0,
                // maxWidth: "20px",
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: true,
            },
            tooltip: {
                enabled: false,
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['1990-2021'],
            markers: {
                fillColors: ['#276db8']
            }
        }
    }

    var chart = new ApexCharts(document.querySelector("#graphina_chart"), options);
    chart.render();
    // worldwide End


    // Hurricanes Disaster Start
    var options = {
        series: [50, 16, 12, 8, 6,6,2],
        chart: {
            width: '100%',
            height: 350,
            type: 'pie',
        },
        colors: ["#276db8", "#5797db", "#9ac0ea", "#ccdff5", "#eef4fc"],
        labels: ["Severe Storm", "Tropical Cyclone", "Floods", "Drought", "Wildfire","Winter Storm","Freeze"],
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5
                }
            }
        },
        dataLabels: {
            enabled: false
        },
    };

    var chart = new ApexCharts(document.querySelector("#huricanes_disaster"), options);
    chart.render();
    // Hurricanes Disaster End


    // Search hide show Start
    $(".search_icon a").click(function() {
        $(".search_bar").toggle();
    });

    $(".close_icon a").click(function() {
        $(".search_bar").hide();
    });
    // Search hide show End


    // OFI Browser
    objectFitImages();
});