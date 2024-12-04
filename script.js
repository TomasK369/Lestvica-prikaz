function moveUp(iconId) {

    const icon = document.getElementById(iconId);

        // Get current points
        let points = parseInt(icon.textContent) || 0;

        // Increment points
        points += 1;

        // Update the displayed points
        icon.textContent = points;


    const currentBottom = parseInt(window.getComputedStyle(icon).bottom, 10);

    icon.style.bottom = (currentBottom + 20) + "px"; // Move the icon up by 20px

  }


  function moveDown(iconId) {

    const icon = document.getElementById(iconId);

        // Get current points
        let points = parseInt(icon.textContent) || 0;

        // Decrement points (ensure it doesn't go below 0)
        points = Math.max(0, points - 1);

        // Update the displayed points
        icon.textContent = points;

    const currentBottom = parseInt(window.getComputedStyle(icon).bottom, 10);

    icon.style.bottom = (currentBottom - 20) + "px"; // Move the icon up by 20px

  }