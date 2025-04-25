import { applyGlobalStyles, createMenu, injectResponsiveStyles } from './shared.js';

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
        backgroundImage: 'url("contactbackground.JPG")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        paddingTop: '100px',
        boxSizing: 'border-box',
    });

    container.appendChild(createMenu());

    // FORM
    const form = document.createElement('form');
    Object.assign(form.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
        backgroundColor: '#007BFF',
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
    });

    form.append(emailInput, messageTextarea, submitButton);
    container.appendChild(form);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = emailInput.value;
        const message = messageTextarea.value;
        window.location.href = `mailto:yazzysmusic@gmail.com?subject=Yazzy%20Website%20Contact%20Message&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    });

    // SOCIALS
    const socials = [
        { src: 'IGlogo.png', alt: 'Instagram', url: 'https://www.instagram.com/yazzysimons' },
        { src: 'facebookLogo.png', alt: 'Facebook', url: 'https://www.facebook.com/yasmin.simons.58/' },
        { src: 'spotifyLogo.png', alt: 'Spotify', url: 'https://open.spotify.com/artist/7gnxVCyVrZrWA6AIQxf3Kq?si=7GZJAKluTB6sCy4mEQqqWg' },
        { src: 'linkedinLogo.png', alt: 'LinkedIn', url: 'https://www.linkedin.com/in/yazzysimons/' },
    ];

    const socialContainer = document.createElement('div');
    Object.assign(socialContainer.style, {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '30px',
    });

    socials.forEach(({ src, alt, url }) => {
        const button = document.createElement('button');
        Object.assign(button.style, {
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            padding: '0',
        });

        const img = document.createElement('img');
        Object.assign(img, {
            src,
            alt,
        });

        // Base logo styling
        Object.assign(img.style, {
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            display: 'block',
            borderRadius: '10px',
            padding: '8px',
            boxSizing: 'border-box',
        });

        // Apply a scale boost to the Spotify logo
        if (alt.toLowerCase() === 'spotify') {
            img.style.transform = 'scale(1.787)';
        }
        if (alt.toLowerCase() === 'linkedin') {
            img.style.transform = 'scale(1.58)';
        }
        if (alt.toLowerCase() === 'instagram') {
            img.style.transform = 'scale(1.18';
        }
        if (alt.toLowerCase() === 'facebook') {
            img.style.transform = 'scale(1.36)';
        }


        button.addEventListener('click', () => window.open(url, '_blank'));
        button.appendChild(img);
        socialContainer.appendChild(button);
    });

    container.appendChild(socialContainer);
    document.body.appendChild(container);
});
