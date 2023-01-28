import coffeeGrains from './images/coffee2.jpg'
export default function getAboutpage() {
    const pageTitle = document.createElement('div');
    pageTitle.classList.add('page-title');
    pageTitle.innerHTML = 'About Us';
    const img = document.createElement('img');
    img.height = "500";
    img.src = coffeeGrains;
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    const fullbox = document.createElement('div');
    const textbox = document.createElement('div');
    const text = document.createElement('p');
    text.innerText = 'With quality always in mind, our coffee shop managed to be the most liked in town for over 30 years now. It\'s because of our love of coffee and confidence of our customers in our product quality.';

    const title = document.createElement('p');
    title.innerText = 'Over 30 years of coffee';
    title.classList.add('about-title')

    textbox.appendChild(title);
    textbox.appendChild(text);
    textbox.classList.add('about-text');
    


    fullbox.appendChild(textbox);
    fullbox.appendChild(img);
    fullbox.classList.add('about-page');
    pageContent.appendChild(fullbox);
    const element = document.createElement('div');
    element.classList.add('page-element')
    element.appendChild(pageTitle);
    element.appendChild(pageContent);
    return element;
}