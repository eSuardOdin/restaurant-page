export default function getAboutpage() {
    const pageTitle = document.createElement('div');
    pageTitle.classList.add('page-title');
    pageTitle.innerHTML = 'About Us';

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.innerHTML = `
    <p>Lorem necessitatibus et incidunt fuga. Delectus quas eum voluptates quibusdam odio architecto adipisci nulla consectetur corrupti temporibus doloremque inventore officiis quae nihil, qui non reiciendis necessitatibus. Rem optio soluta animi inventore nemo repellendus dicta rerum ipsum deserunt, nam quae, dolore illum adipisci ex, culpa quidem blanditiis. Doloremque nihil ipsum deleniti obcaecati!</p>
    `;



    const element = document.createElement('div');
    element.appendChild(pageTitle);
    element.appendChild(pageContent);
    element.classList.add('page-element');
    return element;
}