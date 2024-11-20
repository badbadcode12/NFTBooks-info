// scale.js
function scalePage() {
    //const viewportWidth = window.innerWidth;
    //document.documentElement.clientWidth
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const scaleFactor = Math.max(viewportWidth / 1440,1).toFixed(3);
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = 'top left';
    
    //add top;
    const firstHomepage = document.querySelector('.first-homepage');

    if (firstHomepage) {
      if (scaleFactor !== 1) {
        const topValue = (900 * scaleFactor - viewportHeight) * 0.8;
        firstHomepage.style.top = `-${topValue}px`; // Đảm bảo thêm đơn vị "px"
      }
        //   } else {
    //     // Xử lý trường hợp scaleFactor = 1 (ví dụ: đặt lại về giá trị mặc định)
    //     //firstHomepage.style.top = '0px'; // Hoặc giá trị top mặc định khác
       }
  }
  
  window.addEventListener('resize', scalePage);
  scalePage();