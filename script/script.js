window.addEventListener('DOMContentLoaded', () => {

   const modalWindow = document.querySelector('.header-menu-modal'),
      openBtn = document.querySelector('.burger');

   let modalStatus = true;

   modalWindow.style.display = modalStatus ? 'none' : 'flex';
   openBtn.innerHTML = modalStatus ? `<span></span><span id="second-line"></span><span></span>` : `<img src="assets/images/close_icon.png" alt="Close">`;

   function toggleModal() {
      modalStatus = modalStatus ? false : true;

      modalWindow.style.display = 'none';
      modalWindow.style.height = 0;
      modalWindow.style.transition = `all 5s ease-in-out`;


      modalWindow.style.display = modalStatus ? 'none' : 'flex';
      modalWindow.style.height = modalStatus ? '0px' : 'auto';
      modalWindow.style.transition = `all 5s ease-in-out`;

      openBtn.innerHTML = modalStatus ? `<span></span><span id="second-line"></span><span></span>` : `<img src="assets/images/close_icon.png" alt="Close">`;
   }

   openBtn.addEventListener('click', toggleModal);
});