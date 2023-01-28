export default function getHomepage() {
    const pageTitle = document.createElement('div');
    pageTitle.classList.add('page-title');
    pageTitle.innerHTML = 'Homepage';

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.innerHTML = `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus fugit tempore quae repudiandae repellendus cupiditate labore reiciendis, sunt at atque beatae quo facilis odit deserunt. Ex repellendus dolorum pariatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eveniet ratione ad saepe sequi explicabo dignissimos ex quae ut perferendis nemo, voluptatum delectus beatae! Dolor dolorem iste animi quos aperiam dignissimos in, qui doloremque hic esse excepturi ratione eveniet natus illum quis quod aspernatur, fuga ullam modi veniam, praesentium corporis perferendis recusandae. Atque quibusdam architecto odit cum dignissimos! Accusamus eius sunt corrupti, sed aliquam unde dolore doloribus velit. Vel tempora necessitatibus et incidunt fuga. Delectus quas eum voluptates quibusdam odio architecto adipisci nulla consectetur corrupti temporibus doloremque inventore officiis quae nihil, qui non reiciendis necessitatibus. Rem optio soluta animi inventore nemo repellendus dicta rerum ipsum deserunt, nam quae, dolore illum adipisci ex, culpa quidem blanditiis. Doloremque nihil ipsum deleniti obcaecati!</p>
    `;


    const element = document.createElement('div');
    element.appendChild(pageTitle);
    element.appendChild(pageContent);
    element.classList.add('page-element');

    return element;
}