const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");


searchBtn.addEventListener("click", function() {
    searchForm.classList.toggle("active");
    // console.log(searchForm);  
});
