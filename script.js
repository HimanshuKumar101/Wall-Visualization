const numWalls = document.getElementById("numWalls");

const wallHeight = document.getElementById("wallHeight");

const wallContainer = document.getElementById("wallContainer");

const resultLeft = document.getElementById("resultLeft");
const resultRight = document.getElementById("resultRight");

function generateWalls() {
  const numWallsValue = parseInt(numWalls.value, 10);
  const wallHeightValue = wallHeight.value; //  Get the wall height value as a string

  const split_values = wallHeightValue.split("#"); // Split the string by the '#' character
  console.log(split_values);

  if (split_values.length !== numWallsValue) {
    alert(
      "The number of walls does not match the number of heights provided. Please check your input."
    );
    return;
  }

  for (const value of split_values) {
    if (parseInt(value, 10) <= 0) {
      alert("The wall height values must be greater than 0.");
      return;
    }
  }

  wallContainer.innerHTML = ""; // Clear previous walls

  for (const height of split_values) {
    const wall = document.createElement("div");
    wall.className = "wall";
    wall.style.height = height * 100 + "px"; // Set the height of the wall
    wallContainer.appendChild(wall);
  }

  // Variable setup
  let visibleFromLeft = 0;
  let maxLeft = 0;

  // Left to right check
  for (const height of split_values) {
    const h = parseInt(height, 10);
    if (h > maxLeft) {
      visibleFromLeft++;
      maxLeft = h;
    }
  }

  // Variable setup for right
  let visibleFromRight = 0;
  let maxRight = 0;

  // Right to left check
  for (let i = split_values.length - 1; i >= 0; i--) {
    const h = parseInt(split_values[i], 10);
    if (h > maxRight) {
      visibleFromRight++;
      maxRight = h;
    }
  }

  // Set the results
  resultLeft.innerHTML = "Visible from Left: " + visibleFromLeft;
  resultRight.innerHTML = "Visible from Right: " + visibleFromRight;
}
