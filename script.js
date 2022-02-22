function modal() {
    const [...btns] = document.querySelectorAll('[data-open-modal]');
    const [...closeBtns] = document.querySelectorAll('[data-close]');
  
    btns.forEach((el) => {
      el.addEventListener('click', function (e) {
        const dataVal = e.currentTarget.dataset.openModal;
        const currentModal = document.querySelector('[data-modal=' + dataVal + ']');
  
        if (!currentModal) return;
  
        currentModal.classList.add('active');
      });
    });
  
    closeBtns.forEach((el) => {
      el.addEventListener('click', function (e) {
        const closeEl = e.currentTarget;
  
        closeEl.closest('[data-modal]').classList.remove('active');
      });
    });
  }
  
  modal();