 import cardBears from './river.js';
 import bearData from '../helpers/data/bearData.js';

 

 const addBear = (e) => {
    console.log("hello");
    e.preventDefault();
     const bearName = document.getElementById('bear-name').value;
     const bearImage = document.getElementById('bear-image').value;
     bearData.allBears({name: bearName, image: bearImage});
     cardBears.cardBears();
     document.getElementById('new-bear').reset();
  };
 
  const addBearEvent = () => {
    document.getElementById('submit-bear').addEventListener('click', addBear);
    };



export default { addBearEvent };
