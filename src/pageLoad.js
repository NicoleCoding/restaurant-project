import { getHome } from './pages/home';
import { getMenu } from './pages/menu';
import { getContact } from './pages/contact';

// Module which loads the page. 
export function pageLoad(currentTab) {
   
    // Reference to the content element.
    const contentElement = document.getElementById('content');

    contentElement.textContent = '';


    // Initially, the content element is cleared. Then it checks which tab was selected and renders the correct tab. 
function renderContent() {

    if(currentTab === 'home') {
        contentElement.appendChild(getHome());
    }
    else if(currentTab === 'menu') {
        contentElement.appendChild(getMenu());
    }
    else {
        contentElement.appendChild(getContact());
    }

}
    
renderContent();
}