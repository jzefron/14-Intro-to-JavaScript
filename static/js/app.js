// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function fillTable(data) {
    //loop over data
    data.forEach((aliens) => {
      // add a new row for each data
      var row = tbody.append("tr");
      //loop over each data entry and add it to the table
      Object.entries(aliens).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      
      });
    });
  console.log('done')
};
fillTable(data);  
// column name array
filters = [
"datetime",
 "city",
 "state",
 "country",
 "shape"];
 // level 1 filter
 var text = d3.select("#datetime");


  // Function to handle input change
function handleChange(event) {
    // stop the submit default
    d3.event.preventDefault();
    console.log('doing stuff')
 
    console.log(filtDate)
    var filterBool =  true
    //removing ful table
    tbody.selectAll('*').remove();
   /*
    filters.forEach( x => {
      filt = d3.select('#'+x);
      filtText = filt.property('value')
      console.log(filt)
      console.log(filtText)
      if (filtText !== '') {
      //  filterBool = filerBool && 
      }
    })
  */
    //filter table for the date
    var filterInputText
    var filtData= data.filter(iData => {
      //initialize filter 
      filtBool = true
      //loop over the filers
      filters.forEach( f=>{
        // get the individual field text
      //  console.log(f)
      
        filterInputText =  d3.select('#'+f).property('value')
       // console.log(filterInputText)

        // check if the column matches the filer text or if the input text is empty
        filtBool = filtBool &&( (iData[f] ===filterInputText) || (filterInputText === ''))
        
      }
      )
    // return individual datas if filtered
    return filtBool;
    })
    
    fillTable(filtData);
};
//filter button 
var but = d3.select('.filt');
console.log(but.property);
but.on('click',handleChange);
