//your JS code here. If required.
function getDOMLevel(elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
        alert("Element with id " + elementId + " not found.");
        return;
    }

    let level = 0;
    let currentNode = element;

    while (currentNode !== document.documentElement) {
        currentNode = currentNode.parentElement;
        level++;
    }

    // Include the root HTML element in the level count
    level++;

    alert("The level of the element is: " + level);
}

// Call the function with the desired element ID
getDOMLevel("level");
