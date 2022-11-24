const modal = document.querySelector(".modal__full");

const openModal = document.querySelector(".forgot__password");

const closeModal = document.querySelector(".close__modal");

const closeModalButton = document.querySelector(".close__modal--button");

const codigo = document.querySelector("#codigo");

function openModal_() {
  openModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });
}

openModal_();

function closeModal_() {
  closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
  });
  if (codigo.value != undefined) {

    closeModalButton.addEventListener("click", (e) => {
        console.log(codigo.value);
      e.preventDefault();
      modal.style.display = "none";
    });
  }
}

closeModal_();
