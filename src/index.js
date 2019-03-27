import _ from 'lodash';
import './style.scss';
import './styleImport.css';
import DobbyIsFree from './dobbyisfree.png';

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var Dobby = new Image();
    Dobby.src = DobbyIsFree;
    element.appendChild(Dobby);
    return element;
}
document.body.appendChild(component());
