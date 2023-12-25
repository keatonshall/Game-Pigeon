function setValue(){
  let url = window.location.href;
  document.getElementById("value").innerHTML = (url.split("?")[1] != undefined)? url.split("?")[1] : 20;
}


function takeOff(n){
  document.getElementById("value").innerHTML = Number(document.getElementById("value").innerHTML) - n;
}


function send(){
  let value = document.getElementById("value").innerHTML
  let url = window.location.href.split("?")[0] + "?" + value;
  console.log(url);
  if (navigator.share) {
    navigator.share({
        title: 'Game',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    console.log('Share not supported on this browser, do it the old way.');
  }
}
