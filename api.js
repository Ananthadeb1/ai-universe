// function loadData(){
//     let url = 'https://openapi.programming-hero.com/api/ai/tools';
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data.data.tools[0].name))
// }
// loadData();

function loadData() {
    let url = "https://openapi.programming-hero.com/api/ai/tools";
    fetch(url)
      .then((res) => res.json())
      .then((res) => loadSingleDate(res.data.tools));
  }
  function loadSingleDate(res){
    const parentDiv = document.getElementById("Card-parent");
      for (const element of res) {
          console.log(element);
          let ChildDiv =  document.createElement("div");
          ChildDiv.classList.add("col")
          ChildDiv.innerHTML = 
          ` <div class="card h-100">
          <img src="${element.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">.</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>  `
        parentDiv.appendChild(ChildDiv)
      }
      
      // console.log(res[0]);
  }
  loadData();
  