// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let tabDiv = document.querySelector(".tabs")

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response.data.topics);
    response.data.topics.forEach(e => {
      console.log(e);
      tabDiv.appendChild(createTab(e))
      tabDiv = document.querySelector(".tabs").appendChild(createTab(e));
    });
  });

function createTab(e) {
  //elements
  //let topics1 = document.querySelector('.topics')
  //let title1 = document.querySelector('.title')
  let topics1 = document.createElement("div");
  let title1 = document.createElement("span");

  topics1.classList.add(".topics");
  title1.classList.add(".title");
  //append
  topics1.appendChild(title1);

  //content
  title1.textContent = e;

  return topics1;
}


