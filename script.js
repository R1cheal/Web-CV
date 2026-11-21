document.querySelectorAll('.pin-holder .caption').forEach(caption => {
  const h = caption.querySelector('h4');
  const style = getComputedStyle(caption);
  const peek = h.offsetHeight + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  caption.style.setProperty('--peek', peek + 'px');
});
