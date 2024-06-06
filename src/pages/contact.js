// Module for the contact page.
export function getContact() {
    const contactContent = document.createElement('div');

    const contactHeading2 = document.createElement('h2');
    contactHeading2.textContent = "Contact us";
    const contactForm = document.createElement('form');
    const contactName = document.createElement('input');
    contactName.type = 'text';
    contactName.name = 'name';
    contactName.placeholder = 'Your name';
    const contactEmail = document.createElement('input');
    contactEmail.type = 'email';
    contactEmail.name = 'email';
    contactEmail.placeholder = 'Your email';
    const contactPhone = document.createElement('input');
    contactPhone.type = 'tel';
    contactPhone.name = 'phone';
    contactPhone.placeholder = 'Your phonenumber';
    const submitButton = document.createElement('submit');
    submitButton.setAttribute('id', 'submitbutton');
    submitButton.type = 'submit';
    submitButton.textContent = "Submit";
    contactForm.appendChild(contactName);
    contactForm.appendChild(contactEmail);
    contactForm.appendChild(contactPhone);
    contactForm.appendChild(submitButton);

    contactContent.appendChild(contactHeading2);
    contactContent.appendChild(contactForm);


    return contactContent;
}