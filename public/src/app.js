const container = document.getElementById('container');

// Make a GET request to the getUser endpoint of your user API
fetch('http://localhost:3000/dev/user')
  .then(response => response.json())
  .then(user => {
    // Create some HTML elements to display the user information
    const name = document.createElement('h2');
    name.textContent = user.name;

    const email = document.createElement('p');
    email.textContent = user.email;

    // Add the HTML elements to the page
    container.innerHTML = '';
    container.appendChild(name);
    container.appendChild(email);
  })
  .catch(error => {
    // Display an error message if the request fails
    container.innerHTML = `<p>Error: ${error.message}</p>`;
  });
