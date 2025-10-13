let counter = 0;

const updateCounter = () => {
    counter++;
    console.log(counter);
}
setInterval(updateCounter, 1000); // 1000 milliseconds = 1 second


/* 
Once you've implemented the logic, test your code by running
`npx jest ./assignments/week-2/week-2-async-js/easy/1-counter.test.js` in the terminal.
*/