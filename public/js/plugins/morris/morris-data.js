// Morris.js Charts sample data for SB Admin template
//var data = require("../data.json");
$(function() {

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        
        data: [{
            label: "Your Stress Level",
            value: 20
        }, {
            label: "Your Positivity Level",
            value: 30
        }, {
            label: "Your Productivity Level",
            value: 50
        }],

        resize: true
    });

});


