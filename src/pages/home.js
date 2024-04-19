
// The module for the home page.
export function getHome() {
    const homeContent = document.createElement('div');

    const homeText = document.createElement('p');
    homeText.textContent = "Step into our restaurant and experience the true essence of Italian cooking. From homemade pasta crafted with the finest flour to wood-fired pizzas topped with the freshest ingredients, each dish is a celebration of Italy's culinary traditions. Our menu showcases a diverse array of antipasti, primi, secondi, and dolci, all prepared with passion and precision.";

    homeContent.appendChild(homeText);

    return homeContent;
}