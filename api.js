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
      .then((res) => console.log(res));
  }


  loadData();