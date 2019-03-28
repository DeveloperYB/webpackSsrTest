import _ from 'lodash';
import './style.scss';
// import DobbyIsFree from './images/dobbyisfree.png';

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    let btn = document.createElement('button');

    btn.innerHTML = 'Click me and then check the console!';
    btn.onclick = () => {
        import('./print').then(({ default: printMe }) => printMe());
    };
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());
