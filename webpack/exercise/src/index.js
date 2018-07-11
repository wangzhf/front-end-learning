import _ from 'lodash';
import Print from './print';

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

// 注册Service work
if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('Service Worker: ', registration);
        }).catch(registration => {
            console.log('Service worker registration failed: ', registration);
        });
    });
}