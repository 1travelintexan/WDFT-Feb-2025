// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Your taters are ready!</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((res2) => {
    document.querySelector("#steak").innerHTML += `<li>${res2}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((res3) => {
    document.querySelector("#steak").innerHTML += `<li>${res3}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((res4) => {
    document.querySelector("#steak").innerHTML += `<li>${res4}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((res5) => {
    document.querySelector("#steak").innerHTML += `<li>${res5}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((res6) => {
    document.querySelector("#steak").innerHTML += `<li>${res6}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((res7) => {
    document.querySelector("#steak").innerHTML += `<li>${res7}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((res8) => {
    document.querySelector("#steak").innerHTML += `<li>${res8}</li>`;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    document.querySelector(
      "#steak"
    ).innerHTML += `<li>The steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });
// Iteration 3 using async/await
// const makeBroccoli = async ()=>{}
async function makeBroccoli() {
  try {
    const res1 = await obtainInstruction("broccoli", 0);
    const res2 = await obtainInstruction("broccoli", 1);
    const res3 = await obtainInstruction("broccoli", 2);
    const res4 = await obtainInstruction("broccoli", 3);
    const res5 = await obtainInstruction("broccoli", 4);
    const res6 = await obtainInstruction("broccoli", 5);
    const res7 = await obtainInstruction("broccoli", 6);

    document.querySelector("#broccoli").innerHTML += `<li>${res1}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${res2}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${res3}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${res4}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${res5}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${res6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${res7}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}
makeBroccoli();
// Bonus 2 - Promise all
const arrayOfPromises = [];
brusselsSprouts.forEach((oneStep, index) => {
  arrayOfPromises.push(obtainInstruction("brusselsSprouts", index));
});
console.log("here is the array", arrayOfPromises);
Promise.all(arrayOfPromises)
  .then((res) => {
    console.log("here is the response from the promise all: ", res);
    res.forEach((oneResponse) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${oneResponse}</li>`;
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussel Sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err));
