// //***************CALLBACK HELL *********/
// const directions = [
//   /*0*/ "Starting point: Ironhack Miami",
//   "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
//   "➔ Turn right onto S Miami Ave",
//   "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
// ];

// function getDirections(step, callback, errorCallback) {
//   // setTimeout(() => {
//   console.log(directions[step]);

//   if (!directions[step]) errorCallback("Instructions not found.");
//   else callback();
//   // }, 2000);
// }

// // Single callback
// // getDirections(0, () => {
// //   getDirections(1, () => {
// //     getDirections(2, () => {});
// //   });
// // });
// // //with the error checks
// // getDirections(
// //   0,
// //   () => {
// //     getDirections(
// //       1,
// //       () => {
// //         getDirections(
// //           2,
// //           () => {
// //             getDirections(
// //               3333,
// //               () => {
// //                 console.log("finally! we finished the callbacks!");
// //               },
// //               (err) => console.log(err)
// //             );
// //           },
// //           (err) => console.log(err)
// //         );
// //       },
// //       (err) => console.log(err)
// //     );
// //   },
// //   (err) => console.log(err)
// // );

// const arr = ["Ragnar", "Yuki", "Feba"];
// const arrOfAges = [4, "6m", 8];
// //**********************Creating a Promise ***************/
// const ourPromise1 = new Promise((resolve, reject) => {
//   const thePets = arr;
//   if (thePets) {
//     resolve(thePets);
//   } else {
//     reject("there is not pet there");
//   }
// });
// const ourPromise2 = new Promise((resolve, reject) => {
//   const thePetAges = arrOfAges;
//   if (!thePetAges) {
//     resolve(thePetAges);
//   } else {
//     reject("there is not pet there");
//   }
// });

// // //*******************Consuming a Promise **************/
// // // ***************.then and .catch ***************
// // ourPromise1
// //   .then((res) => {
// //     console.log("here is the response to the promise: ", res);
// //     return ourPromise2;
// //   })
// //   .then((res2) => {
// //     console.log("this is the second promise", res2);
// //   })
// //   .catch((err) => {
// //     console.log("Error: ", err);
// //   })
// //   .finally(() => {
// //     console.log("this always happens");
// //   });

// // //******************async and await **********/
// // async function giveMeThePets() {
// //   try {
// //     const response1 = await ourPromise1;
// //     const response2 = await ourPromise2;
// //     console.log(
// //       "here is your pet names: ",
// //       response1,
// //       " and their ages are: ",
// //       response2
// //     );
// //   } catch (err) {
// //     console.log("this is in the catch block", err);
// //   }
// // }
// // //with and arrow function
// // //   const giveMeAPet = async () =>{}
// // giveMeThePets();

// //**************Promise.all()*************/
// // Promise.all([ourPromise1, ourPromise2])
// //   .then((res) => {
// //     console.log("response to the promise.all ", res);
// //   })
// //   .catch((err) => console.log(err));

//************fetch GET request*************/
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => {
    return res.json();
  })
  .then((parsed) => {
    console.log(parsed.results);
  })
  .catch((err) => {
    console.log(err);
  });
