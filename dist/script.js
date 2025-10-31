/* JavaScript for the clock and video rotation */

// List of videos in the videos folder - add more video filenames here
var videos = [
  'video1.MP4'
  // Add more videos here, e.g.:
  // 'video2.MP4',
  // 'video3.MP4'
];

var currentVideoIndex = 0;
var videoElement;

// Function to load and play the next video
function loadNextVideo() {
  if (!videoElement || videos.length === 0) {
    return;
  }
  
  var videoPath = './videos/' + videos[currentVideoIndex];
  videoElement.src = videoPath;
  videoElement.load();
  videoElement.play().catch(function(error) {
    console.error('Error playing video:', error);
  });
  
  // Move to next video (loop back to start)
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
}

// Initialize video rotation when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  videoElement = document.getElementById('bg-video');
  
  if (!videoElement) {
    console.error('Video element not found');
    return;
  }
  
  // When video ends, load the next one
  videoElement.addEventListener('ended', function() {
    loadNextVideo();
  });
  
  // Load the first video
  loadNextVideo();
});

// Clock function
function updateTime() {
  var dateInfo = new Date();

  // get computer time
  var hr,
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    ampm = (dateInfo.getHours() > 12) ? "PM" : "AM";

  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  var currentTime = hr + ":" + _min;

  // print time
  document.querySelector(".hm").innerHTML = currentTime;
  document.querySelector(".ampm").innerHTML = ampm;
};

// print time and date once, then update them every second
updateTime();
setInterval(function() {
  updateTime()
}, 1000);