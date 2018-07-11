import _ from 'lodash';
//import Print from './print';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.onclick = Print.bind(null, 'hello webpack!!');
    return element;
}

document.body.appendChild(component());