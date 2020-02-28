 import getBears from './bearData.js';
 import cardBears from './river.js';
  import river from './river.js';
 

 const addBear = (e) => {
     console.log("addbear");
    //  const bearName = document.getElementById('bear-name').value;
    //  const bearImage = document.getElementById('bear-image').value;
     const bearId = e.target.id;
    //  getBears.allBears({name:bearName,image: bearImage});
    //  river.cardBears();
    //  document.getElementById('new-bear-form').reset();
  };
 
  const addBearEvent = () => {
    document.getElementsById('submit-bear').addEventListener('click', addBear);
    };



export default { addBearEvent,addBear };
