const addTaskButton = document.getElementById('createTask')
addTaskButton.addEventListener('click', createTaskFunction)

const list = document.getElementById('list')
const textInput = document.getElementById('textInput')


function createTaskFunction(){
    
    console.log('button click')
    
    const newTask = document.createElement('section')
    newTask.className = "layout"
    
    const newCheckbox = document.createElement('input')
    newCheckbox.setAttribute("type", "checkbox")
    newCheckbox.className = "checkboxInput"
    
    const newParagraph = document.createElement('p')
    const value = textInput.value
    newParagraph.innerText = value
    
    newTask.append(newCheckbox, newParagraph)
    
    if(value.trim() != ''){

        list.append(newTask)
    }
    
    
    textInput.value = ''
}