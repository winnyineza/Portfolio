function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

// Define an array of strings for the typing animation
const textArray = ["Fullstack Developer", "Digital Communication Expert", "Freelancer"];

// Define the index of the current string being typed
let textIndex = 0;

// Define the index of the character within the current string being typed
let charIndex = 0;

// Define the typing speed in milliseconds
const typingSpeed = 60;

// Function to perform the typing animation
function type() {
    if (charIndex < textArray[textIndex].length) {
        // Append the next character to the text
        document.querySelector('.typing-text').textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        // Call the type function recursively after a delay
        setTimeout(type, typingSpeed);
    } else {
        // Move to the next string in the array
        setTimeout(erase, typingSpeed + 1000); // Wait for 2 seconds before erasing
    }
}

// Function to perform the erasing animation
function erase() {
    if (charIndex > 0) {
        // Remove the last character from the text
        document.querySelector('.typing-text').textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        // Call the erase function recursively after a delay
        setTimeout(erase, typingSpeed / 2);
    } else {
        // Move to the next string in the array
        textIndex = (textIndex + 1) % textArray.length;
        // Call the type function to start typing the next string
        setTimeout(type, typingSpeed);
    }
}

// Start the typing animation
type();

document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    { name: 'Fetcher App', category: 'web', github: 'https://github.com/winnyineza/Fetcher-app', demo: 'https://winnyineza.github.io/Fetcher-app/' },
    { name: 'Portfolio', category: 'web', github: 'https://github.com/winnyineza/Portfolio/', demo: 'https://winnyineza.github.io/Portfolio/#projects' },
    { name: 'Hire Express', category: 'design', figma: 'https://www.figma.com/file/UnCQ36Lb9zmGnFJZjfxm9j/Recruitment-Agency?type=design&node-id=0%3A1&mode=design&t=GG1WVvUNeRprkegs-1', demo: 'https://www.figma.com/proto/UnCQ36Lb9zmGnFJZjfxm9j/Recruitment-Agency?type=design&node-id=0-1&t=GG1WVvUNeRprkegs-0&scaling=min-zoom&page-id=0%3A1' }
    // Add more project objects as needed
  ];

  const projectContainer = document.querySelector('.project-container');

  function displayProjects(projects) {
    projectContainer.innerHTML = '';

    projects.forEach(project => {
      const projectHTML = `
        <div class="details-container color-container" data-category="${project.category}">
          <div class="article-container">
            <img src="./assets/${project.name}.png" alt="${project.name}" class="project-img" />
          </div>
          <h2 class="experience-sub-title project-title">${project.name}</h2>
          <div class="btn-container">
            <button class="btn btn-color-2 project-btn" onclick="location.href='${project.github || project.figma}'">Github/Figma</button>
            <button class="btn btn-color-2 project-btn" onclick="location.href='${project.demo}'">Live Demo</button>
          </div>
        </div>
      `;
      projectContainer.innerHTML += projectHTML;
    });
  }

  displayProjects(projects);

  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = btn.dataset.filter;
      const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);
      displayProjects(filteredProjects);
      filterBtns.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
