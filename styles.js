const body = document.getElementById("body");
  const icons = document.getElementById("temasOptions");

  function toggleTheme() {
    const moonIcon = '<img id="moon" src="./images/moon.png" onclick="toggleTheme()"/>';
    const sunIcon = '<img id="sun" src="./images/sun.png" onclick="toggleTheme()"/>';

    if (body.classList.contains("body-dark")) {
      body.classList.remove("body-dark");
      body.classList.add("body-light");
      icons.innerHTML = moonIcon;
    } else {
      body.classList.remove("body-light");
      body.classList.add("body-dark");
      icons.innerHTML = sunIcon;
    }
  }