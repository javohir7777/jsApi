const row=document.querySelector(".row");
const userId=localStorage.getItem("albumId");
let point=localStorage.getItem("Photos");
let b=point.slice(1,7);
console.log(b,userId);
fetch(`https://jsonplaceholder.typicode.com/${b}?albumId=${userId}`)
.then(res=>res.json())
.then(json=>json.forEach((js)=>{
    const card=document.createElement("div");
    card.className="col-12  col-md-6 col-lg-4";
    card.innerHTML=`
    <div class="card">
                     <img src="${js.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title"><b>Title:</b> ${js.title}</h5>
                      </div>
                    </div>
    </div>
    `
    row.appendChild(card);
}));
