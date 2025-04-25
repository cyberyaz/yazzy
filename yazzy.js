import { applyGlobalStyles, createMenu, injectResponsiveStyles } from './shared.js';

document.addEventListener('DOMContentLoaded', function () {
    applyGlobalStyles();
    injectResponsiveStyles();

    // Create main background container
    const container = document.createElement('div');
    Object.assign(container.style, {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("yazzybackground.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        textAlign: 'center',
        padding: '0 20px',
        boxSizing: 'border-box'
    });

    // Add menu
    container.appendChild(createMenu());

    // Title: "Yazzy"
    const title = document.createElement('h1');
    title.textContent = 'Yazzy';
    Object.assign(title.style, {
        fontSize: '7.5rem',
        fontWeight: '300',
        letterSpacing: '0.07em',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        margin: '0',
    });
    container.appendChild(title);

    // Bio paragraph
    const bio = document.createElement('p');
    bio.textContent = `Yazzy Simons is a vocalist and composer from the San Francisco Bay Area, now based in Denver. They specialize in Bossa Nova, Swing and modern R&B. Yazzy is currently perusing vocal jazz studies at the University of Denver under the guidance of Marion Powers, and performs around Denver with their Brazilian jazz duo, alongside guitarist Kylan Fermin. The pair share a love for the music of Jobim, João Gilberto, and Elis Regina, and bring their own take to both familiar songs and lesser-known gems, focusing on exploring texture and form. The duo is currently recording their debut release, set to be available later this year.`;
    Object.assign(bio.style, {
        fontSize: '1.5rem',
        fontWeight: '300',
        color: 'white',
        maxWidth: '700px',
        marginTop: '30px',
        textShadow: '1px 1px 8px rgba(0, 0, 0, 0.5)',
    });
    container.appendChild(bio);

    document.body.appendChild(container);
});
