import { getHome } from './pages/home';
import { getMenu } from './pages/menu';
import { getContact } from './pages/contact';

// Module which loads the page. 
export function pageLoad() {
   
    // Reference to the content element.
    const contentElement = document.getElementById('content');
    
    
    // Retrieves the content for the home, menu and contact pages.
    const homeContent = getHome();
    const menuContent = getMenu();
    const contactContent = getContact();
    
    // Appends the home, menu and contact content to the content element. 
    contentElement.appendChild(homeContent);
    contentElement.appendChild(menuContent);
    contentElement.appendChild(contactContent);
}