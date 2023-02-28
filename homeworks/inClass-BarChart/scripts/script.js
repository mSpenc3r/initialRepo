d3.csv("./data/gapminder.csv").then(function(data) {


});

//const width = window.innerWidth;
//const height = window.innerHeight;

console.log(window.innerWidth);
const width = console.log(document.querySelector("#chart").clientWidth);
const height = console.log(document.querySelector("#chart").clientHeight);

const svg = d3.select("#chart")
    .append("svg")
    .append("width", width)
    .append("height", height);

let filtered_data = data.filter(function(d) {
    return d.country === "United States";
});

d3.min(filtered_data, function(d) {return +d.lifeExp; })
d3.max(filtered_data, function(d) {return +d.lifeExp; })

const lifeExp = {
   min: d3.min(filtered_data, function(d) {return +d.lifeExp; }),
   max: d3.max(filtered_data, function(d) {return +d.lifeExp; })    
}

console.log(lifeExp.min, lifeExp.max);

const margin = {top: 50, left: 100, right: 50, bottom: 100};

const xScale = d3.scaleBand()
    .domain(["1952","1957","1962","1967","1972","1977","1982","1987","1992","1997","2002","2007"])
    .range([margin.left, width-margin.right])
    .padding(0.5);

const yScale = d3.scaleLinear()
    .domain([50, lifeExp.max])
    .range([height-margin.bottom, margin.top]);

const xAxis = svg.append


