document.addEventListener('DOMContentLoaded', function () {
    // Utility function to set styles
    const setStyles = (element, styles) => {
        Object.assign(element.style, styles);
    };

    // Set global styles for body and html
    const setGlobalStyles = () => {
        setStyles(document.body, {
            margin: '0',
            padding: '0',
            overflow: 'auto',
        });
        setStyles(document.documentElement, {
            margin: '0',
            padding: '0',
            overflow: 'auto',
        });
    };

    // Create the main container
    const createMainContainer = () => {
        const container = document.createElement('div');
        setStyles(container, {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url("calbackground.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        });
        return container;
    };

    // Create a menu item
    const createMenuItem = (text, href) => {
        const link = document.createElement('a');
        link.href = href;
        link.innerText = text;
        setStyles(link, {
            color: 'white',
            fontFamily: 'sans-serif',
            fontSize: '1.75rem',
            textDecoration: 'none',
            fontWeight: '300',
            letterSpacing: '0.07em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        });
        return link;
    };

    // Create the menu
    const createMenu = () => {
        const menu = document.createElement('div');
        setStyles(menu, {
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '20px',
        });

        const menuItems = [
            { text: 'Home', href: 'yazzy.html' },
            { text: 'Music', href: 'music.html' },
            { text: 'Shows', href: 'calendar.html' },
            { text: 'Contact', href: 'contact.html' },
        ];

        menuItems.forEach(item => {
            menu.appendChild(createMenuItem(item.text, item.href));
        });

        return menu;
    };

    // Create a show item
    const createShowItem = (title, date, time, location) => {
        const listItem = document.createElement('li');
        setStyles(listItem, {
            marginBottom: '17px',
            fontSize: '1.4rem',
            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
            color: 'white',
            fontFamily: 'sans-serif',
            fontWeight: '300',
            letterSpacing: '0.07em',
        });

        listItem.innerText = `${title} | ${date}, ${time} at ${location}`;
        return listItem;
    };

    // Create the "Upcoming Shows" section
    const createShowsSection = () => {
        const showsSection = document.createElement('div');
        setStyles(showsSection, {
            marginTop: '100px',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'sans-serif',
        });

        const showsTitle = document.createElement('h2');
        showsTitle.innerText = 'Upcoming Shows';
        setStyles(showsTitle, {
            textDecoration: 'underline',
            fontSize: '2rem',
            marginBottom: '20px',
            fontFamily: 'sans-serif',
            fontWeight: '300',
            letterSpacing: '0.07em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        });

        const showsList = document.createElement('ul');
        setStyles(showsList, {
            listStyleType: 'none',
            padding: '0',
        });

        const shows = [
            { title: 'Yazzy Duo', date: 'May 6, 2025', time: '7:00 PM', location: 'Salita Cocktail Bar' },
            { title: 'Yazzy Duo', date: 'May 10, 2025', time: '11:00 AM', location: 'TBA' },
            { title: 'Lamont Jazz Small Group', date: 'May 14, 2025', time: '5:00 PM', location: 'the Lamont School of Music, William Recital Salon' },
            { title: 'Lamont Jazz Vocal Groups', date: 'May 27, 2025', time: '6:30 PM', location: 'the Lamont School of Music, William Recital Salon' },
            { title: 'Yazzy Duo', date: 'May 30, 2025', time: '7:00 PM', location: 'TBA' },
            { title: 'Yazzy Duo', date: 'May 31, 2025', time: '6:00 PM', location: 'Little Brazil Restaurant' },
        ];

        shows.forEach(show => {
            showsList.appendChild(createShowItem(show.title, show.date, show.time, show.location));
        });

        showsSection.appendChild(showsTitle);
        showsSection.appendChild(showsList);

        return showsSection;
    };

    // Main execution
    setGlobalStyles();

    const container = createMainContainer();
    container.appendChild(createMenu());
    container.appendChild(createShowsSection());

    document.body.appendChild(container);
});