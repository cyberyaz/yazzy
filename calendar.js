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
    container.style.backgroundImage = 'url("calbackground.jpg")';
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

    const homeLink = createMenuItem('Home', 'yazzy.html')
    const musicLink = createMenuItem('Music', 'music.html');
    const calLink = createMenuItem('Calendar','calendar.html')
    const contactLink = createMenuItem('Contact', 'contact.html');

    // Append menu items to menu
    menu.appendChild(homeLink)
    menu.appendChild(musicLink);
    menu.appendChild(calLink)
    menu.appendChild(contactLink);

    // Append menu to container
    container.appendChild(menu);
    // Create the "Upcoming Shows" section
    const showsSection = document.createElement('div');
    showsSection.style.marginTop = '100px';
    showsSection.style.textAlign = 'center';
    showsSection.style.color = 'white';
    showsSection.style.fontFamily = 'sans-serif';

    // Create the title
    const showsTitle = document.createElement('h2');
    showsTitle.innerText = 'Upcoming Shows';
    showsTitle.style.textDecoration = 'underline';
    showsTitle.style.fontSize = '2rem';
    showsTitle.style.marginBottom = '20px';
    showsSection.appendChild(showsTitle);

    // Create the list of shows
    const showsList = document.createElement('ul');
    showsList.style.listStyleType = 'none';
    showsList.style.padding = '0';

    // Function to create a show item
    const createShowItem = (title, date, time, location) => {
        const listItem = document.createElement('li');
        listItem.style.marginBottom = '15px';
        listItem.style.fontSize = '1.25rem';
        listItem.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.5)';

        const showText = `${title} - ${date} at ${time}, ${location}`;
        listItem.innerText = showText;

        return listItem;
    };

    // Add show items
    showsList.appendChild(createShowItem('Bossa Duo', 'May 6, 2025', '7:00 PM', 'Denver'));
    showsList.appendChild(createShowItem('Lamont Jazz Small Group', 'May 14, 2025', '5:00 PM', 'Lamont School of Music, William Recital Salon'));
    showsList.appendChild(createShowItem('Lamont Jazz Vocal Groups', 'May 27, 2025', '6:30 PM', 'Lamont School of Music, William Recital Salon'));

    // Append the list to the section
    showsSection.appendChild(showsList);

    // Append the "Upcoming Shows" section to the container
    container.appendChild(showsSection);

    document.body.appendChild(container);
});