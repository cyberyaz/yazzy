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
    backgroundImage: 'url("contactbackground.JPG")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    paddingBottom: '40px',
  });

  container.appendChild(createMenu());
  applyMenuSpacing(container);

  // SOCIAL ICONS
  const socials = [
    { src: 'IGlogo.png', alt: 'Instagram', url: 'https://www.instagram.com/yazzysimons', scale: 1 },
    { src: 'facebookLogo.png', alt: 'Facebook', url: 'https://www.facebook.com/yasmin.simons.58/', scale: 1.1},
    { src: 'spotifyLogo.png', alt: 'Spotify', url: 'https://open.spotify.com/artist/7gnxVCyVrZrWA6AIQxf3Kq?si=7GZJAKluTB6sCy4mEQqqWg', scale: 1.4 },
    { src: 'linkedinLogo.png', alt: 'LinkedIn', url: 'https://www.linkedin.com/in/yazzysimons/', scale: 1.2 },
  ];

  const socialContainer = document.createElement('div');
  Object.assign(socialContainer.style, {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    overflowX: 'auto',
    padding: '10px',
  });

  socials.forEach(({ src, alt, url, scale }) => {
    const button = document.createElement('button');
    Object.assign(button.style, {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '0',
    });

    const wrapper = document.createElement('div');
    Object.assign(wrapper.style, {
      width: '70px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      boxSizing: 'border-box',
      flexShrink: '0',
    });

    const img = document.createElement('img');
    Object.assign(img, {
      src,
      alt,
    });
    Object.assign(img.style, {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      transform: `scale(${scale})`,
    });

    button.addEventListener('click', () => window.open(url, '_blank'));
    wrapper.appendChild(img);
    button.appendChild(wrapper);
    socialContainer.appendChild(button);
  });

  container.appendChild(socialContainer); // <-- MOVED UP

  // FORM
  const form = document.createElement('form');
  Object.assign(form.style, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    width: '90%',
    maxWidth: '400px',
    marginTop: '30px',
  });

  const emailInput = document.createElement('input');
  Object.assign(emailInput, {
    type: 'email',
    placeholder: 'Your email',
    required: true,
  });
  Object.assign(emailInput.style, {
    width: '100%',
    marginBottom: '12px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
  });

  const messageTextarea = document.createElement('textarea');
  Object.assign(messageTextarea, {
    placeholder: 'Your message',
    required: true,
  });
  Object.assign(messageTextarea.style, {
    width: '100%',
    height: '100px',
    marginBottom: '12px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Send';
  Object.assign(submitButton.style, {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#C19A6B',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
  });

  form.append(emailInput, messageTextarea, submitButton);
  container.appendChild(form); // <-- FORM NOW COMES AFTER SOCIALS

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInput.value;
    const message = messageTextarea.value;
    window.location.href = `mailto:yazzysmusic@gmail.com?subject=Yazzy%20Website%20Contact%20Message&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
  });

  document.body.appendChild(container);
});
