import createArticle from "./createArticle";
import coffeImg from './images/small/coffee-grains.jpg';
import cheeseCakeImg from './images/small/pexels-wendy-wei-3071870.jpg';
import cookiesImg from './images/small/pexels-anete-lusina-4792397.jpg';

export default function getAboutpage() {
    const pageTitle = document.createElement('div');
    pageTitle.classList.add('page-title');
    pageTitle.innerHTML = 'About Us';

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    // Page articles
    pageContent.appendChild(createArticle(coffeImg, 'Our coffee is not responsible for polar bear deaths', 'Eco responsible coffee', true));

    pageContent.appendChild(createArticle(cheeseCakeImg, 'Some tasty cheescake with the topping of your choice', 'Cheescake', false));

    pageContent.appendChild(createArticle(cookiesImg, 'Hand made cookies with bio ingredients', 'Cookies', true));

    const element = document.createElement('div');
    element.appendChild(pageTitle);
    element.appendChild(pageContent);
    element.classList.add('page-element');
    return element;
}