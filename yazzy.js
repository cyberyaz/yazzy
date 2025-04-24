document.addEventListener('DOMContentLoaded', function () {
    // Utility function to create and style elements
    const createElement = (tag, styles = {}, attributes = {}, textContent = '') => {
        const element = document.createElement(tag);
        Object.assign(element.style, styles);
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        if (textContent) element.textContent = textContent;
        return element;
    };

    // Set global styles
    const setGlobalStyles = () => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    };

    // Create the main container
    const createMainContainer = () => {
        return createElement('div', {
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
        });
    };

    // Create the menu
    const createMenu = () => {
        const menu = createElement('div', {
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

        menuItems.forEach(({ text, href }) => {
            const link = createElement(
                'a',
                {
                    color: 'white',
                    fontFamily: 'sans-serif',
                    fontSize: '1.75rem',
                    textDecoration: 'none',
                    fontWeight: '300',
                    letterSpacing: '0.07em',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                },
                { href },
                text
            );
            menu.appendChild(link);
        });

        return menu;
    };

    // Create the title
    const createTitle = () => {
        return createElement(
            'h1',
            {
                fontFamily: 'sans-serif',
                fontWeight: '300',
                letterSpacing: '0.07em',
                borderRadius: '5px',
                color: 'white',
                fontSize: '7.5rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                textAlign: 'center',
            },
            {},
            'Yazzy'
        );
    };

    // Create the paragraph
    const createParagraph = () => {
        return createElement(
            'p',
            {
                fontFamily: 'sans-serif',
                fontWeight: '300',
                color: 'white',
                fontSize: '1.5rem',
                textAlign: 'center',
                marginTop: '30px',
                textShadow: '1px 1px 8px rgba(0, 0, 0, 0.5)',
                maxWidth: '600px',
                padding: '0 20px',
            },
            {},
            'Yazzy Simons is a vocalist and lyricist from the San Francisco Bay Area, now based in Denver. They focus on Brazilian jazz, drawing inspiration from bossa nova, samba, and MPB.\nYazzy is currently studying vocal jazz at the University of Denver under the guidance of Marion Powers, and performs around town with their Brazilian jazz duo, alongside guitarist Kylan Fermin.'
        );
    };

    // Add responsive styles
    const addResponsiveStyles = () => {
        const style = createElement('style');
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
    };

    // Initialize the page
    const initializePage = () => {
        setGlobalStyles();
        const container = createMainContainer();
        container.appendChild(createMenu());
        container.appendChild(createTitle());
        container.appendChild(createParagraph());
        document.body.appendChild(container);
        addResponsiveStyles();
    };

    initializePage();
});