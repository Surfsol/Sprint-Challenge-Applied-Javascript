// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let topics = document.querySelector(".topics")

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response.data.topics);
    response.data.topics.forEach(e => {
      console.log(e);
      //tabDiv.appendChild(createTab(e))
      topics.appendChild(createTab(e));
    });
  });

function createTab(e) {
  //elements
  //let topics1 = document.querySelector('.topics')
  //let title1 = document.querySelector('.title')
  let tab = document.createElement("div");
  //let title1 = document.createElement("span");

  tab.classList.add("tab");
  tab.textContent = e

  //title1.classList.add("title");
  //append
  //topics1.appendChild(title1);

  //content
  //title1.textContent = e;

  return tab;
}


