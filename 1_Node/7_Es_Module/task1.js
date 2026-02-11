// Build a CLI Todo App using node

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1. Add a Task ");
  console.log("2. View Tasks");
  console.log("3. Exit");
  rl.question("Choose a option: ", handleInput);
};

const handleInput = (option) => {
  if (option == 1) {
    rl.question("Enter the Task: ", (task) => {
      todos.push(task);
      console.log("Task Added: ", task);
      showMenu();
    });
  } else if (option == 2) {
    console.log("\nYour Todo List");
    todos.map((task, ind) => {
      console.log(`${ind + 1}. ${task}`);
    });
    showMenu();
  } else if (option == 3) {
    console.log("Good Bye");
    rl.close();
  } else {
    console.log("\nInvalid Option. Please try again!");
    showMenu();
  }
};
showMenu();