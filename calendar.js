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
    backgroundImage: 'url("calbackground.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingBottom: '40px',
    boxSizing: 'border-box',
  });

  container.appendChild(createMenu());
  applyMenuSpacing(container);

  const showsTitle = document.createElement('h2');
  showsTitle.textContent = 'Upcoming Shows';
  Object.assign(showsTitle.style, {
    color: 'white',
    fontSize: '2rem',
    fontWeight: '300',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textDecoration: 'underline',
    marginBottom: '20px',
    letterSpacing: '0.07em',
    textAlign: 'center',
  });
  container.appendChild(showsTitle);

  const showsList = document.createElement('ul');
  Object.assign(showsList.style, {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: '300',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    letterSpacing: '0.07em',
    maxWidth: '90%',
    textAlign: 'center',
  });

  const shows = [
    { title: 'Yazzy Duo', date: 'May 6, 2025', time: '6:00 PM', location: 'Salita Cocktail Bar' },
    { title: 'Yazzy Duo', date: 'May 11, 2025', time: '11:00 AM', location: 'Horsetooth Tavern - Fort Collins' }, 
    { title: 'Lamont Jazz Small Group', date: 'May 14, 2025', time: '5:00 PM', location: 'Lamont School of Music, Williams Recital Salon' },
    { title: 'Lamont Jazz Vocal Groups', date: 'May 27, 2025', time: '6:30 PM', location: 'Lamont School of Music, Williams Recital Salon' },
    { title: 'Yazzy Duo', date: 'May 30, 2025', time: '7:00 PM', location: 'Cheluna Brewing Company' },
    { title: 'Yazzy Duo', date: 'May 31, 2025', time: '6:00 PM', location: 'Little Brazil Restaurant' },
    { title: 'Yazzy Duo', date: 'May 31, 2025', time: '11:30 PM', location: 'Dazzle Denver' },
    { title: 'Yazzy Duo', date: 'June 3, 2025', time: '6:00 PM', location: 'Salita Cocktail Bar' },
    { title: 'Yazzy Duo', date: 'June 17, 2025', time: '6:00 PM', location: 'Rosetta Hall - Boulder' },
    { title: 'Yazzy Duo', date: 'July 1, 2025', time: '6:00 PM', location: 'Salita Cocktail Bar' },
    { title: 'Yazzy Duo', date: 'August 5, 2025', time: '6:00 PM', location: 'Salita Cocktail Bar' },
  ];

  shows.forEach(({ title, date, time, location }) => {
    const item = document.createElement('li');
    const venue = location || 'TBA';
    item.textContent = `${title} | ${date}, ${time} at ${venue}`;
    item.style.marginBottom = '40px';
    
    // Make the item slightly transparent if location is missing
    if (!location) {
      item.style.opacity = '0.6';
    }

    showsList.appendChild(item);
  });

  container.appendChild(showsList);
  document.body.appendChild(container);
});
