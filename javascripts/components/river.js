
import util from '../helpers/util.js';
import bearData from '../helpers/data/bearData.js';
import bears from '../components/bears.js';

//create card for bear,
const cardBears = ()=> {
    const bearDom = bearData.getBears();
    let domstring="";
    bearDom.forEach((bearsarr) => {
        domstring += '<div class = "d-flex flex-wrap">';
        domstring += '<div class="card" style="width: 18rem;">';
        domstring += `<img src="${bearsarr.image}"class="card-img-top" alt="...">`;
        domstring += '<div class="card-body">';
        domstring += `<h5 class="card-title">${bearsarr.name}</h5>`;
        domstring += '</div>';
        domstring += '</div>';

        })
    

    util.printToDom('river', domstring);
}


export default { cardBears };