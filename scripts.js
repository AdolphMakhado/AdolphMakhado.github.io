function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
const sidebar = document.querySelector(".sidebar");
const menuLabels = [
  "about",
  "experience",
  "portfolio",
  "skills",
  "education",
  "contact ",
];
menuLabels.forEach((element) => {
  const listItem = document.createElement("li");
  listItem.onclick = hideSidebar;
  listItem.innerHTML = `<a href=#${element}>${element}</a>`;
  sidebar.appendChild(listItem);
});
