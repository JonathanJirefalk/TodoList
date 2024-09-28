const addTaskButton = document.getElementById('createTask')
addTaskButton.addEventListener('click', createTaskFunction)

const list = document.getElementById('list')
const textInput = document.getElementById('textInput')

let searchInput = document.getElementById('searchInput')
searchInput.addEventListener('input', searchForTasks)


function createTaskFunction(){
    
    console.log('button click')
    
    const newTask = document.createElement('section')
    newTask.className = "layout"
    
    const newCheckbox = document.createElement('input')
    newCheckbox.setAttribute("type", "checkbox")
    newCheckbox.className = "checkboxInput"
    
    const newParagraph = document.createElement('p')
    const textValue = textInput.value
    newParagraph.innerText = textValue
    
    newTask.append(newCheckbox, newParagraph)
    
    if(textValue.trim() != ''){

        list.append(newTask)
    }
    
    
    textInput.value = ''
}

function searchForTasks(){
    
    const tasks = list.querySelectorAll('section')
    const searchValue = searchInput.value

    for (let i = 0; i < tasks.length; i++){

        if(tasks[i].textContent.includes(searchValue)){

            tasks[i].style.display = 'flex'

        }else{

            tasks[i].style.display = 'none'
        }
    }
}