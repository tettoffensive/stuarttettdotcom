var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
}

/**
 * returns the width of child text of any DOM node as a float
 */
function getTextWidth(el) {
  // uses a cached canvas if available
  var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  // get the full font style property
  var font = window.getComputedStyle(el, null).getPropertyValue('font');
  var text = el.value;
  // set the font attr for the canvas text
  context.font = font;
  var textMeasurement = context.measureText(text);
  return textMeasurement.width;
}
