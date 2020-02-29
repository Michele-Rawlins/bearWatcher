 import getBears from '../helpers/data/bearData.js';
 import cardBears from './river.js';

 

 const addBear = (e) => {
    console.log("hello");
e.preventDefault();
     const bearName = document.getElementById('bear-name').value;
     const bearImage = document.getElementById('bear-image').value;
     const bearId = e.target.id;

     getBears.allBears({name: bearName, image: bearImage});
     cardBears.cardBears();
     document.getElementById('new-bear').reset();
  };
 
  const addBearEvent = () => {
    document.getElementById('submit-bear').addEventListener('click', addBear);
    };



export default { addBearEvent };
