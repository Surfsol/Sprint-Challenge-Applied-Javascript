// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  //create elements
  let headerTop = document.createElement("div");
  let date = document.createElement("span");
  let headerH1 = document.createElement("h1");
  let tempClass = document.createElement("span");

  //append
  headerTop.appendChild(date)
  headerTop.appendChild(headerH1)
  headerTop.appendChild(tempClass)

  //add class
  headerTop.classList.add("header");
  date.classList.add("date");
  tempClass.classList.add("temp");

  //content
  date.textContent = "SMARCH 28, 2019";
  headerH1.textContent = "Lambda Times";
  tempClass.textContent = "98°";

  return headerTop;
}

headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
