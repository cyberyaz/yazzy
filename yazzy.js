document.addEventListener('DOMContentLoaded', function() {
    // Set body and html margin and padding to 0
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    // Create the main container
    const container = document.createElement('div');
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.backgroundImage = 'url("yazzybackground.jpg")';
    container.style.backgroundSize = 'cover';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundPosition = 'center';

    // Create the menu
    const menu = document.createElement('div');
    menu.style.position = 'absolute';
    menu.style.top = '20px';
    menu.style.left = '50%';
    menu.style.transform = 'translateX(-50%)';
    menu.style.display = 'flex';
    menu.style.gap = '20px';

    // Create menu items
    const createMenuItem = (text, href) => {
        const link = document.createElement('a');
        link.href = href;
        link.innerText = text;
        link.style.color = 'white';
        link.style.fontFamily = 'sans-serif';
        link.style.fontSize = '1.75rem';
        link.style.textDecoration = 'none';
        link.style.fontWeight = '300';
        link.style.letterSpacing = '0.07em';
        link.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        return link;
    };

    const homeLink = createMenuItem('Home', 'yazzy.html');
    const musicLink = createMenuItem('Music', 'music.html');
    const calLink = createMenuItem('Shows', 'calendar.html');
    const contactLink = createMenuItem('Contact', 'contact.html');

    // Append menu items to menu
    menu.appendChild(homeLink);
    menu.appendChild(musicLink);
    menu.appendChild(calLink);
    menu.appendChild(contactLink);

    // Append menu to container
    container.appendChild(menu);

    // Create the title
    const title = document.createElement('h1');
    title.innerText = 'Yazzy';
    title.style.fontFamily = 'sans-serif';
    title.style.fontWeight = '300';
    title.style.letterSpacing = '0.07em';
    title.style.borderRadius = '5px';
    title.style.color = 'white';
    title.style.fontSize = '7.5rem';
    title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    title.style.textAlign = 'center';

    // Append title to container
    container.appendChild(title);

    // Create the paragraph
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Yazzy Simons is a vocalist and lyricist from the San Francisco Bay Area, now based in Denver. They focus on Brazilian jazz, drawing inspiration from bossa nova, samba, and MPB.\nYazzy is currently studying vocal jazz at the University of Denver under the guidance of Marion Powers, and performs around town with their Brazilian jazz duo, alongside guitarist Kylan Fermin.';
    paragraph.style.fontFamily = 'sans-serif';
    paragraph.style.fontWeight = '300';
    paragraph.style.color = 'white';
    paragraph.style.fontSize = '1.5rem';
    paragraph.style.textAlign = 'center';
    paragraph.style.marginTop = '30px';
    paragraph.style.textShadow = '1px 1px 8px rgba(0, 0, 0, 0.5)';
    paragraph.style.maxWidth = '600px';
    paragraph.style.padding = '0 20px';
    container.appendChild(paragraph);

    // Append container to body
    document.body.appendChild(container);

    // Add responsive styles
    const style = document.createElement('style');
    style.innerHTML = `
        @media (max-width: 768px) {
            h1 {
                font-size: 5rem;
            }
            p {
                font-size: 1.2rem;
            }
            a {
                font-size: 1.5rem;
            }
        }
        @media (max-width: 480px) {
            h1 {
                font-size: 3.5rem;
            }
            p {
                font-size: 1rem;
            }
            a {
                font-size: 1.2rem;
            }
            div[style*="gap: 20px"] {
                flex-direction: column;
                gap: 10px;
            }
        }
    `;
    document.head.appendChild(style);
});