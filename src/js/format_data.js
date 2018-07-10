/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

/*const fname = '/home/nesau/GitHub/mortality_stats/src/data/data.json';
var fs = require('fs');
var d = JSON.parse(fs.readFileSync(fname, 'utf8'));*/

const initialReformat = (data) => {
	var temp = {};
  
	return data.fact.map((row) => {
		temp = row.Value;
		row = row.dims;
		row.Value = temp;
		return row;
	});
};

const sortDataByYear = data => {
  var sortByYear = {};
  data.forEach( row => {
    if (!sortByYear[row.YEAR]) {
      sortByYear[row.YEAR] = [];
      sortByYear[row.YEAR].push(row);
    } else {
      sortByYear[row.YEAR].push(row);
    }
  });
  return sortByYear;
};

// #NE - to review

const arrangeData = data => {
  const temp = [];
  var i = 0;
  for (const year in data) {
    temp.push({year});
    data[year].forEach(obj => {
      if (parseFloat(temp[i][obj.COUNTRY]) > 0) {
        temp[i][obj.COUNTRY] = (temp[i][obj.COUNTRY] + parseFloat(obj.Value)) / 2;
      }
      else {
        temp[i][obj.COUNTRY] = parseFloat(obj.Value).toFixed(2);
      }
    });
    i++;
  }
  return temp;
};

/*var df = arrangeData(
          sortDataByYear(
          initialReformat(d)
          ));

fs.writeFileSync('data_final.json',
  JSON.stringify(df, null, 2),
  'utf8');*/