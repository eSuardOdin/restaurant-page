export default function createArticle(src, txt, title, isRight) {
    const articleContainer = document.createElement('div');
    const articleTextContainer = document.createElement('div');
    const articleImg = document.createElement('img');
    const articleTitle = document.createElement('p');
    const articleText = document.createElement('p');

    const posImg = isRight ? 'article-image-right' : 'article-image-left';
    const posTxt = isRight ? 'article-text-left' : 'article-text-right';
    
    // Elements classes
    articleImg.classList.add(posImg);
    articleTextContainer.classList.add(posTxt);
    articleTextContainer.classList.add('article-text-container');
    articleTitle.classList.add('article-title');
    articleContainer.classList.add('article-container');
    
    // Elements content
    articleImg.src = src;
    articleImg.height = "300";
    // -------- NEED TO RESIZE IMG ----------
    articleText.innerText = txt;
    articleTitle.innerText = title;

    // Append Child
    if (isRight) {
        articleTextContainer.appendChild(articleTitle);
        articleTextContainer.appendChild(articleText);
        articleContainer.appendChild(articleTextContainer);
        articleContainer.appendChild(articleImg);
    } else {
        articleContainer.appendChild(articleImg);
        articleTextContainer.appendChild(articleTitle);
        articleTextContainer.appendChild(articleText);
        articleContainer.appendChild(articleTextContainer);
    }
    

    return articleContainer;
}