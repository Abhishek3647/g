function loadPlaylistInCard() {
  var videoContainer = document.getElementById('videoContainer');
  
  // Check if the player has already been embedded, if not, embed it
  if (videoContainer.innerHTML === '') {
    var iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = "https://www.youtube.com/embed/videoseries?list=PL9xgyIX5VoqGB34Ly3v9K0IIv_sgowJWw"; // Playlist ID
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowfullscreen = true;
    
    videoContainer.appendChild(iframe);

    // Fade in effect
    videoContainer.classList.add('loaded');
  }
}
