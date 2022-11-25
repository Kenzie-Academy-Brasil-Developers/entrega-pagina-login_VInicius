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

  closeModal_();
}

openModal_();

function closeModal_() {
  closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
  });
  if (codigo.value === "") {
    closeModalButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("click");
      modal.style.display = "none";
    });
  }
}
