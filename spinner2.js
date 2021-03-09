// const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
// let a = 0;
//console.log(typeof arr[0]);
// Method 1// using a for loop//
// for (let i = 100; i < 1800; i+= 200) {
  

//   setTimeout(() => {
//     if (a === 4) {
//       a = 0;
//     }

//     process.stdout.write(arr[a]);
//     a+=1;
//   }, i);

// };

// method 2 // use setInterval()
const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let a = 0;

let interval = setInterval(() => {
    if (a === 4) {
      a = 0;
    }

    process.stdout.write(arr[a]);
    a+=1;
  }, 100);

setTimeout(() => clearInterval(interval), 20000);



