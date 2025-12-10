function addTask(){
    const newTask = document.createElement('li')
    const taskList = document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value
    document.getElementById('inputTask').value = ''
    deleteTask(newTask)
}
function deleteTask(task){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    task.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
        task.remove()
    } 
}