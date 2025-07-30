
            // Collapsible
const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}






            // mobile responsive sidebar
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const openBtn = document.querySelector(".sidebar-mobile p");
  const closeBtn = document.querySelector(".mobile-sidebar-close p");

  openBtn.addEventListener("click", () => {
    sidebar.classList.remove("sb-mobile-hide");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.add("sb-mobile-hide");
  });
});












            // group create Form 

const hide = document.querySelector('.group-form-hide, .group-form');
const show = document.querySelector(".create");
const closeBtn = document.querySelector('#close');
          // show group create form 
show.addEventListener('click', () => {
    if (hide.classList.contains('group-form-hide')) {
        hide.classList.remove('group-form-hide');
        hide.classList.add('group-form');
    }
});
            // hide group create form 
closeBtn.addEventListener('click', () => {
    if (hide.classList.contains('group-form')) {
        hide.classList.remove('group-form');
        hide.classList.add('group-form-hide');
    }
});












                                                // input from create group 


document.addEventListener("DOMContentLoaded", function () {
  const groupForm = document.querySelector(".group-form-hide");
  const groupCardContainer = document.querySelector(".group-card1");
  const inputImageWrapper = document.querySelector(".input-image");
  const groupInfo =document.querySelector(".group-info");
  const groupInfoMobile =document.querySelector(".group-info-mobile");


  // Function to reset image upload section and reattach its listener
  function resetImageUpload() {
    inputImageWrapper.innerHTML = `
      <input id="input-image" type="file" accept="image/*">
      <i class="fa-regular fa-image"></i>
      <p id="img-select"><i class="fa-solid fa-arrow-up-from-bracket"></i>Select group image</p>
    `;

    const newImageInput = document.getElementById("input-image");

    newImageInput.addEventListener("change", function () {
      const file = newImageInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          inputImageWrapper.innerHTML = "";
          const imgPreview = document.createElement("img");
          imgPreview.src = e.target.result;
          imgPreview.classList.add("input-image");
          imgPreview.style.maxWidth = "100%";
          imgPreview.style.borderRadius = "50%";
          inputImageWrapper.appendChild(imgPreview);

          // Store file in a global variable for use in Create
          inputImageWrapper.dataset.imageSrc = e.target.result;
          inputImageWrapper.dataset.imageSelected = "true";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Attach listener to Create button
  document.addEventListener("click", function (event) {
    if (event.target.matches(".group-form .create")) {
      const groupNameInput = document.querySelector(".form input[placeholder='Enter Group Name']");
      const groupDescInput = document.querySelector(".desc textarea");
      const groupName = groupNameInput.value.trim();
      const groupDesc = groupDescInput.value.trim();
      const imageSelected = inputImageWrapper.dataset.imageSelected === "true";
      const imageSrc = inputImageWrapper.dataset.imageSrc;

      if (!imageSelected || !groupName) {
        alert("Please upload an image and enter a group name.");
        return;
      }

      const newGroup = document.createElement("div");
      newGroup.classList.add("collapse-element");
      newGroup.innerHTML = `
        <img src="${imageSrc}" alt="${groupName}">
        <p>${groupName}</p>
        <button>&rarr;</button>
      `;
      groupCardContainer.appendChild(newGroup);

      // const groupDetailsBox = document.createElement("div");
      // groupDetailsBox.classList.add("group-details-ele");
      // groupDetailsBox.innerHTML = `
      //   <img src="${imageSrc}" alt="${groupName}">
      //   <h2>Group Name : </h2>
      //   <p>${groupName}</p>
      //   <h2>Group Description : </h2>
      //   <p>${groupDesc}</p>
      // `;
      // groupInfo.appendChild(groupDetailsBox);

      // const groupDetailsMobile = document.createElement("div");
      // groupDetailsMobile.classList.add("group-details-ele1");
      // groupDetailsMobile.innerHTML = `
      //   <img src="${imageSrc}" alt="${groupName}">
      //   <h2>Group Name : </h2>
      //   <p>${groupName}</p>
      // `;
      // groupInfoMobile.appendChild(groupDetailsMobile);



const groupDetailsBox = document.createElement("div");
groupDetailsBox.classList.add("group-details-ele");
groupDetailsBox.dataset.name = groupName; // ✅ ADD THIS
groupDetailsBox.innerHTML = `
  <img src="${imageSrc}" alt="${groupName}">
  <h2>Group Name : </h2>
  <p>${groupName}</p>
  <h2>Group Description : </h2>
  <p>${groupDesc}</p>
`;
groupInfo.appendChild(groupDetailsBox);

const groupDetailsMobile = document.createElement("div");
groupDetailsMobile.classList.add("group-details-ele1");
groupDetailsMobile.dataset.name = groupName; // ✅ ADD THIS
groupDetailsMobile.innerHTML = `
  <img src="${imageSrc}" alt="${groupName}">
  <h2>Group Name : </h2>
  <p>${groupName}</p>
`;
groupInfoMobile.appendChild(groupDetailsMobile);


      // Reset form
      groupForm.classList.remove("group-form");
      groupForm.classList.add("group-form-hide");
      groupNameInput.value = "";
      groupDescInput.value = "";

      // Reset image section and data
      inputImageWrapper.dataset.imageSelected = "false";
      inputImageWrapper.dataset.imageSrc = "";
      resetImageUpload();
    }
  });

  // Initial setup
  resetImageUpload();
});
















                    // group details


// document.addEventListener("click", function (event) {
//   const isTargetButton =
//     event.target.tagName === "BUTTON" &&
//     event.target.closest(".collapse-element");

//   if (!isTargetButton) return;

//   const button = event.target;
//   const groupCard = button.closest(".collapse-element");

//   if (button.textContent.trim() === "Join") {
//     button.textContent = "→";
//     return;
//   }

//   if (button.textContent.trim() === "→") {
//     // Show the group detail wrappers using your existing CSS classes
//     const outerDetails = document.querySelector(".group-details-hide, .group-details");
//     const outerDetailsMobile = document.querySelector(".group-details-mobile-hide, .group-details-mobile");

//     if (outerDetails) {
//       outerDetails.classList.remove("group-details-hide");
//       outerDetails.classList.add("group-details");
//     }

//     if (outerDetailsMobile) {
//       outerDetailsMobile.classList.remove("group-details-mobile-hide");
//       outerDetailsMobile.classList.add("group-details-mobile");
//     }

//     // Get the index of the clicked card among all cards
//     const allCards = Array.from(document.querySelectorAll(".group-card1 .collapse-element"));
//     const index = allCards.indexOf(groupCard);

//     // Get all group detail elements (desktop + mobile)
//     const allDetailBoxes = document.querySelectorAll(".group-info .group-details-ele");
//     const allDetailBoxesMobile = document.querySelectorAll(".group-info-mobile .group-details-ele1");

//     // Hide all
//     allDetailBoxes.forEach(box => box.style.display = "none");
//     allDetailBoxesMobile.forEach(box => box.style.display = "none");

//     // Show only matching one
//     if (allDetailBoxes[index]) allDetailBoxes[index].style.display = "block";
//     if (allDetailBoxesMobile[index]) allDetailBoxesMobile[index].style.display = "flex";
//   }
// });




document.addEventListener("click", function (event) {
  const isTargetButton =
    event.target.tagName === "BUTTON" &&
    event.target.closest(".collapse-element");

  if (!isTargetButton) return;

  const button = event.target;
  const groupCard = button.closest(".collapse-element");

  if (button.textContent.trim() === "Join") {
    button.textContent = "→";
    return;
  }

  if (button.textContent.trim() === "→") {
    const outerDetails = document.querySelector(".group-details-hide, .group-details");
    const outerDetailsMobile = document.querySelector(".group-details-mobile-hide, .group-details-mobile");

    if (outerDetails) {
      outerDetails.classList.remove("group-details-hide");
      outerDetails.classList.add("group-details");
    }

    if (outerDetailsMobile) {
      outerDetailsMobile.classList.remove("group-details-mobile-hide");
      outerDetailsMobile.classList.add("group-details-mobile");
    }

    // Hide all existing detail boxes
    const allDetailBoxes = document.querySelectorAll(".group-info .group-details-ele");
    const allDetailBoxesMobile = document.querySelectorAll(".group-info-mobile .group-details-ele1");
    allDetailBoxes.forEach(box => box.style.display = "none");
    allDetailBoxesMobile.forEach(box => box.style.display = "none");

    // Get group name
    const groupName = groupCard.dataset.name || groupCard.querySelector("p").textContent.trim();

    // Find and show matching detail by data-name
    const targetDetailDesktop = document.querySelector(`.group-details-ele[data-name="${groupName}"]`);
    const targetDetailMobile = document.querySelector(`.group-details-ele1[data-name="${groupName}"]`);

    if (targetDetailDesktop) targetDetailDesktop.style.display = "block";
    if (targetDetailMobile) targetDetailMobile.style.display = "flex";
  }
});



