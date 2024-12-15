// scale.js
function scalePage() {
    //const viewportWidth = window.innerWidth;
    //document.documentElement.clientWidth
    const firstAuthor = document.querySelector("#first-author > div");
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const scaleFactor = Math.max(viewportWidth / 1440,1).toFixed(3);
    // document.body.style.transform = `scale(${scaleFactor})`;
    // document.body.style.transformOrigin = 'top left';
    firstAuthor.style.transform = `scale(${scaleFactor})`;
    firstAuthor.style.transformOrigin = 'top left';
    const firstAuthorH1 = document.querySelector('div.welcome-title-author');
    firstAuthorH1.style.transform = `scale(${1/scaleFactor})`;
    //add top;
    const firstHomepage = document.querySelector('.first-homepage');
    if (firstHomepage) {
      if (scaleFactor !== 1) {
        const scaleDiv = 900 - (viewportHeight/scaleFactor);
        firstHomepage.style.top = `-${scaleDiv}px`; // Đảm bảo thêm đơn vị "px"
      }
        //   } else {
    //     // Xử lý trường hợp scaleFactor = 1 (ví dụ: đặt lại về giá trị mặc định)
    //     //firstHomepage.style.top = '0px'; // Hoặc giá trị top mặc định khác
       }
  }
  
  window.addEventListener('resize', scalePage);
  scalePage();