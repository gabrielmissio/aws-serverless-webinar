const container = document.querySelector('.container')

function loadProfiles () {
  // Make a GET request to the getUsers endpoint of your user API
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
      container.innerHTML = ''

      // Create some HTML elements to display the user information
      const profiles = users.data.map(user => makeProfileComponent(user))
      profiles.forEach(profile => container.appendChild(profile))
    })
    .catch(error => {
      // Display an error message if the request fails
      container.innerHTML = `<p>Error: ${error.message}</p>`
    })
}

function makeProfileComponent (user) {
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
  profileImage.src = user.profileUrl || 'media/default-profile-icon.png'

  profileInfo.appendChild(name)
  profileInfo.appendChild(email)

  profile.appendChild(profileImage)
  profile.appendChild(profileInfo)

  return profile
}

loadProfiles()
