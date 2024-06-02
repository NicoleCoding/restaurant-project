
// The module for the home page.
export function getHome() {
    const homeContent = document.createElement('div');

    const homeHeading2 = document.createElement('h2');
    homeHeading2.textContent = "Welcome to Restaurant Luigi!";
    const introHomeContainer = document.createElement('div');
    introHomeContainer.setAttribute('id', 'intro');
    const homeIntro = document.createElement('p');
    homeIntro.setAttribute('id', 'introductiontext');
    homeIntro.textContent = "Step into our restaurant and experience the true essence of Italian cooking. From homemade pasta crafted with the finest flour to wood-fired pizzas topped with the freshest ingredients, each dish is a celebration of Italy's culinary traditions. Our menu showcases a diverse array of antipasti, primi, secondi, and dolci, all prepared with passion and precision.";
    introHomeContainer.appendChild(homeIntro);

    homeContent.appendChild(homeHeading2);
    homeContent.appendChild(introHomeContainer);

    return homeContent;
}