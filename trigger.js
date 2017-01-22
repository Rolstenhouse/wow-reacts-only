document.addEventListener('DOMContentLoaded', function () {
  //This is where you add EventListeners
});
function testCall(){
  window.alert("FROM TRIGGER");
}

//Name of callback function to trigger when clicked. No popup necessary.
chrome.pageAction.onClicked.addListener(testCall);
