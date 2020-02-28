//Array of bears

const bears = [];

 
//getter function
const getBears =() => {
    console.log("what's up");
    return bears
};

const allBears = (newBear) => {
    bears.push(newBear);
};


//send array out 

export default {  getBears,allBears };