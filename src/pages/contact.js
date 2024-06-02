// Module for the contact page.
export function getContact() {
    const contactContent = document.createElement('div');

    const contactHeading2 = document.createElement('h2');
    contactHeading2.textContent = "Contact us";

    contactContent.appendChild(contactHeading2);


    return contactContent;
}