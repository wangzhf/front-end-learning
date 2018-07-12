## Front End Learning

### webpack


### Problem
1. Ubuntu: webpack error: 
```js
/usr/local/lib/node_modules/webpack-cli/bin/cli.js:244
                                throw err;
                                ^

Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'
    at Function.Module._resolveFilename (module.js:547:15)
```
solution 1: 
```js
npm uninstall -g webpack
npm install --save-dev webpack
```
solution 2: 
```js
npm i webpack -g; 
npm link webpack --save-dev;
npm i webpack --save-dev
```

2. Ubuntu: npm ERR! code EACCES
```js
npm ERR! path /home/zhifeng/workspace/static/front-end-learning/vue/start/node_modules/webpack
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall access
npm ERR! Error: EACCES: permission denied, access '/home/zhifeng/workspace/static/front-end-learning/vue/start/node_modules/webpack'
npm ERR!  { Error: EACCES: permission denied, access '/home/zhifeng/workspace/static/front-end-learning/vue/start/node_modules/webpack'
npm ERR!   stack: 'Error: EACCES: permission denied, access \'/home/zhifeng/workspace/static/front-end-learning/vue/start/node_modules/webpack\'',
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/home/zhifeng/workspace/static/front-end-learning/vue/start/node_modules/webpack' }
npm ERR!
npm ERR! Please try running this command again as root/Administrator.
```
solution: 
```
sudo chown -R whoami ~/.npm
sudo chown -R whoami /usr/local/lib/node_modules
```
