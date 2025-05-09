


(

function() {
      const gallery = document.querySelector('.gallery');
      const modal = document.querySelector('.modal');
      const modalImg = document.getElementById('modal-image');
      const closeBtn = document.querySelector('.close-btn');
      const header = document.querySelector('.top-area');
      // Handle image click/tap to open modal preview
      gallery.addEventListener('click', function(event) {
        const target = event.target;
        if(target.tagName === 'IMG') {
          header.style.visibility = "hidden";
          openModal(target);
        }
      });
      // Keyboard accessibility: Enter or Space opens modal on focused images
      gallery.addEventListener('keydown', function(event) {
        if ((event.key === 'Enter' || event.key === ' ') && document.activeElement.tagName === 'IMG') {
        
          event.preventDefault();
          header.style.visibility = "hidden";
          openModal(document.activeElement);
        }
      });
  // Open modal with clicked image source and alt
      function openModal(image) {
        modalImg.src = image.src.replace(/&w=\d+&q=\d+$/, '&w=1080&q=90'); // larger version
        modalImg.alt = image.alt || '';
        modal.classList.add('show');
        closeBtn.focus();
      }
      // Close modal
      function closeModal() {
        modal.classList.remove('show');
        modalImg.src = '';
        // Return focus to gallery or last clicked image
        gallery.focus();
        header.style.visibility = "visible";
      }
 closeBtn.addEventListener('click', closeModal);
      // Also close modal when clicking outside image
      modal.addEventListener('click', function(event) {
        if (event.target === modal) {
          closeModal();
        }
      });
      // Keyboard accessibility for modal: Esc closes modal
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
          closeModal();
        }
      });
    }
)();