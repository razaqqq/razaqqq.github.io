



(




    () => {
    
    
    
    
    const slides = document.getElementById('slides');
    const slideElements = slides.children;
    const captionEl = document.getElementById('caption');
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');
    const totalSlides = slideElements.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let isDragging = false;
    function setSlidePosition(index) {
    currentTranslate = -index * slides.clientWidth;
    prevTranslate = currentTranslate;
    slides.style.transition = 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
    slides.style.transform = `translateX(${currentTranslate}px)`;
    updateCaption(index);
    }   
    
    
    
    function updateCaption(index) {
    const caption = slideElements[index].getAttribute('data-caption') || '';
    captionEl.textContent = caption;
    }
    function clampIndex(index) {
    if (index < 0) return 0;
    if (index >= totalSlides) return totalSlides - 1;
    return index;
    }
    function onDragStart(event) {
    isDragging = true;
    slides.style.transition = 'none';
    startX = getPositionX(event);
    animationID = requestAnimationFrame(animation);
    }
    
    
    function onDragMove(event) {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startX;
    currentTranslate = prevTranslate + diff;
    }
    function onDragEnd() {
    cancelAnimationFrame(animationID);
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < totalSlides - 1) {
      currentIndex++;
    }
    if (movedBy > 100 && currentIndex > 0) {
      currentIndex--;
    }
    setSlidePosition(currentIndex);
    }
    function animation() {
    setSliderPosition();
    if (isDragging) {
      requestAnimationFrame(animation);
    }
    }
    
    
    function setSliderPosition() {
    slides.style.transform = `translateX(${currentTranslate}px)`;
    }
    function getPositionX(event) {
    return event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    }
      // Buttons
      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          setSlidePosition(currentIndex);
          animateButton(prevBtn);
        }
      });
      nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides -1) {
          currentIndex++;
          setSlidePosition(currentIndex);
          animateButton(nextBtn);
        }
      });
      function animateButton(button){
        button.style.transform = 'translateY(-50%) scale(0.85)';
        setTimeout(() => {
          button.style.transform = 'translateY(-50%) scale(1)';
        }, 150);
      }
    
    // Drag events
    slides.addEventListener('mousedown', onDragStart);
    slides.addEventListener('touchstart', onDragStart, { passive: true });
    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchend', onDragEnd);
    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('touchmove', onDragMove, { passive: true });
    // Initialize
    setSlidePosition(currentIndex);
    
    }
    
    
    
                )();