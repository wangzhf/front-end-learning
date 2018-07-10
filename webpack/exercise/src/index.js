function getComponent() {
    // 在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js
    return import(/* webpackChunkName: 'lodash' */ 'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occured while loading the component');
}

getComponent().then(component => {
    document.body.appendChild(component);
});