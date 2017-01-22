//alert("watup");
var profilePictureCount;

//function wowReact(){

  var likeBtn = document.getElementsByClassName("_khz")
  for(var i =0; i < likeBtn.length; i++)
  {
    likeBtn[i].click();
    likeBtn[i].click();
  }
  var wows = document.querySelectorAll('[aria-label="Wow"]');
  for(var i =0; i < wows.length; i++)
  {
    wows[i].click();
  }

//}

function iterateThroughPhotos(){
  var profilePictureCountString = document.getElementById('fbPhotoSnowliftPositionAndCount').innerHTML;
  profilePictureCount = Number(profilePictureCountString.substring(profilePictureCountString.lastIndexOf(';')+1));

  var delay=500; //.5 seconds

  wowReact();

  var delay = 250;

  for(var i=0; i<profilePictureCount; i++){
    setTimeout(function() {
      document.getElementsByClassName('next')[0].click();
    }, delay);
  }
}
//wowReact();
//iterateThroughPhotos();
