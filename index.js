
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


