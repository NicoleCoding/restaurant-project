// Module for the contact page.
export function getContact() {
    // Elements declarations
    const contactContent = document.createElement('div');
    const contactHeading = document.createElement('h2');
    const contactForm = document.createElement('form');
    const contactName = document.createElement('input');
    const contactEmail = document.createElement('input');
    const contactPhone = document.createElement('input');
    const submitButton = document.createElement('submit');

    // Adding content and setting attributes for the elements
    contactHeading.textContent = "Contact us";
    contactName.type = 'text';
    contactName.name = 'name';
    contactName.placeholder = 'Your name';
    contactEmail.type = 'email';
    contactEmail.name = 'email';
    contactEmail.placeholder = 'Your email';
    contactPhone.type = 'tel';
    contactPhone.name = 'phone';
    contactPhone.placeholder = 'Your phonenumber';
    submitButton.setAttribute('id', 'submitbutton');
    submitButton.type = 'submit';
    submitButton.textContent = "Submit";

    // Appending the elements to the contact form and then to the contact content
    contactForm.appendChild(contactName);
    contactForm.appendChild(contactEmail);
    contactForm.appendChild(contactPhone);
    contactForm.appendChild(submitButton);
    contactContent.appendChild(contactHeading);
    contactContent.appendChild(contactForm);

    return contactContent;
}