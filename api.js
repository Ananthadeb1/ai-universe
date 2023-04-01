// function loadData(){
//     let url = 'https://openapi.programming-hero.com/api/ai/tools';
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data.data.tools[0].name))
// }
// loadData();

const loadData = async () => {
  let url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then((res) => res.json())
    .then((res) => loadSingleDate(res.data.tools));
};

const detailsClicked = () => {
 
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
      </div>
</div>`;
document.body.append(newDiv)

let modal = new bootstrap.Modal(newDiv.querySelector(".modal"));
modal.show();

  console.log("onclicked");
};
const parentDiv = document.getElementById("Card-parent");

const loadSingleDate = (res) => {
  for (const element of res) {
    console.log(element)
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
            <button onclick="detailsClicked()"  type="button" class="btn btn-outline-danger rounded-circle detailsBtn"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
            
          </div>
        </div>  `;
    parentDiv.appendChild(ChildDiv);
  }
  document.getElementById("spinner").classList.add("d-none");
};
loadData();
