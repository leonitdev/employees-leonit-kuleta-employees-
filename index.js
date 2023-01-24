

let dataSet = require('./data/db.json');

const sortDataByDuration = (data) => {
  return data.map(obj => {
    return {
      ...obj,
      dateFrom:obj.dateFrom || new Date().toString(),
      dateTo:obj.dateTo || new Date().toString(),
      duration: new Date(obj.dateTo ? obj.dateTo : new Date()).getTime() - new Date(obj.dateFrom ? obj.dateFrom : new Date()).getTime()
    }
  }).sort((a, b) => parseFloat(b.duration) - parseFloat(a.duration))
}


const findLongestTeam = (sortedData) => {
  let longestTeam = {pair1:{duration:0}, pair2:{duration:0}};
  for(let i = 0; i < sortedData.length - 1; i++){
    for(let j = i+1; j < sortedData.length - 1; j++){
      if(sortedData[i].projectId === sortedData[j].projectId && sortedData[j].duration > longestTeam.pair2.duration){
        longestTeam = {pair1: sortedData[i], pair2:sortedData[j]};
      }
    }
  }
  return longestTeam;
}


const sortedData = sortDataByDuration(dataSet);
const longestTeam = findLongestTeam(sortedData);

console.log("longestTeam: ",longestTeam);
