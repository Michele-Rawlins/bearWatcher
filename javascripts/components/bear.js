 import bearData from './bearData.js';
 

 const addBear = (e) => {
     console.log("addbear");
     const bearName = document.getElementById('bear-name').value;
     const bearImage = document.getElementById('bear-image').value;
    // const bearId = e.target.id;
    bearData.setBear(bearId);
    
  };

  const addBearEvent = (e) => {
    document.getElementsById('submit-bear').addEventListener('click', addBear);
    };



export default { addBearEvent };