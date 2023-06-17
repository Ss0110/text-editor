const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
let deferredPrompt;

// Event handler for the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  // Show the install button or perform any other desired action
  butInstall.style.display = "block";
});

// Event handler for the button click event
butInstall.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the PWA installation");
    } else {
      console.log("User dismissed the PWA installation");
    }
    deferredPrompt = null;
    // Hide the install button or perform any other desired action
    butInstall.style.display = "none";
  }
});

// Event handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("PWA installed successfully");
});
