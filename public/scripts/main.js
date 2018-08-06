function scrollAnimationListener(e) {
  // build scene
  var controller = new ScrollMagic.Controller();
  var children = document.querySelectorAll('#contentDetails > figure, #contentDetails p');

  requestAnimationFrame( () => {
    document.querySelector('.progress-container').classList.remove('fade-in');
  });

  forEach(children, (index, item) => {

    var tween = null;
    tween = TweenLite.from(item, 1, { opacity: 0, y: '+=100', ease: Power3.easeOut });

    var scene = new ScrollMagic.Scene({triggerElement: item, offset: -600 })
    .reverse(false)
    .setTween( tween ) // the tween durtion can be omitted and defaults to 1
    .addTo(controller);
  });

}

function loadCaseAnimation() {
  document.querySelector('#app').addEventListener('displayed', scrollAnimationListener, {once: true});
}

function removeCaseAnimation() {
  document.querySelector('#app').removeEventListener('displayed', scrollAnimationListener, {once: true});
}

window.onscroll = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var bar = document.getElementById("progress-bar");
  if (typeof bar === "undefined" || bar.value == '') { return; };
  bar.style.width = scrolled + "%";
}
