function component() {
    var element = document.createElement('div');
    element.innerHTML = ' s Hello d s d s d ';
    return element;
}
document.body.appendChild(component());

if (module.hot) {
    module.hot.accept()
}