function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}
// Initialize the dashboard
init();
// Fetch new data each time a new sample is selected
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildBarChart(newSample);
  buildGaugeChart(newSample);
  buildBubbleChart(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(key.toUpperCase() + ': ' + value); 
    })


  });
}

// Deliverable 1
// build bar chart
// 1. Create the buildCharts function.
function buildBarChart(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    var resultArray = data
    .samples
    // 3. Create a variable that holds the samples array. 
    .filter(sampleObj => {
      return sampleObj.id == sample
    });
      // 4. Create a variable that filters the samples for the object with the desired sample number.
    var result = resultArray[0];
    //  5. Create a variable that holds the first sample in the array.
    var top_ten_otu_ids = result.otu_ids.slice(0, 10).map(numericIds => {
      return 'OTU ' + numericIds;
    }).reverse();
    
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var top_ten_sample_values = result.sample_values.slice(0, 10).reverse();
    var top_ten_otu_labels = result.otu_labels.slice(0, 10).reverse();
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last.   
    var bar_trace = [
      {
        x: top_ten_sample_values,  
        y: top_ten_otu_ids,
        text: top_ten_otu_labels,
        name: "Top 10",
        type: 'bar',
        orientation: 'h'
      }
      ];
    // 8. Create the trace for the bar chart. 
      var data = [bar_trace];
    // 9. Create the layout for the bar chart. 
      var bar_layout = {
        title: "Top 10 Bacteria Culturs Found",
   
      };
      // 10. Use Plotly to plot the data with the layout.
      Plotly.newPlot('bar', bar_trace, bar_layout)
    
    });
  }
 

// Deliverable 2
// bubble chart
  // Create the trace for the bubble chart.
  function buildBubbleChart(sample) {
    // D2: 3. Use Plotly to plot the data with the layout.
    d3.json("samples.json").then((data) => {
      var resultArray = data
      .samples
      .filter(sampleObj => {
        return sampleObj.id == sample
      });
      
      var result = resultArray[0];
      
      var otu_ids = result.otu_ids.map(numericIds => {
        return numericIds;
      }).reverse();
      
      var sample_values = result.sample_values.reverse();
      var otu_labels = result.otu_labels.reverse();
      // Create the layout for the bubble chart.
      var bubble_trace = {
        
        x: otu_ids,  
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          color: otu_ids,
          size: sample_values

        }
      };
      // 4. Create the trace for the gauge chart.    
        var data = [bubble_trace];

      // 5. Create the layout for the gauge chart.
        var bubble_layout = {
          title: "Bacteria Culturs Per Sample",
          showlegend: false,

        };
      // 6. Use Plotly to plot the gauge data and layout.
        Plotly.newPlot('bubble', data, bubble_layout)
      
      });  
    }    


// Deliverable 3
// Create the Guage buildChart function.    
  function buildGaugeChart(sample) {
  // Use d3.json to load the samples.json file  
    d3.json("samples.json").then((data) => {
  // Create a variable that holds the samples array.     
      var metadata = data.metadata;
      var resultArray = metadata
  // Create a variable that filters the samples for the object with the desired sample number.    
      .filter(sampleObj => {
        return sampleObj.id == sample
      });
      console.log(resultArray);
  // Create a variable that holds the first sample in the array.
      var result = resultArray[0];
      console.log(result);
      var wash_freq = result.wfreq;
      console.log(wash_freq);

  // Create variables that hold the otu_ids, otu_labels, and sample_values.    
      var gauge_trace = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: wash_freq,
          title: {text: "Belly Button Washing Frequency <br> Scrubs per Week", font: {size: 18}},
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: { range: [null, 10]},
            bar: { color: "black" },
            steps: [
              { range: [0, 1], color: "red" },
              { range: [1, 2], color: "red" },
              { range: [2, 3], color: "orange" },
              { range: [3, 4], color: "orange" },
              { range: [4, 5], color: "yellow" },
              { range: [5, 6], color: "yellow" },
              { range: [6, 7], color: "lime" },
              { range: [7, 8], color: "lime" },
              { range: [8, 9], color: "green" },
              { range: [9, 10], color: "green" }
            ],
          }  
        }
      ];
    // 5. Create the layout for the gauge chart.  
      var gauge_layout = {
        
        
        width: 600, 
        height: 500, 
        margin: { t: 0, b: 0 }
      };
    // 6. Use Plotly to plot the gauge data and layout.  
      Plotly.newPlot('gauge', gauge_trace, gauge_layout)
    
    });
  
  }

