import {
    applyGlobalStyles,
    createMenu,
    injectResponsiveStyles,
    applyMenuSpacing
  } from './shared.js';
  
  document.addEventListener('DOMContentLoaded', function () {
    applyGlobalStyles();
    injectResponsiveStyles();
  
    const container = document.createElement('div');
    Object.assign(container.style, {
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundImage: 'url("yazzybackground.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      boxSizing: 'border-box',
      textAlign: 'center',
    });
  
    container.appendChild(createMenu());
    applyMenuSpacing(container);
  
    const title = document.createElement('h1');
    title.textContent = 'Yazzy';
    Object.assign(title.style, {
      fontSize: '7.5rem',
      fontWeight: '300',
      letterSpacing: '0.07em',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      margin: '0',
      padding: '0 20px',
    });
    container.appendChild(title);
  
    const bio = document.createElement('p');
    bio.textContent = `Yazzy Simons is a vocalist and lyricist from the San Francisco Bay Area, now based in Denver. They focus on Brazilian jazz, drawing inspiration from bossa nova, samba, and MPB. Yazzy is currently studying vocal jazz at the University of Denver under the guidance of Marion Powers, and performs around town with their Brazilian jazz duo, alongside guitarist Kylan Fermin.`;
    Object.assign(bio.style, {
      fontSize: '1.5rem',
      fontWeight: '300',
      color: 'white',
      maxWidth: '700px',
      marginTop: '30px',
      padding: '0 20px',
      textShadow: '1px 1px 8px rgba(0, 0, 0, 0.5)',
    });
    container.appendChild(bio);
  
    document.body.appendChild(container);
  });
  