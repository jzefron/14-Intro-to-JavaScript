// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
function fillTable(data) {
    data.forEach((aliens) => {
    var row = tbody.append("tr");
    Object.entries(aliens).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
      
    });
  });
  console.log('done')
};
fillTable(data);
var text = d3.select("#datetime");
  // Function to handle input change
function handleChange(event) {
    // grab the valu   e of the input field
    d3.event.preventDefault();
    let filtDate = text.property('value')
    console.log(filtDate)
    
    //console.log(this.property('value'))
    //var inputText = d3.event.target.value;
   // console.log(inputText);
    // remove the previous info
    tbody.selectAll('*').remove();
    var filtData= data.filter(e => e.datetime === filtDate)
    fillTable(filtData);
};
var but = d3.select('.date-filt');
console.log(but.property);
but.on('click',handleChange);
/*butt => {
    d3.event.preventDefault();
   // Plotly.d3.select("#submit").on("click", d3.event.preventDefault());//.preventDefault();//d3.select("#submit").on("click", handleSubmit);
         console.log('pressed');
         handle
        }
);*/
//text.on("change", console.log('stuff'));//handleChange);