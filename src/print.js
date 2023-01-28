export default function printPage(baseElement, pageElement, cssClass) {
    let classList = baseElement.classList;
    while(classList.length > 0) {
        classList.remove(classList.item(0));
    };
    baseElement.classList.add(cssClass);
    baseElement.innerHTML = '';
    baseElement.appendChild(pageElement);
};