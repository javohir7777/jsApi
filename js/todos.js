const row=document.querySelector(".row");
const userId=localStorage.getItem("userId");
let point=localStorage.getItem("point");
let b=point.slice(1,6);
console.log(b);
fetch(`https://jsonplaceholder.typicode.com/${b}?userId=${userId}`)
.then(res=>res.json())
.then(json=>json.forEach((js)=>{
    const card=document.createElement("div");
    card.className="col-12";
    card.innerHTML=`
    <div class="card">
                    <div class="card-body">
                      <p class="card-title"><b>Title:</b> ${js.title}</p>
                      <div class="d-flex align-itmes-center justify-content-between">
                        <p class="card-text"><b>Completed:</b></p>
                        <p class="card-text">${js.completed ? "✅" : "❌"} </p>
                        </div>
                        <a onclick="albums(${js.id}, ${js.albums})" href="../pages/albums.html" class="btn btn-warning text-success">Albums</a>
                    </div>
    </div>
    `
    row.appendChild(card);
}));
function albums(id, albums="albums"){
  localStorage.setItem("userId", JSON.stringify(id))
  localStorage.setItem("Albums", JSON.stringify(albums))
}