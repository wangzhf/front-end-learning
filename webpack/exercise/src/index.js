import _ from 'lodash';
import './style.css';
import Icon from './test.png';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 添加图像
    var myIcon = new Image();
    myIcon.src = Icon;
    //element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());