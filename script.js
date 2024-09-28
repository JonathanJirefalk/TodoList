let addTaskButton = document.getElementById('createTask')
addTaskButton.addEventListener('click', createTaskFunction)

let list = document.getElementById('list')
let textInput = document.getElementById('textInput')


function createTaskFunction(){
    
    console.log('button click')
    
    let newTask = document.createElement('section')
    newTask.className = "layout"
    
    let newCheckbox = document.createElement('input')
    newCheckbox.setAttribute("type", "checkbox")
    newCheckbox.className = "checkboxInput"
    
    let newParagraph = document.createElement('p')
    let value = textInput.value
    newParagraph.innerText = value
    
    newTask.append(newCheckbox, newParagraph)
    
    if(value.trim() != ''){

        list.append(newTask)
    }
    
    
    textInput.value = ''
}