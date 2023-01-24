export default function getHomepage() {
    const element = document.createElement('div');
    element.classList.add('page-element');
    element.innerHTML = 'Homepage';
    return element;
}