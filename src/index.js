import { pageLoad } from './pageLoad';
import './style.css';

// Nav element gets assigned to a constant.
const navElement = document.querySelector('nav');

// Sets the current tab to home initially.
let currentTab = 'home';

// Calls the event that is bound to the nav.
navEvent();

// Event attached to the nav, which enables the functionality for changing tabs.
function navEvent() {
    navElement.addEventListener('click', changeTabs);
}

// Checks whether current tab is the current, else it assigns to the clicked tab and renders the clicked tab.
function changeTabs(event) {
    if (!event.target || currentTab === event.target.id) return;

    currentTab = event.target.id;

    pageLoad(currentTab);
}

// Loads the page.
pageLoad(currentTab);




