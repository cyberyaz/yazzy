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
      zIndex: '10',
    });
  
    const menuItems = [
      { text: 'Home', href: 'index.html' },
      { text: 'Music', href: 'music.html' },
      { text: 'Shows', href: 'calendar.html' },
      { text: 'Connect', href: 'contact.html' },
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
  
      // HOVER PREFETCHING:
      link.addEventListener('mouseenter', () => {
        if (!document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prerender';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
        }
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
      }
    `;
    document.head.appendChild(style);
  }
  
  
  export function applyMenuSpacing(target = document.body) {
    const spacer = document.createElement('div');
    spacer.style.height = '80px';
    spacer.style.width = '100%';
    spacer.style.flexShrink = '0';
    target.insertBefore(spacer, target.firstChild);
  }
  