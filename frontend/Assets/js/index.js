const updateFormContainer = document.getElementById("form-container");
window.onload=async()=>{
    updateFormContainer.style.display="none";
    await fetchtodo();
}

function getParams(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
}



const list = document.getElementById('list');
const form = document.querySelector('#form');

async function fetchtodo(){
    const url = 'http://127.0.0.1:3000/v1/tasks';
    const data = await fetch(url);
    const json= await data.json()
    json.forEach(element => {
        insertTask(element)
    });
}


function insertTask(task){
    const anchor = document.createElement('a')
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    const desc = document.createElement('p');
    const date = document.createElement('h5');
    const status = document.createElement('span');
    const btnlink1 = document.createElement('a');
    const btnlink2 = document.createElement('button');
    anchor.appendChild(heading);
    div.appendChild(anchor);
    div.appendChild(status);
    div.appendChild(btnlink1)
    div.appendChild(desc);
    div.appendChild(date);
    div.appendChild(btnlink2)
    list.appendChild(div);

    anchor.href = `/src/templates/updateTask.html?id=${task.id}`
    heading.innerText = task.taskName;
    date.innerText = task.dueDate;
    desc.innerText = task.taskDesc;
    status.innerText = task.status;
    btnlink1.innerHTML="&#9998;"
    btnlink2.innerHTML="&#9747;"
    btnlink1.id="btn1"
    btnlink2.id="btn2"
    btnlink2.setAttribute("onclick", `deleteTask('${(task.id).toString()}');`);
    //btnlink1.href=`/src/templates/updateTask.html?id=${task.id}`;
    btnlink1.setAttribute("onclick", `updateTask('${task.id}','${task.taskName}','${task.taskDesc}','${task.dueDate}','${task.status}');`);
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const [name,desc,date,status] = getFormData();
    async function postReq() {
        let response = await fetch('http://127.0.0.1:3000/v1/tasks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "taskName": name,
                "taskDesc": desc,
                "dueDate": date,
                "status": status
            })
        })
    }
    postReq()

})


function getFormData(){
    const formData = new FormData(form);
    const name = formData.get("taskName");
    const desc = formData.get("taskDesc");
    const date = formData.get("dueDate");
    const status = formData.get("status");
    return [name,desc,date,status];
}

// btnlink2.addEventListener("click",()=>{
    
// })

function deleteTask(id){
    let text = "Are you sure";
    if (confirm(text) == true) {
        deletereq(id);
        alert('Task deleted')
    } 
}
async function deletereq(id) {
    let response = await fetch(`http://127.0.0.1:3000/v1/tasks/${id}`, {
        method: 'DELETE'
    })
}


const updateForm = document.getElementById("updateForm");
function updateTask(id,namef,descf,datef,statusf){
    openForm(id,namef,descf,datef,statusf);
}
const submitUpdateForm = document.querySelector('#submitUpdateForm');

submitUpdateForm.addEventListener('click', async(e) => {
    e.preventDefault()
    const formData = new FormData(updateForm)
    let updatedTask = {};
    const name = formData.get("taskName");
    updatedTask.taskName = name;
    const desc = formData.get("taskDesc");
    updatedTask.taskDesc = desc;
    const date = formData.get("dueDate");
    updatedTask.dueDate = date;
    const status = formData.get("status");
    updatedTask.status = status;
    const id  = formData.get('id');
    async function putReq() { 
        let response = await fetch(`http://127.0.0.1:3000/v1/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask),
        })
    }
    await putReq();
    window.location.href="/frontend/templates/list.html"
})



function openForm(id,namef,descf,datef,statusf) {
    updateFormContainer.style.display = "block";
    let idInput = document.querySelector('#taskid');
    let name = document.getElementsByName('taskName')[1];
    let desc = document.getElementsByName('taskDesc')[1];
    let date = document.getElementsByName('dueDate')[1];
    let status = document.getElementsByName('status')[1];
    idInput.value = id;
    name.value = namef;
    desc.value = descf;
    date.value = datef;
    status.value = statusf;
  }
  
  function closeForm() {
    updateFormContainer.style.display = "none";
}
