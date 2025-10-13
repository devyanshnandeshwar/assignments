l

let counter = 0;

async function startCounter() {
    while (true) {
        counter++;
        console.log(counter);
        await delay(1000); // wait for 1 second before increment 
    }
}

startCounter();
/* 
let counter = 0;

async function startCounter() {
    while (true) {
        counter++;
        console.log(counter);
        await delay(1000); // wait for 1 second before increment 
    }
}
*/

/* 
let counter = 0;

const updateCounter = () => {
  counter++;
  console.log(counter);
  setTimeout(updateCounter, 1000);
};

updateCounter();
*/