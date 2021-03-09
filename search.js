console.log('search');
 const searchBox = document.querySelector(".search-box");
 const searchBtn = document.querySelector(".search-btn");
 const cancelBtn = document.querySelector(".cancel-btn");
 const searchInput = document.querySelector(".search-box input");
 
 searchBtn.onclick = () => {
   searchBox.classList.add("active");
   searchInput.classList.add("active");
   searchBtn.classList.add("active");
   cancelBtn.classList.add("active");
 }

 cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchInput.value = "";
 }