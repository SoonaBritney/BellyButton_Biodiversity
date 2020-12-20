# BellyButton_Biodiversity

Project Overview
In this module, we will use Plotly.js, a JavaScript data visualization library, to create an interactive data visualization for the web. The completed work will be displayed in a portfolio we created as a live demo web.

# Resources
Data Source: index.html, samples.json, plots_challenge_dashboard.js
Software: VS Code, Web browser, Command-line interface, GitHub

# Objectives
By the end of this module, we will be able to:

- Create basic plots with Plotly, including bar charts, line charts, and pie charts.
- Use D3.json() to fetch external data, such as CSV files and web APIs.
- Parse data in JSON format.
- Use functional programming in JavaScript to manipulate data.
- Use JavaScript’s Math library to manipulate numbers.
- Use event handlers in JavaScript to add interactivity to a data visualization.
- How to use interactivity to enhance your visualizations.
- Deploy an interactive chart to GitHub Pages.

# Summary
- Challenge Overview
    - In this challenge, we have a partially completed dashboard, but need to finish it. We have a completed panel for demographic information and now need to visualize the bacterial data for each volunteer. Specifically, the volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, our volunteers will be able to identify whether that species is found in quantity in their navel.

- Challenge Objectives: The goals of this challenge are for us to:
    - Deliverable 1: Create a Horizontal Bar Chart
    - Deliverable 2: Create a Bubble Chart
    - Deliverable 3: Create a Gauge Chart
    - Deliverable 4: Customize the Dashboard

(1) Deliverable 1: Create a Horizontal Bar Chart
Create a bar chart of the top ten bacterial species in a volunteer’s navel: (Top 10 Bacteria Culturs Found)
- Use JavaScript to select only the most populous species.
- Create a bar chart to visualize the relative frequency of all the bacterial species found in a volunteer’s navel.
- When an individual’s ID is selected, the top 10 bacterial species (OTUs) should be visualized with a bar chart. Create a horizontal bar chart to display the top 10 OTUs found - in that individual.

- Use sample_values as the values for the bar chart.
- Use otu_ids as the labels for the bar chart.
- Use otu_labels as the hover text for the chart.

(2) Deliverable 2: Create a Bubble Chart
In the Demographics Info panel, display all the key-value pairs of the selected individual’s demographic data.
Create a bubble chart that displays each sample: (Bacteria Culturs per Sample)
- The otu_ids as the x-axis values.
- The sample_values as the y-axis values.
- The sample_values as the marker size.
- The otu_ids as the marker colors.
- The otu_labels as the hover-text values.

(3) Deliverable 3: Create a Gauge Chart
- Create a guage chart that displays each sample: (Belly Button Washing Frequency <br> Scrubs per Wee)
- Using your knowledge of JavaScript, Plotly, and D3.js, create a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu.

(4) Deliverable 4: Customize the Dashboard
- Customize your dashboard with three of the following:
    - Add an image to the jumbotron.
    - Add background color or a variety of compatible colors to the webpage.
    - Use a custom font with contrast for the colors.
    - Add more information about the project as a paragraph on the page.
    - Add information about what each graph visualizes, either under or next to each graph.
    - Make the webpage mobile-responsive.
    - Change the layout of the page.
    - Add a navigation bar that allows you to select the bar or bubble chart on the page.
- When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and the three charts should be working according to their requirements.
- When a sample is selected, the dashboard should display the data in the panel and all three charts according to their requirements. 

# Conclusion
- Live Demo: https://soonabritney.github.io/BellyButton_Biodiversity/index.html
- Please click here to review the live demo.

