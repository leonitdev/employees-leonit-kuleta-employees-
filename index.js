
let dataSet = [
  {
    empId: 143,
    projectId:12,
    dateFrom:"2013-11-01",
    dateTo:"2014-01-05",
  },
  
    {
    empId: 218,
    projectId:10,
    dateFrom:"2012-05-16",
    dateTo:null,
  },
    {
    empId: 143,
    projectId:10,
    dateFrom:"2009-01-01",
    dateTo:"2011-04-27",
  },
    {
    empId: 143,
    projectId:12,
    dateFrom:"2009-01-05",
    dateTo:"2011-04-27",
  },
  
      {
    empId: 149,
    projectId:14,
    dateFrom:"2000-01-01",
    dateTo:"2020-04-27",
  },
    {
    empId: 149,
    projectId:14,
    dateFrom:"2007-01-05",
    dateTo:"2019-04-27",
  },
  
   {
    empId: 150,
    projectId:14,
    dateFrom:"2007-01-05",
    dateTo:"2020-04-27",
  },
];

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
