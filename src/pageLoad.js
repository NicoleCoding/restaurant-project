import { getHome } from './pages/home';
import { getMenu } from './pages/menu';
import { getContact } from './pages/contact';

// Module which loads the page. 
export function pageLoad() {
    // Creates the header and adds relevant content inside the header.
    const header = document.createElement('header');
    const headerText = document.createElement('h1');
    headerText.textContent = "Restaurant Luigi";
    header.appendChild(headerText);
    // Creates the navigation.
    const nav = document.createElement('nav');
   
    // Reference to the content element.
    const contentElement = document.getElementById('content');
    
    // Appends the header and nav to the content element.
    contentElement.appendChild(header);
    contentElement.appendChild(nav);
    
    // Retrieves the content for the home, menu and contact pages.
    const homeContent = getHome();
    const menuContent = getMenu();
    const contactContent = getContact();
    
    // Appends the home, menu and contact content to the content element. 
    contentElement.appendChild(homeContent);
    contentElement.appendChild(menuContent);
    contentElement.appendChild(contactContent);
}