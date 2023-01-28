import gitLogo from './images/small/github-white.png';
import odinLogo from './images/small/odin-lined.png';
export default function getFooter() {
    const gitlogo = document.createElement('img');
    gitlogo.src = gitLogo;
    gitlogo.height = "30";

    const container = document.createElement('div');

    
    
    const gitText = document.createElement('p');
    
    gitText.innerText = 'Created by Erwann Suard as studying material';
    gitText.style.color = "white";
    gitText.style.fontSize = "1.5rem";
    gitText.style.fontStyle = "italic";


    const gitLink = document.createElement('a');
    gitLink.href = 'https://github.com/eSuardOdin/'
    gitLink.appendChild(gitlogo);

    const git = document.createElement('div');
    git.style.display = "flex";
    git.style.alignItems = "center";
    git.style.gap = "10px"; 

    git.appendChild(gitText);
    git.appendChild(gitLink);

    
    const odinlogo = document.createElement('img');
    odinlogo.src = odinLogo;
    odinlogo.height = "40";

    const odinLink = document.createElement('a');
    odinLink.href = 'https://www.theodinproject.com/'
    odinLink.appendChild(odinlogo);
    
    const odintext = document.createElement('div');
    odintext.innerText = `This project is a work for The Odin Project`;
    
    odintext.style.color = "white";
    odintext.style.fontSize = "1.5rem";
    odintext.style.fontStyle = "italic";
    
    const odin = document.createElement('div');
    odin.style.display = "flex";
    odin.style.alignItems = "center";
    odin.style.gap = "10px"; 

    odin.appendChild(odinLink);
    odin.appendChild(odintext);


    const footer = document.createElement('div');
    footer.style.backgroundColor = "rgba(12, 14, 9, 0.9)";
    
    container.appendChild(git);
    container.appendChild(odin);
    
    container.style.display = 'flex';
    container.style.alignItems = 'flex-end';
    container.style.justifyContent = 'space-around';
    
    footer.appendChild(container);

    return footer;
}