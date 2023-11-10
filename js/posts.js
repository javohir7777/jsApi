const row=document.querySelector(".row");
const userId=localStorage.getItem("userId");
let point=localStorage.getItem("Posts");
console.log(point);
let b=point.slice(1,6);
fetch(`https://jsonplaceholder.typicode.com/${b}?userId=${userId}`)
.then(res=>res.json())
.then(json=>json.forEach((js)=>{
    const card=document.createElement("div");
    card.className="col-12";
    card.innerHTML=`
    <div class="card">
                    <div class="card-body">
                      <p class="card-title"><b>Title:</b> ${js.title}</p>
                      <p class="card-text"><b>Body:</b> ${js.body}</p>
                      <a onclick="comments(${js.id}, ${js.comments})" href="../pages/comments.html" class="btn btn-primary">Comments</a>
                    </div>
    </div>
    `
    row.appendChild(card);
}));
function comments(id, comments="comments"){
  localStorage.setItem("postId", JSON.stringify(id))
  localStorage.setItem("Comments", JSON.stringify(comments))
}