'use strict';

const videoContainer = document.getElementById('homeVideoContainer');
const homeContent = document.getElementById('homeContent');
const arrow = document.getElementById('arrow');

const homeVideo = document.getElementById('homeVideo');
const homeVideoSource = document.getElementById('homeVideoSource');

const playButton = document.getElementById('playButton');
const chaptersButton = document.getElementById('chaptersButton');
const bonusButton = document.getElementById('bonusButton');

let playVideo = (container,video,source, asset) => {
  gsap.to(container, {
    duration: 1,
    borderBottomRightRadius: 0, 
    height: "100vh",
    width: "100vw",
    borderBottom: "0",
    borderRight: "0",
  });

  gsap.to(homeContent, {
    duration: 1,
    autoAlpha: 0,
    width: 0,
  });

  gsap.to(video, {
    duration: 1,
    opacity: 0,
  }).then(() => {
    setTimeout(() => {
      video.style.objectFit = "contain";
      source.src = asset;
      video.load();
      video.style.width = "80vw";
      video.style.height = "80vh";
      video.play();
      video.style.opacity = 1;
      
      gsap.to(container, {
        duration: 0.5,
        backgroundColor: "#EEC707",
      }).delay(1);

      gsap.to(arrow, {
        duration: 0.5,
        opacity: 1,
      }).delay(1);

    }, 500);
  });
}

arrow.addEventListener('click', () => {
  gsap.to(videoContainer, {
    duration: 1,
    borderBottomRightRadius: "800px",
    height: "99vh",
    width: "65vw",
    borderBottom: "5px solid #EEC707",
    borderRight: "35px solid #EEC707",
    backgroundColor: "#000",
  });

  gsap.to(homeContent, {
    duration: 1,
    autoAlpha: 1,
    width: "35vw",
  });

  gsap.to(homeVideo, {
    duration: 1,
    opacity: 0,
  }).then(() => {
    homeVideo.style.objectFit = "cover";
    homeVideoSource.src = "./assets/noir_BG.mp4";
    homeVideo.load();
    homeVideo.controls = false;
    homeVideo.style.width = "100vw";
    homeVideo.style.height = "100vh";
    homeVideo.style.opacity = 1;

    gsap.to(arrow, {
      duration: 0.5,
      opacity: 0,
    })

  });
});

playButton.addEventListener('click', () => {
  playVideo(videoContainer, homeVideo, homeVideoSource, "./assets/play.mp4");
});

bonusButton.addEventListener('click', () => {
  playVideo(videoContainer, homeVideo, homeVideoSource, "./assets/bonus.mp4");
});