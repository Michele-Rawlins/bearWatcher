
import addBear from './bear.js';
import printToDom from '../helpers/data/util.js';

//create card for bear, need click event
const cardBears = ()=> {
    let domstring="";
    console.log("mememe");{
    allBears.forEach(bears);
        domstring += '<div class = "d flex flex-wrap">';
        domstring += '<div class="card" style="width: 18rem;">';
        domstring += `<img src="${bears.image}" class="card-img-top" alt="...">`;
        domstring += '<div class="card-body">';
        domstring += `<h5 class="card-title">${bears.name} </h5>`;
        domstring += '</div>';
        domstring += '</div>';

}

util.printToDom('river', domstring);
};


export default { cardBears };