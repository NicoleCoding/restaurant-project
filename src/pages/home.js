
// The module for the home page.
export function getHome() {
    // Elements declarations
    const homeContent = document.createElement('div');
    const homeHeading = document.createElement('h2');
    const introHomeContainer = document.createElement('div');
    const homeIntro = document.createElement('p');

    // Adding content to the elements
    homeHeading.textContent = "Welcome to Restaurant Luigi!";
    introHomeContainer.setAttribute('id', 'intro');
    homeIntro.setAttribute('id', 'introductiontext');
    homeIntro.textContent = "Step into our restaurant and experience the true essence of Italian cooking. From homemade pasta crafted with the finest flour to wood-fired pizzas topped with the freshest ingredients, each dish is a celebration of Italy's culinary traditions. Our menu showcases a diverse array of antipasti, primi, secondi, and dolci, all prepared with passion and precision.";
    
    // Appending the elements to the home content
    introHomeContainer.appendChild(homeIntro);
    homeContent.appendChild(homeHeading);
    homeContent.appendChild(introHomeContainer);

    return homeContent;
}