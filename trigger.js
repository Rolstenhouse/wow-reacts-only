document.addEventListener('DOMContentLoaded', function () {
  //This is where you add EventListeners
});

//Name of callback function to trigger when clicked. No popup necessary.
chrome.pageAction.onClicked.addListener(iterateThroughPhotos);
