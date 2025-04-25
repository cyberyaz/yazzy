// shared.js
export function applyGlobalStyles() {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.body.style.fontFamily = 'sans-serif';
}

export function createMenu() {
    const menu = document.createElement('div');
    Object.assign(menu.style, {
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        zIndex: '10'
    });

    const menuItems = [
        { text: 'Home', href: 'index.html' },
        { text: 'Music', href: 'music.html' },
        { text: 'Shows', href: 'calendar.html' },
        { text: 'Contact', href: 'contact.html' },
    ];

    menuItems.forEach(({ text, href }) => {
        const link = document.createElement('a');
        link.href = href;
        link.innerText = text;
        Object.assign(link.style, {
            color: 'white',
            fontSize: '1.5rem',
            textDecoration: 'none',
            fontWeight: '300',
            letterSpacing: '0.07em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        });
        menu.appendChild(link);
    });

    return menu;
}

export function injectResponsiveStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        @media (max-width: 768px) {
            a {
                font-size: 1.2rem;
            }
        }
        @media (max-width: 480px) {
            a {
                font-size: 1rem;
            }
            div[style*="gap: 20px"] {
                flex-direction: column;
                gap: 10px;
            }
        }
    `;
    
    document.head.appendChild(style);

    
    
}
