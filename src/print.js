export default function printPage(baseElement, pageElement) {
    baseElement.innerHTML = '';
    baseElement.appendChild(pageElement);
};