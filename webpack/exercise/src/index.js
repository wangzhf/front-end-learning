import _ from 'lodash';

function component() {
    var element = document.createElement('pre');

    element.innerHTML = _.join(['Hello webpack!', 'This is a good project. '], ' ');

    return element;
}

document.body.appendChild(component());