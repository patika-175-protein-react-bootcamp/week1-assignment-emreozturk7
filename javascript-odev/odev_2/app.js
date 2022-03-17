let taskFormDOM = document.querySelector('#taskForm')
taskFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()

    const TASK = document.querySelector("#task");

    if (TASK.value) {
        addItem(TASK.value)
        TASK.value = ""
    } else {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz",
            "success"
        )
    }
}

let listDoM = document.querySelector('#list');


function addItem(data) {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `
        ${data}
        <span class="badge bg-primary rounded-pill"></span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    listDoM.append(liDOM)
}