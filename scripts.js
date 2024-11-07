const countBtn = document.getElementById("count-Btn")

countBtn.addEventListener("click", ()=>{



// function definition of code  

    // calling createCounter every time - This keeps running createCounter() everytime I press the button
    //  createCounter.increment;
    

    // reference to a function counter only runs 1 time 
    // 1st Ref createCounter (You need to actually have it) (Line 44)
    // 2nd Have the createCounter in my hands
    // 3rd do the action
        counter.increment();
})


function createCounter(){
    let count = 0;

    //Defining the different functions 
    function increment(){
    // both textContent & inner HTML works
        count++;
        // console.log is firing here
        // console.log(`Count increased to ${count}`);
        countBtn.innerHTML = `+ ${count}`;
    }
    
    function getCount(){
        return count;
    }
//Actually use the functions
// {} needed because can't return more than 1 thing
    return {increment, getCount};


    // This works
    // countBtn.innerHTML = `+ ${getCount}`;
// This works by itself
//     countBtn.innerHTML = "hello hello"

// if it is outside**
// countBtn.innerHTML = `+ ${count}`;
}

const counter = createCounter();
console.log(counter);


// counter.getCount() = the number of clicks




