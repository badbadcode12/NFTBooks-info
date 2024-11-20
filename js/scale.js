// scale.js
function scalePage() {
    //const viewportWidth = window.innerWidth;
    //document.documentElement.clientWidth
    const viewportWidth = document.documentElement.clientWidth;
    const scaleFactor = Math.max(viewportWidth / 1440,1).toFixed(3);
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = 'top left';
  }
  
  window.addEventListener('resize', scalePage);
  scalePage();