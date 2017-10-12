
// syntax

// let getPrice=function(){return 100.00;}

// let getPrice=()=>{return 100.00+10;}
// let getPrice = () => 100.00 + 10;
// let getPrice = (count) => count * (100.00 + 10);
// let getPrice = count => count * (100.00 + 10);
// let getPrice = (count, gst) => count * (100.00 + 10) + gst;
// let getPrice = (count, gst) => {
//     let cost = count * (100.00 + 10);
//     let total = cost + gst
//     return total;
// };



// why we need arrow-functions?


// use : compact syntax on function-arg

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// nums.sort(function (a, b) { return a - b });
// nums.sort((a, b) => a - b);



// use :


/*

 problems with regular functions

  ==> then can bind to any obj dynamically.

  --------------------------------------------

  advantage of arrow-function is

  --> they always bound to creator-obj
  --> we can bins arrow function to other objs dynamically

  ---------------------------------------------


*/

// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");

//         // let askQues = function (ques) {
//         //     console.log(this.name + " answering " + ques);
//         // }

//         let askQues = (ques) => {
//             console.log(this.name + " answering " + ques);
//         }

//         console.log(" teaching end");
//         return askQues;
//     }
// }

// let askQ = tnr.doTeach();
// askQ("Q1");

// let newTnr = { name: 'Ria' };
// askQ.call(newTnr, "Q2");


// ---------------------------------------------



// let inv = {
//     num: 123,
//     process: function () {
//         console.log("INV-"+this.num + " processed");
//     }
// }


// let inv = {
//     num: 123,
//     process: () => {
//         console.log("INV-" + this.num + " processed");
//     }
// }


// let inv = {
//     num: 123,
//     process: function () {
//         console.log("INV-"+this.num + " processed partially");
//         let complete=function(){
//             console.log("INV-"+this.num + " processed completly");
//         }
//         return complete;
//     }
// }


// let inv = {
//     num: 123,
//     process: function () {
//         console.log("INV-"+this.num + " processed partially");
//         let complete=()=>{
//             console.log("INV-"+this.num + " processed completly");
//         }
//         return complete;
//     }
// }

inv.process()();
