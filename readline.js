import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const contacts = [];

// Function to display the main menu
function displayMenu() {
  rl.question(
    `\nMenu Options:\n1. Add a contact\n2. List all contacts\n3. Exit\nPlease select an option (1-3): `,
    handleMenuChoice
  );
}

// Function to handle menu choices
function handleMenuChoice(option) {
  switch (option) {
    case "1":
      addContact();
      break;
    case "2":
      listContacts();
      break;
    case "3":
      console.log("Exiting program. Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid option. Please enter 1, 2, or 3.");
      displayMenu();
      break;
  }
}
function askForName() {
  return new Promise((resolve) => {
    rl.question("Enter contact name: ", (name) => {
      if (!name.trim()) {
        console.log("Invalid name, please try again:\n");
        resolve(askForName());
        return;
      }
      resolve(name);
    });
  });
}
function askForNumber() {
  return new Promise((resolve) => {
    rl.question("Enter contact number: ", (num) => {
      if (!num || !/^\d{10}$/.test(num)) {
        console.log("Invalid number please try again: \n");
        resolve(askForNumber());
        return;
      }
      resolve(num);
    });
  });
}
// Function to add a contact
async function addContact() {
  const name = await askForName();
  const number = await askForNumber();

  console.log(`Contact added: ${name} - ${number}`);
  contacts.push({ name, number });
  displayMenu();
}

// Function to list all contacts
function listContacts() {
  console.log("\nViewing all contacts...");
  if (contacts.length === 0) {
    console.log("No contacts found.");
  } else {
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.name}: ${contact.number}`);
    });
  }
  displayMenu();
}

// Start the program
displayMenu();
