export default function getFullPage() {
    const element = document.createElement('div');
    element.classList.add('full-page-container');
    console.log('Full page created');
    return element;
}