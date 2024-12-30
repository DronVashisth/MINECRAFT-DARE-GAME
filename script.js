// Array of Minecraft dares
const dares = [
    "Build a house using only dirt.",
    "Survive one night without a weapon.",
    "Dig straight down until you find diamonds.",
    "Tame a wolf without any bones.",
    "Stay underwater for 3 minutes using only items you find.",
    "Build a Nether portal without a diamond pickaxe.",
    "Collect 10 different types of flowers.",
    "Make a farm with 5 different animals.",
    "Defeat 5 zombies without using a sword.",
    "Trade with a villager to get an emerald.",
    "Defeat the Ender Dragon using only beds as weapons.",
    "Kill a Creeper without it exploding while using only your fists.",
    "Fight and defeat a raid without leaving the village.",
    "Build a working rollercoaster in under 15 minutes.",
    "Recreate your favorite fictional character using only blocks.",
    "Construct a secret underground bunker that includes at least three rooms.",
    "Sneak into another players base and leave a sign with a silly message.",
];

// Create a copy of the dares array to track remaining dares
let remainingDares = [...dares];

// Function to get a random dare
function getRandomDare() {
    if (remainingDares.length === 0) {
        // If all dares are used, reset the remaining dares
        remainingDares = [...dares];
        alert("You've seen all the dares! Restarting...");
    }

    // Get a random dare from the remaining ones
    const randomIndex = Math.floor(Math.random() * remainingDares.length);
    const dare = remainingDares[randomIndex];

    // Remove the used dare from the array
    remainingDares.splice(randomIndex, 1);

    return dare;
}

// Add event listener to the button
const dareButton = document.getElementById('dare-button');
const dareText = document.getElementById('dare-text');

dareButton.addEventListener('click', () => {
    const dare = getRandomDare();
    dareText.textContent = dare;
});
