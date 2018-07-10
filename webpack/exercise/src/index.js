import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    btn.innerHTML = 'click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

//document.body.appendChild(component());
let element = component(); // 当print.js改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

// HMR
if(module.hot){
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        //printMe();
        document.body.removeChild(element);
        element = component(); // 重新渲染后，component更新click事件处理
        document.body.appendChild(element);
    });
}