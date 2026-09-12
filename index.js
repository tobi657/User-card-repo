// APIs:
// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const usersListEl = document.querySelector('.user-list');

async function main() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersData = await users.json();
  console.log(usersData);
  usersListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
}

main();

function showUserPosts(id) {
  window.location.href = 'https://127.0.0.1:5500/user.html'
  console.log(id);
}

function userHTML(user) {
  return `<div class="user-card" onclick="showUserPosts(${user.id})">
  <div class="user-card__container">
   <h3>${user.name}</h3>
    <p><b>Email:</b> ${user.email}</p>
      <p><b>Phone:</b> ${user.phone}</p>
      <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
      ${user.website}
      </a></p>
    </div>
  </div>`
}