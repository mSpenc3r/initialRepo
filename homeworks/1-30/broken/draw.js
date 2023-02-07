//function to render and creat the scatter
const raceData = [
    {
        race: '800m',
        val: 80,
        color: '#FF3636'
    },
    {
        race: '100m',
        val: 79.1,
        color: '#FF4242'
    },
    {
        race: '5000m',
        val: 75.2,
        color: '#FF5C5C'
    },
    {
        race: '400m',
        val: 74.0,
        color: '#FF7373'
    },
    {
        race: '1500m',
        val: 70.2,
        color: '#FF7D7D'
    },
    {
        race: '200m',
        val: 67.0,
        color: '#FF9696'
    },
    {
        race: '3000m',
        val: 65.2,
        color: '#FFC0C0'
    },
    {
        race: '1000m',
        val: 60.2,
        color: '#FFCDCD'
    }
];

//declaring canvas
const svg = d3.select('svg');
const svgCanvas = d3.select('#canvas');

//declearing width / height / margins to use for the canvas
const margin = 100;
const width = 1000 - (2*margin);
const height = 1000 - (2*margin);

//applying margins to canvas
const chart = svg.append('g')
    .attr('transform', 'translate(${margin}, ${margin})');
function drawScale() {
//declaring yscale 
const yS = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);
//drawing yscale
chart.append('g')
    .call(d3.axisLeft(yS)); //note left

//declearing xscale (scaleBand helps with padding and splitting between bars, i didnt do this for yaxis because we dont need splits)
const xS = d3.scaleBand()
    .range([0,width])
    .domain(sample.map((s) => s.language))
    .padding(0.2)
//drawing xscale
chart.append('g')
    .attr('transform', 'translate(0, ${height})')
    .call(d3.axisBottom(xS)); //note bottom
}

//okay, now we draw the bars

//here we select everything on the chart so we can manipulate it
//we take the data, enter to see if there is missing data if it exceeds the selection, create rectangles
//from here, we take each set of data from the array and assign a rectangle to it using .append



