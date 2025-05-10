document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('LTMepkSyKB00m6D14');

  const renderVideos = () => {
    const videoWrapper = document.getElementById('videoWrapper');
    const videos = [
      'https://www.youtube.com/embed/TKN8Zz_HsNo',
      'https://www.youtube.com/embed/w0V8KK_Finw',
      'https://www.youtube.com/embed/gIZahSo4Vik'
    ];
    videos.forEach(src => {
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.allowFullscreen = true;
      videoWrapper.appendChild(iframe);
    });
  };

  const renderSocialLinks = () => {
    const socials = document.getElementById('socialLinks');
    const links = [
      ['IGlogo.png', 'Instagram', 'https://www.instagram.com/yazzysimons'],
      ['facebookLogo.png', 'Facebook', 'https://www.facebook.com/yasmin.simons.58/'],
      ['spotifyLogo.png', 'Spotify', 'https://open.spotify.com/artist/7gnxVCyVrZrWA6AIQxf3Kq'],
      ['linkedinLogo.png', 'LinkedIn', 'https://www.linkedin.com/in/yazzysimons/']
    ];

    links.forEach(([src, alt, url]) => {
      const btn = document.createElement('button');
      btn.onclick = () => window.open(url, '_blank');
      btn.className = 'icon-button';

      const img = document.createElement('img');
      img.src = src;
      img.alt = alt;
      img.className = 'social-icon';
      img.classList.add(`custom-${alt.toLowerCase()}`);

      btn.appendChild(img);
      socials.appendChild(btn);
    });
  };

  const setupFormHandler = () => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      emailjs.sendForm('service_s7zzc37', 'template_2bog4a9', form)
        .then(() => {
          status.textContent = 'Message sent successfully!';
          form.reset();
        })
        .catch(() => {
          status.textContent = 'Failed to send message. Try again.';
        });
    });
  };

  const moveBioToMobileSection = () => {
    const bioWrapper = document.querySelector('.bio-wrapper');
    const home = document.getElementById('home');
    const bio = document.getElementById('bio');
    const isMobile = window.innerWidth <= 768;

    if (isMobile && home.contains(bioWrapper)) {
      bio.appendChild(bioWrapper);
    } else if (!isMobile && bio.contains(bioWrapper)) {
      home.appendChild(bioWrapper);
    }
  };

  renderVideos();
  renderSocialLinks();
  setupFormHandler();
  moveBioToMobileSection();
  window.addEventListener('resize', moveBioToMobileSection);
});
