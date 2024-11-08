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
    container.style.backgroundImage = 'url("contactbackground.jpg")';
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

    const musicLink = createMenuItem('Music', 'music.html');
    const contactLink = createMenuItem('Contact', 'contact.html');

    // Append menu items to menu
    menu.appendChild(musicLink);
    menu.appendChild(contactLink);
    

    // Append menu to container
    container.appendChild(menu);
    
    // Create the email form
    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.alignItems = 'center';
    form.style.marginTop = '20px';
    form.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    form.style.padding = '20px';
    form.style.borderRadius = '10px';
    form.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

    // Create the email input field
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Your email';
    emailInput.required = true;
    emailInput.style.marginBottom = '0px';
    emailInput.style.padding = '10px';
    emailInput.style.border = '1px solid #ccc';
    emailInput.style.borderRadius = '5px';
    emailInput.style.width = '300px';

    // Create the message textarea
    const messageTextarea = document.createElement('textarea');
    messageTextarea.placeholder = 'Your message';
    messageTextarea.required = true;
    messageTextarea.style.marginBottom = '10px';
    messageTextarea.style.padding = '10px';
    messageTextarea.style.border = '1px solid #ccc';
    messageTextarea.style.borderRadius = '5px';
    messageTextarea.style.width = '300px';
    messageTextarea.style.height = '100px';

    // Create the submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Send';
    submitButton.style.padding = '10px 20px';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.backgroundColor = '#007BFF';
    submitButton.style.color = 'white';
    submitButton.style.cursor = 'pointer';

    // Append input fields and button to form
    form.appendChild(emailInput);
    form.appendChild(messageTextarea);
    form.appendChild(submitButton);

    // Append form to container
    container.appendChild(form);

    // Add form submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        const message = messageTextarea.value;
        window.location.href = `mailto:yazzysimons@example.com?subject=Contact&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    });
    // Create a function to create social media buttons
    const createSocialButton = (src, alt, url) => {
        const button = document.createElement('button');
        button.style.border = 'none';
        button.style.background = 'none';
        button.style.cursor = 'pointer';
        button.style.marginTop = '30px';

        const logo = document.createElement('img');
        logo.src = src; // Make sure this path is correct
        logo.alt = alt;
        if (alt === 'Spotify') {
            logo.style.width = '180px'; // Larger width for Spotify logo
            logo.style.height = '130px'; // Larger height for Spotify logo
        } else if (alt === 'Instagram') {
            logo.style.width = '120px'; // Slightly smaller width for Instagram logo
            logo.style.height = '85px'; // Slightly smaller height for Instagram logo
        } else if (alt === 'LinkedIn') {
            logo.style.width = '160px'; // Slightly larger width for LinkedIn logo
            logo.style.height = '115px'; // Slightly larger height for LinkedIn logo
        } else {//facebook
            logo.style.width = '145px';
            logo.style.height = '100px';
        }

        button.appendChild(logo);

        button.addEventListener('click', function() {
            window.location.href = url;
        });

        return button;
    };

    // Create social media buttons
    const instagramButton = createSocialButton('IGlogo.png', 'Instagram', 'https://www.instagram.com/yazzysimons');
    const facebookButton = createSocialButton('Facebooklogo.png', 'Facebook', 'https://www.facebook.com/yasmin.simons.58/');
    const spotifyButton = createSocialButton('Spotifylogo.png', 'Spotify', 'https://open.spotify.com/artist/7gnxVCyVrZrWA6AIQxf3Kq?si=7GZJAKluTB6sCy4mEQqqWg');
    const linkedinButton = createSocialButton('LinkedInlogo.png', 'LinkedIn', 'https://www.linkedin.com/in/yazzysimons/');

    // Create a container for social media buttons
    const socialContainer = document.createElement('div');
    socialContainer.style.display = 'flex';
    socialContainer.style.gap = '20px';
    socialContainer.style.marginTop = '20px';

    // Append buttons to social container
    socialContainer.appendChild(instagramButton);
    socialContainer.appendChild(facebookButton);
    socialContainer.appendChild(spotifyButton);
    socialContainer.appendChild(linkedinButton);

    // Append social container to main container
    container.appendChild(socialContainer);

    // Append container to body
    document.body.appendChild(container);
});
