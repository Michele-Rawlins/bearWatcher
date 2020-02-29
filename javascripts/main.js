import bearEvent from './components/bears.js';
import cardBears from './components/river.js';
import bearData from './helpers/data/bearData.js';

const init = () =>{

bearEvent.addBearEvent();
bearData.getBears();
cardBears.cardBears();

};


init();