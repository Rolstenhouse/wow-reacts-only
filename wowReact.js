var profilePictureCount;

function wowReact(){
  var list = document.querySelectorAll('[aria-label="Wow"]');
  list[0].click();
}

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
