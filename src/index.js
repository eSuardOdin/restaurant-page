import _ from "lodash";
import './style.css';
import printMe from "./print";


function component() {
    const btn = document.createElement('button');
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    btn.innerHTML = 'Click me and check the console.'
    element.appendChild(btn);
    btn.onclick =  () => printMe();
    element.classList.add('test');
    return element;
}

document.body.appendChild(component());