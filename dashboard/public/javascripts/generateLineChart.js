xpos = 0;

chartState1 = [0, 0];
chartTDID1 = ["", ""];
traceArray1 = [0];
chartData1 = [0, 0];
numTraces1 = 0;
yData1 = [];
chartFirstCreation1 = 0;
chartTitles1 = ["", ""]

chartState2 = [0, 0];
chartTDID2 = ["", ""];
traceArray2 = [0];
chartData2 = [0, 0];
numTraces2 = 0;
yData2 = [];
chartFirstCreation2 = 0;
chartTitles2 = ["", ""]

sampleRate = 300; // sample rate in ms per sample
xmax = 30; //x-axis range (seconds)

function generateLineChartOne(tdID, title) {
    //var data = require("./public/javascripts/getData");

    var layout = {
    xaxis: {range: [0, xmax]},
    showlegend: false,
    title: "",
    width: 220,
    height: 220,
    margin: {
        l: 30,
        r: 20,
        b: 20,
        t: 30,
      }
    };

    if (chartState1[0] == 0) {        // checks if chart one is empty
        chartTDID1[0] = tdID;
        traceArray1 = [0];
        chartTitles1[0] = title;
        layout['title'] = chartTitles1[0];
        numTraces1 = 1;
        newChart();
        chartFirstCreation1 = 1;
        chartState1[0] = 1;
        
    } 
    else if (chartState1[1] == 0) {  // checks if chart one has second trace
        chartTDID1[1] = tdID;
        traceArray1 = [0, 1]
        numTraces1 = 2;
        chartTitles1[1] = title
        layout['title'] = chartTitles1[0] + ', <br>' + chartTitles1[1];
        addTrace();
        chartState1[1] = 1;
    }

    function newChart() {
        getData();

        Plotly.newPlot(lineChartOne, [{
            x: [xpos],
            y: [chartData1[0]],
            type: 'scatter',
            mode: 'lines',
            line: {color:'green'}
        }], layout);

        if (chartFirstCreation1 == 0) {
            getDataAtInterval();
        }
    }

    function addTrace() {
        Plotly.relayout(lineChartOne, layout);
        Plotly.addTraces(lineChartOne, [{
            x: [xpos],
            y:[chartData1[1]],
            type: 'scatter',
            mode: 'lines',
            line: {color:'blue'}
        }]);
    }

    function getDataAtInterval() {
        setInterval(function(){
            xpos += sampleRate / 1000;
            getData();
            /*if (xpos > xmax) {
                document.querySelectorAll('[data-title="Autoscale"]')[0].click()
            }*/
            if (numTraces1 == 1) {
                var update = {
                    x: [[xpos]],
                    y: [[chartData1[0]]]
                }
            }
            else if (numTraces1 == 2) {
                var update = {
                    x: [[xpos], [xpos]],
                    y: [[chartData1[0]], [chartData1[1]]]
                }
            }
            Plotly.extendTraces(lineChartOne, update, traceArray1);
            if (xpos > 30) {
                Plotly.relayout(lineChartOne, 'xaxis.range', [xpos - xmax, xpos]);
            }
        }, sampleRate);
    }
    
    function getData() {
        for (i=0; i<=(numTraces1-1); i++) {
                var value = document.getElementById(chartTDID1[i]);
                chartData1[i] = value.innerHTML;
            }
        }      
}

function generateLineChartTwo(tdID, title) {
    //var data = require("./public/javascripts/getData");

    var layout = {
    xaxis: {range: [0, xmax]},
    showlegend: false,
    title: "",
    width: 220,
    height: 220,
    margin: {
        l: 30,
        r: 20,
        b: 20,
        t: 30,
      }
    };

    if (chartState2[0] == 0) {        // checks if chart one is empty
        chartTDID2[0] = tdID;
        traceArray2 = [0];
        chartTitles2[0] = title;
        layout['title'] = chartTitles2[0];
        numTraces2 = 1;
        newChart();
        chartFirstCreation2 = 1;
        chartState2[0] = 1;
        
    } 
    else if (chartState2[1] == 0) {  // checks if chart one has second trace
        chartTDID2[1] = tdID;
        traceArray2 = [0, 1]
        numTraces2 = 2;
        chartTitles2[1] = title
        layout['title'] = chartTitles2[0] + ', <br>' + chartTitles2[1];
        addTrace();
        chartState2[1] = 1;
    }

    function newChart() {
        getData();

        Plotly.newPlot(lineChartTwo, [{
            x: [xpos],
            y: [chartData2[0]],
            type: 'scatter',
            mode: 'lines',
            line: {color:'green'}
        }], layout);

        if (chartFirstCreation2 == 0) {
            getDataAtInterval();
        }
    }

    function addTrace() {
        Plotly.relayout(lineChartTwo, layout);
        Plotly.addTraces(lineChartTwo, [{
            x: [xpos],
            y:[chartData2[1]],
            type: 'scatter',
            mode: 'lines',
            line: {color:'blue'}
        }]);
    }

    function getDataAtInterval() {
        setInterval(function(){
            /*if (chartFirstCreation1 == 0) {
                xpos += 1;
            }*/
            getData();
            if (xpos > xmax) {
                document.querySelectorAll('[data-title="Autoscale"]')[1].click()
            }
            if (numTraces2 == 1) {
                var update = {
                    x: [[xpos]],
                    y: [[chartData2[0]]]
                }
            }
            else if (numTraces2 == 2) {
                var update = {
                    x: [[xpos], [xpos]],
                    y: [[chartData2[0]], [chartData2[1]]]
                }
            }
            Plotly.extendTraces(lineChartTwo, update, traceArray2);
            if (xpos > 30) {
                Plotly.relayout(lineChartTwo, 'xaxis.range', [xpos - xmax, xpos]);
            }
        }, sampleRate);
    }
    
    function getData() {
        for (i=0; i<=(numTraces2-1); i++) {
                var value = document.getElementById(chartTDID2[i]);
                chartData2[i] = value.innerHTML;
            }
        }      
}

function removeTraces() {
    chartState1 = [0, 0];
    chartState2 = [0, 0];
    chartTDID1 = ["", ""];
    chartTDID2 = ["", ""];
    traceArray1 = [0];
    traceArray2 = [0];
    numTraces1 = 0;
    numTraces2 = 0;
    chartTitles1 = ["", ""]
    chartTitles2 = ["", ""]
}

function removeC1T1() {
    Plotly.deleteTraces(lineChartOne, 0);
    if (numTraces1 == 2) {
        chartState1[0] = chartState1[1];
        chartTDID1[0] = chartTDID1[1];
        traceArray1 = [0];
        numTraces1 = 1;
        chartTitles1 = [""];
    }
    /*chartState1[0] = 0;
    chartTDID1[0] = "";
    traceArray1 = [0];
    numTraces1 = 0;
    chartTitles1 = [""];*/
}