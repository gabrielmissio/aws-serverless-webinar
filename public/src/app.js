const container = document.querySelector('.container')

// Make a GET request to the getUser endpoint of your user API
fetch('http://localhost:3000/users/17ed9632-7c45-4217-b7e4-6871df5a70dc')
  .then(response => response.json())
  .then(user => {
    // Create some HTML elements to display the user information
    const profile = document.createElement('div')
    profile.className = 'profile'

    const profileInfo = document.createElement('div')
    profileInfo.className = 'profile-info'

    const name = document.createElement('h2')
    name.textContent = user.name

    const email = document.createElement('p')
    email.textContent = user.email

    const profileImage = document.createElement('img')
    profileImage.className = 'profile-image'
    profileImage.src = user.profileUrl || '../media/default-profile-icon.png'

    // Add the HTML elements to the page
    profileInfo.appendChild(name)
    profileInfo.appendChild(email)

    profile.appendChild(profileImage)
    profile.appendChild(profileInfo)

    container.innerHTML = ''
    container.appendChild(profile)
  })
  .catch(error => {
    // Display an error message if the request fails
    container.innerHTML = `<p>Error: ${error.message}</p>`
  })
