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
      backgroundImage: 'url("musicbackground.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      boxSizing: 'border-box',
      paddingBottom: '40px',
    });
  
    container.appendChild(createMenu());
    applyMenuSpacing(container);
  
    const embedWrapper = document.createElement('div');
    Object.assign(embedWrapper.style, {
      width: '90%',
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
      marginTop: '30px',
    });
  
    const createYouTubeEmbed = (src, aspect = '16 / 9') => {
      const iframe = document.createElement('iframe');
      Object.assign(iframe.style, {
        width: '100%',
        aspectRatio: aspect,
      });
      Object.assign(iframe, {
        src,
        title: 'YouTube video player',
        frameBorder: '0',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        referrerPolicy: 'strict-origin-when-cross-origin',
        allowFullscreen: true,
      });
      return iframe;
    };
  
    const createSpotifyEmbed = (src) => {
      const iframe = document.createElement('iframe');
      Object.assign(iframe.style, {
        width: '100%',
        height: '152px',
        borderRadius: '12px',
      });
      Object.assign(iframe, {
        src,
        frameBorder: '0',
        allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
        loading: 'lazy',
      });
      return iframe;
    };
  
    const smallEmbed = createYouTubeEmbed('https://www.youtube.com/embed/TKN8Zz_HsNo?si=gn4p2FKiMHB496je', '9 / 16');
    smallEmbed.style.width = '35%'; // Scale down the width to 70% of the parent container
    embedWrapper.appendChild(smallEmbed);
    embedWrapper.appendChild(createYouTubeEmbed('https://www.youtube.com/embed/w0V8KK_Finw?si=826FKh3aHdBqQX8R'));
    embedWrapper.appendChild(createYouTubeEmbed('https://www.youtube.com/embed/gIZahSo4Vik?si=WRiOpCpBBzxQ4m9h'));
  
    embedWrapper.appendChild(createSpotifyEmbed('https://open.spotify.com/embed/track/4jrcwOHr4UdIEpawTpCJRB?utm_source=generator'));
    embedWrapper.appendChild(createSpotifyEmbed('https://open.spotify.com/embed/track/6Ma6EVrctnFLHFUhyfYSLj?utm_source=generator'));
  
    container.appendChild(embedWrapper);
    document.body.appendChild(container);
  });
  