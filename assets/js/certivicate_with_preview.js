


console.log("certificate_wth_preview is called")


const headerArea = document.querySelector('.top-area')
const certifiedImageGrid = document.querySelector('.certificate-image-grid')
// const thumbnailContainer = document.querySelector('.thumbnail-container');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');
const thumbnail = document.getElementById('thumbnail');





console.log("lightboxOverlay = " + lightboxOverlay)
console.log("lightboxImage = " + lightboxImage)
console.log("closeBtn = " + closeBtn)
console.log("thumbnail = " + thumbnail)


function openLightbox(src, alt) {

    

    console.log("openLightBox Func Called")
    lightboxImage.src = src;
    lightboxImage.alt = alt;

    console.log(lightboxImage.src)
    console.log(lightboxImage.alt)

    lightboxOverlay.classList.add('active');
    lightboxOverlay.focus();
    document.body.style.overflow = 'hidden'; // Disable background scroll
  }
  function closeLightbox() {
    headerArea.style.visibility = "visible";
    console.log("closeLightBox Function Called")
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImage.src = '';
  }


    // Click or keyboard enter/space on thumbnail opens lightbox
    certifiedImageGrid.addEventListener('click', e => {
        headerArea.style.visibility = "hidden";
        console.log("hsagdhasjhdgsjha")
        const container = e.target.closest('.thumbnail-container');
        if (!container) return;
        const img = container.querySelector('img');
        if (!img) return;
        openLightbox(img.getAttribute('data-full') || img.src, img.alt);
    });

    certifiedImageGrid.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        headerArea.style.visibility = "hidden";
        e.preventDefault();
        const img = e.target.querySelector('img');
        if (img) {
          openLightbox(img.getAttribute('data-full') || img.src, img.alt);
        }
      }
    });


      // Close via close button click
  closeBtn.addEventListener('click', closeLightbox);
  // Close if clicking outside the image within overlay
  lightboxOverlay.addEventListener('click', e => {
    if (e.target === lightboxOverlay || e.target === closeBtn) {
      closeLightbox();
    }
  });

    // Close on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
          closeLightbox();
        }
    });