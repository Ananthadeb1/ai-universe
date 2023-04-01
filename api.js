//  global variable
let data = [];
let elementId;



// For showing the details modal added hear 
const showDescription = (element) =>{

console.log(element)
let newDiv = document.createElement("div");
newDiv.innerHTML = `
<div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div A>
          <div class="card-deck d-flex">
<div class="card w-50 m-3">
  <div class="card-body">
    <h5 class="card-title">${element.description}</h5>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card w-50 m-3">
  <img class="card-img-top" src="${element.image_link}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>
        <A /div>
    </div>
</div>`;
document.body.append(newDiv);

let modal = new bootstrap.Modal(newDiv.querySelector(".modal"));
modal.show();
}

// loading the single data 
function loadData2(id){
  console.log(id)
  let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(res => showDescription(res.data))
  console.log(res)
}

// loading the main data
const loadData = () => {
  let url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then((res) => res.json())
    .then((res) => loadSingleDate(res.data.tools));
};

// for set up the cards and the hendels the button clicks

const parentDiv = document.getElementById("Card-parent");

const loadSingleDate = (res) => {
  for (const element of res) {
    data.push(element);
    // console.log(element);
    let ChildDiv = document.createElement("div");
    ChildDiv.classList.add("col");
    if (parseInt(element.id) > 6) ChildDiv.classList.add("d-none");

    document.getElementById("seeBtn").addEventListener("click", function () {
      this.classList.add("d-none");
      if (parseInt(element.id) > 6) {
        ChildDiv.classList.remove("d-none");
        ChildDiv.classList.add("d-block");
      }
    });

    ChildDiv.innerHTML = ` <div class="card h-100">
          <img src="${element.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Features</h5>
            <p class="card-text">
                <ol>
                    <li>${element.features[0]}</li>
                    <li>${element.features[1]}</li>
                    <li>${element.features[2]}</li>
                </ol>
            </p>
          </div>
          <div class="card-footer">
          <h5 class="card-title">${element.name}</h5>
          <div class=" d-flex justify-content-between">
          <small class="text-body-secondary"><i class="fa fa-calendar" aria-hidden="true"></i> ${element.published_in}
            </small>
            <button onclick="detailsClicked(this)" id="${element.id}" type="button" class="btn btn-outline-danger rounded-circle detailsBtn"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
          </div>
        </div>  `;
    parentDiv.appendChild(ChildDiv);
  }
// spinner added 
  document.getElementById("spinner").classList.add("d-none");
};

// button click function for load the details 
const detailsClicked = (btnId) => {
  loadData2(btnId.id)
};


// call the loadData method for loading all the data automatically 
loadData();
