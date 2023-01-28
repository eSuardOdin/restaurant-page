import createArticle from "./createArticle";

import coffeImg from './images/small/pexels-chevanon-photography-312418.jpg';
import cheeseCakeImg from './images/small/pexels-wendy-wei-3071870.jpg';
import cookiesImg from './images/small/pexels-anete-lusina-4792397.jpg';

export default function getMenuPage() {
    const pageTitle = document.createElement('div');
    pageTitle.classList.add('page-title');
    pageTitle.innerHTML = 'Our Menu';

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    // Page articles
    pageContent.appendChild(createArticle(coffeImg, 'Our coffee is the best in town.', 'Sweet coffee', true));

    pageContent.appendChild(createArticle(cheeseCakeImg, 'Some tasty cheescake with the topping of your choice', 'Cheescake', false));

    pageContent.appendChild(createArticle(cookiesImg, 'Hand made cookies with bio ingredients', 'Cookies', true));

    const element = document.createElement('div');
    element.appendChild(pageTitle);
    element.appendChild(pageContent);
    element.classList.add('page-element');
    return element;
}