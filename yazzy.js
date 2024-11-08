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
    container.style.backgroundSize = 'cover'; // Change to cover to allow the image to be larger than the screen
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundPosition = 'center'; // Center the image

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
        link.style.fontSize = '1.75rem'; // Slightly increased font size
        link.style.textDecoration = 'none';
        link.style.fontWeight = '300'; // Make the font thinner
        link.style.letterSpacing = '0.07em'; // Add some letter spacing for a modern look
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

    // Create the title
    const title = document.createElement('h1');
    title.innerText = 'Yazzy';
    title.style.fontFamily = 'sans-serif';
    title.style.fontWeight = '300'; // Make the font thinner
    title.style.letterSpacing = '0.07em'; // Add some letter spacing for a modern look
    title.style.borderRadius = '5px'; // Make the title slightly rounder
    title.style.color = 'white';
    title.style.fontSize = '7.5rem'; // Slightly increased font size
    title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';

    // Append title to container
    container.appendChild(title);

    // Append container to body
    document.body.appendChild(container);
});