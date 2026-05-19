const menu = document.getElementById("menu");
const content = document.getElementById("content");
const installBtn = document.getElementById("installBtn");

let deferredPrompt;

fetch("data.json")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("Could not load data.json");
    }
    return response.json();
  })
  .then(function(data) {
    const animals = data.marineLife;

    menu.innerHTML = "";

    animals.forEach(function(animal, index) {
      const button = document.createElement("button");

      button.innerHTML = `
        <span class="menu-icon">${animal.icon}</span>
        <span>${animal.title}</span>
      `;

      button.addEventListener("click", function() {
        showAnimal(animal);
        setActiveButton(button);
      });

      menu.appendChild(button);

      if (index === 0) {
        showAnimal(animal);
        button.classList.add("active");
      }
    });
  })
  .catch(function(error) {
    console.error(error);

    content.innerHTML = `
      <div class="text-area">
        <h2>Error Loading Content</h2>
        <p>Check that data.json is in the same folder as index.html and that your JSON has no missing commas.</p>
      </div>
    `;
  });

function showAnimal(animal) {
  content.innerHTML = `
    <div class="text-area">
      <h2>${animal.title}</h2>
      <p>${animal.description}</p>
<h3>Fun Facts</h3>
<ul>
  ${animal.funFacts.map(function(fact) {
    return `<li>${fact}</li>`;
  }).join("")}
</ul>

      <audio controls>
        <source src="${animal.audio}" type="audio/mpeg">
        Your browser does not support audio.
      </audio>
    </div>

    <img src="${animal.image}" alt="${animal.title}">
  `;
}

function setActiveButton(selectedButton) {
  const buttons = document.querySelectorAll("#menu button");

  buttons.forEach(function(button) {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");
}

/* Install button */
window.addEventListener("beforeinstallprompt", function(event) {
  event.preventDefault();
  deferredPrompt = event;

  if (installBtn) {
    installBtn.hidden = false;
  }
});

if (installBtn) {
  installBtn.addEventListener("click", async function() {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;

    deferredPrompt = null;
    installBtn.hidden = true;
  });
}

/* Service worker */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}