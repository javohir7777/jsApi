const row=document.querySelector(".row");
const userId=localStorage.getItem("postId");
let point=localStorage.getItem("Comments");
console.log(point);
let b=point.slice(1,9);
fetch(`https://jsonplaceholder.typicode.com/${b}?postId=${userId}`)
.then(res=>res.json())
.then(json=>json.forEach((js)=>{
    const card=document.createElement("div");
    card.className="col-12";
    card.innerHTML=`
    <div class="card">
    <div class="card-body">
                      <h3><b>Name: </b>${js.name}</h3>
                      <p class="card-title"><b>Title:</b> ${js.email}</p>
                      <p class="card-text"><b>Body:</b> ${js.body}</p>
                    </div>
    </div>
    `
    row.appendChild(card);
}));
