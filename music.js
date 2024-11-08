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

    // Create the YouTube embed container
    const youtubeEmbedContainer = document.createElement('div');
    youtubeEmbedContainer.style.position = 'absolute';
    youtubeEmbedContainer.style.top = '60%'; // Adjusted the position up by 15%
    youtubeEmbedContainer.style.width = '10%'; // Make the container smaller
    youtubeEmbedContainer.style.display = 'flex';
    youtubeEmbedContainer.style.flexDirection = 'column';
    youtubeEmbedContainer.style.alignItems = 'center';
    youtubeEmbedContainer.style.gap = '20px';

    // Create the YouTube iframe
    const youtubeIframe = document.createElement('iframe');
    youtubeIframe.width = '370'; // Adjust the width as needed
    youtubeIframe.height = '250.5'; // Adjust the height as needed
    youtubeIframe.src = 'https://www.youtube.com/embed/w0V8KK_Finw?si=826FKh3aHdBqQX8R';
    youtubeIframe.title = 'YouTube video player';
    youtubeIframe.frameBorder = '0';
    youtubeIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    youtubeIframe.referrerPolicy = 'strict-origin-when-cross-origin';
    youtubeIframe.allowFullscreen = true;

    // Append YouTube iframe to its container
    youtubeEmbedContainer.appendChild(youtubeIframe);

    // Create the second YouTube iframe
    const youtubeIframe2 = document.createElement('iframe');
    youtubeIframe2.width = '370'; // Adjust the width to match the first iframe
    youtubeIframe2.height = '250.5'; // Adjust the height to match the first iframe
    youtubeIframe2.src = 'https://www.youtube.com/embed/gIZahSo4Vik?si=WRiOpCpBBzxQ4m9h';
    youtubeIframe2.title = 'YouTube video player';
    youtubeIframe2.frameBorder = '0';
    youtubeIframe2.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    youtubeIframe2.referrerPolicy = 'strict-origin-when-cross-origin';
    youtubeIframe2.allowFullscreen = true;
    youtubeIframe2.style.marginBottom = '20px'; // Add margin below the second iframe

    // Append the second YouTube iframe to its container
    youtubeEmbedContainer.appendChild(youtubeIframe2);

    // Append YouTube embed container to the main container
    container.appendChild(youtubeEmbedContainer);
    container.style.width = '100vw';
    container.style.height = '150vh';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.backgroundImage = 'url("musicbackground.jpg")';
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
    title.style.fontFamily = 'sans-serif';
    title.style.fontWeight = '300'; // Make the font thinner
    title.style.letterSpacing = '0.07em'; // Add some letter spacing for a modern look
    title.style.borderRadius = '5px'; // Make the title slightly rounder
    title.style.color = 'white';
    title.style.fontSize = '7.5rem'; // Slightly increased font size
    title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';

    // Append title to container
    container.appendChild(title);

    // Create the Spotify embed container
    const spotifyEmbedContainer = document.createElement('div');
    spotifyEmbedContainer.style.position = 'absolute';
    spotifyEmbedContainer.style.top = '18%'; // Adjusted the position up by 15%
    spotifyEmbedContainer.style.width = '100%';
    spotifyEmbedContainer.style.display = 'flex';
    spotifyEmbedContainer.style.flexDirection = 'column';
    spotifyEmbedContainer.style.alignItems = 'center';
    spotifyEmbedContainer.style.gap = '20px';

    // Create the first Spotify iframe
    const spotifyIframe1 = document.createElement('iframe');
    spotifyIframe1.style.borderRadius = '12px';
    spotifyIframe1.src = 'https://open.spotify.com/embed/track/4jrcwOHr4UdIEpawTpCJRB?utm_source=generator';
    spotifyIframe1.width = '25%';
    spotifyIframe1.height = '152';
    spotifyIframe1.frameBorder = '0';
    spotifyIframe1.allowFullscreen = true;
    spotifyIframe1.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    spotifyIframe1.loading = 'lazy';

    // Create the second Spotify iframe
    const spotifyIframe2 = document.createElement('iframe');
    spotifyIframe2.style.borderRadius = '12px';
    spotifyIframe2.src = 'https://open.spotify.com/embed/track/6Ma6EVrctnFLHFUhyfYSLj?utm_source=generator';
    spotifyIframe2.width = '25%';
    spotifyIframe2.height = '152';
    spotifyIframe2.frameBorder = '0';
    spotifyIframe2.allowFullscreen = true;
    spotifyIframe2.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    spotifyIframe2.loading = 'lazy';

    // Append Spotify iframes to their container
    spotifyEmbedContainer.appendChild(spotifyIframe1);
    spotifyEmbedContainer.appendChild(spotifyIframe2);

    // Append Spotify embed container to the main container
    container.appendChild(spotifyEmbedContainer);

    // Append container to body
    document.body.appendChild(container);
});