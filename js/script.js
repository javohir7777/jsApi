const row=document.querySelector(".row");
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(json=>json.forEach((js)=>{
    const card=document.createElement("div");
    card.className="col-12 col-md-6 col-lg-4";
    card.innerHTML=`
    <div class="card">
                    <div class="card-body">
                      <h5 class="card-title"><b>Name:</b> ${js.name}</h5>
                      <h6 class="card-title"><b>User Name:</b> ${js.username}</h6>
                      <p class="card-title"><b>Email:</b> ${js.email}</p>
                      <p class="card-text"><b>Address:</b> ${js.address.city} ${js.address.street}</p>
                      <div class="d-flex align-itmes-center justify-content-center gap-3">
                      <a onclick="saveId(${js.id}, ${js.point})" href="./pages/todos.html" class="btn btn-danger">Todos</a>
                      <a onclick="PostId(${js.id}, ${js.pos})" href="./pages/posts.html" class="btn btn-success">Posts</a>
                      <a onclick="PhotosId(${js.id}, ${js.photo})" href="./pages/photos.html" class="btn btn-primary">Photos</a>
                      </div>
                    </div>
    </div>
    `
    row.appendChild(card);
}));
function saveId(id, point="Todos"){
  localStorage.setItem("userId", JSON.stringify(id))
  localStorage.setItem("point", JSON.stringify(point))
}

function PostId(id, pos="Posts"){
  localStorage.setItem("userId", JSON.stringify(id))
  localStorage.setItem("Posts", JSON.stringify(pos))
}

function PhotosId(id, photo="Photos"){
  localStorage.setItem("albumId", JSON.stringify(id))
  localStorage.setItem("Photos", JSON.stringify(photo))
}
