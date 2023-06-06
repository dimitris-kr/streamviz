import {Component} from '@angular/core';
import * as d3 from 'd3';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-d3-bar',
  templateUrl: './d3-bar.component.html',
  styleUrls: ['./d3-bar.component.css']
})
export class D3BarComponent {

  private data: Data[] = [];
  private svg: any;
  private margin = 10;
  private width = 800 - (this.margin * 2);
  private height = 500 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.country))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.country))
      .attr("y", (d: any) => y(d.unemployment))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.unemployment))
      .attr("fill", "#d04a35");
  }

  private grid(tick: any): void {
    return tick.append("line")
      .attr("class", "grid")
      .attr("x2", this.width - 2 * this.margin)
      .attr("stroke", "black")
      .attr("stroke-opacity", 0.1);
  }

  private position(rect: any, x:any, y:any, xScale: any, yScale: any): void {
    return rect
      .attr("x", x)
      .attr("y", y)
      .attr("height", typeof y === "function" ? (a:number):number => yScale(0) - y(a) : (a:number):number => yScale(0) - y)
      .attr("width", xScale.bandwidth());
  }

  public createBarChart(): any {
    const X = d3.map(this.data, d => d.country);
    const Y = d3.map(this.data, d => d.unemployment);

    // Compute default domains, and unique the x-domain.

    let yDomain = [0, d3.max(Y)];
    let xDomain = new d3.InternSet(X);

    // Omit any data not present in the x-domain.
    const I = d3.range(X.length).filter(i => xDomain.has(X[i]));


    const xRange = [this.margin, this.width - this.margin];
    const xPadding = 0.1;
    const yRange = [this.height - this.margin, this.margin];
    const yType = d3.scaleLinear;
    const yFormat = "%";
    const color = "indianred";
    const tickColor = "gray"
    const labelColor = "indianred";
    const title = "World Unemployment in 2020";
    const yLabel = "Unemployment Ratio";
    const marginBottom = 100;

    // Construct scales, axes, and formats.
    const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
    // @ts-ignore
    const yScale = yType(yDomain, yRange);
    // @ts-ignore
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(this.height / 40, yFormat);
    const format = yScale.tickFormat(100, yFormat);

    const O = d3.map(this.data, d => d);
    const II = d3.map(this.data, (_, i) => i);

    // Compute titles.
    const formatValue = yScale.tickFormat(100, yFormat);

    const svg = d3.select("#bar2")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("viewBox", [0, 0, this.width, this.height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");


    const yGroup = svg.append("g")
      .attr("transform", `translate(${this.margin},0)`)
      .call(yAxis)
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick"))
      .call(g => g.selectAll("text")
        .attr("fill", tickColor))
      .call(g => g.append("text")
        .attr("x", -this.margin)
        .attr("y", 10)
        .attr("fill", labelColor)
        .attr("text-anchor", "start")
        .text(yLabel));

    let rect = svg.append("g")
      .attr("fill", color)
      .selectAll("rect")
      .data(I)
      .join("rect")
      .property("key", i => X[i]) // for future transitions
      .call(this.position, (i:number):any => xScale(X[i]), (i:number):number => yScale(Y[i]), xScale, yScale)
      .style("mix-blend-mode", "multiply")
      .call(rect => rect.append("title")
        .text(i => [X[i], format(Y[i])].join("\n")));

    const xGroup = svg.append("g")
      .attr("transform", `translate(0,${this.height - marginBottom})`)
      .call(xAxis)

      .call(g => g.selectAll("text")
        .attr("fill", tickColor)
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)")
      );

    // Chart Title
    const chartTitle = svg.append("text")
      .attr("x", (this.width / 2))
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .attr("fill", labelColor)
      .attr("font-size", "22")
      .text(title);

    return svg.node();

  }

  constructor(private http: HttpClient) {
    this.http.get('assets/final_demographics_data.csv', {responseType: 'text'})
      .subscribe({
        next: data => {
          let rows = data.split("\n");
          rows.shift();
          rows.forEach(row => {
            let columns = row.split(",");

            this.data.push(new Data(columns[0], parseFloat(columns[58])))
          });
        },
        error: error => console.log(error)
      });

    console.log(this.data);
  }

  svg2: any;

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);

    this.createBarChart();
  }
}

export class Data {
  country: String;
  unemployment: number;

  constructor(country: String, unemployment: number) {
    this.country = country;
    this.unemployment = unemployment;
  }
}
