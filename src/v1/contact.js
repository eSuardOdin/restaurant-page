export default function getAboutpage() {
    const pageTitle = document.createElement('div');
    pageTitle.classList.add('page-title');
    pageTitle.innerHTML = 'Contact';

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.innerHTML = `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus fugit tempore quae repudiandae repellendus cupiditate labore reiciendis, sunt at atque beatae quo facilis odit deserunt. Ex repellendus dolorum pariatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eveniet ratione ad saepe sequi explicabo dignissimos ex quae ut perferendis nemo, voluptatum delectus beatae! Dolor dolorem iste animi quos aperiam dignissimos in, qui doloremque hic esse excepturi ratione eveniet natus illum quis quod aspernatur ipsum deleniti obcaecati!</p>
    `;



    const element = document.createElement('div');
    element.appendChild(pageTitle);
    element.appendChild(pageContent);
    element.classList.add('page-element');
    return element;
}