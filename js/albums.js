const row=document.querySelector(".row");
const userId=localStorage.getItem("userId");
let point=localStorage.getItem("Albums");
let b=point.slice(1,7);
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
    </div>
    `
    row.appendChild(card);
}));
