const greeter = require('./greeting.js');
const $ = require('jquery');
const Vue = require('vue');

document.querySelector('#root').appendChild(greeter());

function testCommon(){
    var a = 1;
    console.log(a);
}
testCommon();

console.log($('#root').length);