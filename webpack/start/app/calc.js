const $ = require('jquery');
const Vue = require('vue');

document.querySelector('#calc').append('1');

function testCommon() {
    var a = 1;
    console.log(a);
}

testCommon();
console.log($('#root').length);