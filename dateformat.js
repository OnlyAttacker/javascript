/*
  function : format the date use format string
  output : return the format date
  input : format string follwed by php
          for example 'Y-m-d H:i:s' return 2016-7-22 11:00:00
*/

Date.prototype.format = function (format) {
  var obj = {
     Y : this.getFullYear(),
     m :    this.getMonth()+1,
     d : this.getDate(),
     H : this.getHours(),
     i : this.getMinutes(),
     s : this.getSeconds(),
     q : Math.ceil((this.getMonth() +1 )/3)
  };
  for(var attr in obj) {
     //profix 0 when day,month,hour,minite,second letter 10 and replace global
     //quarter dont have prefix zero
     format = format.replace(new RegExp(attr,'g'),(obj[attr]<10 && attr != 'q')?("0"+obj[attr]):obj[attr]);
  }
  return format;
}
// usage:

// new Date().format('Y/m/d H:i:s'); //return value like this 2016/07/23 00:00:00
// get the quarter

// console.log(new Date('2015-1-1').format('q'))  //return 1
// console.log(new Date('2015-4-1').format('q'))  //return 2
// console.log(new Date('2015-7-1').format('q'))  //return 3
// console.log(new Date('2015-10-1').format('q'))     //return 4