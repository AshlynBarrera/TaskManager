// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ` `;

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;


//Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable.
let userInput = prompt(menu);


//Loops and continues to loop until 
while(userInput !== `Close`){
  if(userInput.toUpperCase() === `TASKS`){
    for(i = 0; i < tasks.length ; i++ ){
      showTasks += tasks[i] + '\n';
    }
    alert(showTasks);
    showTasks = ` `;
  }
  //Adding
  if(userInput.toUpperCase() === `NEW`){
     newTask = prompt(`PLease enter a new task?`)
     tasks.push(newTask)
     alert(`"${newTask}" has been added`);
  }
  //Removing 
  if(userInput.toUpperCase() === `REMOVE`){
    // adds each task/ item in tasks to the show string variable,displays a number for each task.
    for(i = 0; i < tasks.length ; i++ ){
      showTasks += `${i + 1}: ${tasks[i]} \n` 
    }
    num = prompt(`Please enter a to remove:\n${showTasks}`)
    -1; // sub one from input so it matches the actual index they want removed 


    removed = tasks.splice(num,1); // Removed item and sets the removed item to "Removed" var

    //
    alert(`${removed[0]} has been removed`)

  }
  //display's menu again
  prompt(menu)


//this break can be removed when the while loop is set. 
break
}

//Alerts The user they have closed the program.
alert(`Thank you for using the task manager.`)
