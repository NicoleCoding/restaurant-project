
// The module for the home page.
export function getHome() {
    const homeContent = document.createElement('div');

    const homeText = document.createElement('p');
    const homeImage = document.createElement('img');
    homeText.textContent = "Step into our restaurant and experience the true essence of Italian cooking. From homemade pasta crafted with the finest flour to wood-fired pizzas topped with the freshest ingredients, each dish is a celebration of Italy's culinary traditions. Our menu showcases a diverse array of antipasti, primi, secondi, and dolci, all prepared with passion and precision.";
    homeImage.src = 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    homeContent.appendChild(homeText);
    homeContent.appendChild(homeImage);

    return homeContent;
}