// Define an array to store temporary contacts
let temporaryContacts = [];

// Function to create a temporary contact and add it to the array
function createTemporaryContact(name, email, phoneNumber) {
  // Generate initials from the name (first letter)
  const initials = name.charAt(0).toUpperCase();

  // Create a new contact object
  const contact = {
    name,
    email,
    phoneNumber,
    initials,
  };

  // Add the contact to the temporaryContacts array
  temporaryContacts.push(contact);
}

// Function to display temporary contacts on the index.html page
function displayTemporaryContacts() {
  const contactsList = document.getElementById('contactsList');

  // Clear the existing list
  contactsList.innerHTML = '';

  // Loop through the temporaryContacts array and display each contact
  temporaryContacts.forEach((contact, index) => {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    contactDiv.innerHTML = `
      <div class="contactSquare">${contact.initials}</div>
      <div class="contactName">${contact.name}</div>
    `;

    // Add the contact to the list
    contactsList.appendChild(contactDiv);
  });
}

// Function to clear temporary contacts when leaving the site
window.addEventListener('beforeunload', () => {
  temporaryContacts = [];
});

// Function to handle form submission on create.html
function handleCreateContactFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneNumberInput = document.getElementById('phoneNumber');

  const name = nameInput.value;
  const email = emailInput.value;
  const phoneNumber = phoneNumberInput.value;

  // Create a temporary contact
  createTemporaryContact(name, email, phoneNumber);

  // Display temporary contacts
  displayTemporaryContacts();

  // Reset the form
  nameInput.value = '';
  emailInput.value = '';
  phoneNumberInput.value = '';
}

// Add an event listener for the form submission on create.html
const createContactForm = document.getElementById('createContactForm');
createContactForm.addEventListener('submit', handleCreateContactFormSubmit);
