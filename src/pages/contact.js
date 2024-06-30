import { pageLoad } from '../pageLoad';

// Module for the contact page.
export function getContact() {
    // Elements declarations
    const contactContent = document.createElement('div');
    const contactHeading = document.createElement('h2');
    const contactText = document.createElement('p');
    const contactForm = document.createElement('form');
    const contactName = document.createElement('input');
    const contactEmail = document.createElement('input');
    const contactPhone = document.createElement('input');
    const contactComment = document.createElement('textarea');
    const submitButton = document.createElement('submit');
    const backToHomeButton = document.createElement('button');

    // Adding content and setting attributes for the elements
    contactHeading.textContent = "Contact us";
    contactText.textContent = "Do you want to book a reservation? Or do you have any questions? Reach out to us through the form below."
    contactName.type = 'text';
    contactName.name = 'name';
    contactName.placeholder = 'Name';
    contactEmail.type = 'email';
    contactEmail.name = 'email';
    contactEmail.placeholder = 'E-mail';
    contactPhone.type = 'tel';
    contactPhone.name = 'phone';
    contactPhone.placeholder = 'Phone number';
    contactComment.placeholder = 'Write your message here...';
    contactComment.rows = '5';
    contactComment.cols = '80';
    contactComment.maxLength = '500';
    submitButton.setAttribute('class', 'button');
    submitButton.type = 'submit';
    submitButton.textContent = "Submit";
    backToHomeButton.textContent = "Go back to home";
    backToHomeButton.setAttribute('class', 'button');
    backToHomeButton.addEventListener('click', (e) => {
        e.preventDefault();
        pageLoad('home');
        
    });

    // Appending the elements to the contact form and then to the contact content
    contactContent.appendChild(backToHomeButton);
    contactForm.appendChild(contactName);
    contactForm.appendChild(contactEmail);
    contactForm.appendChild(contactPhone);
    contactForm.appendChild(contactComment);
    contactForm.appendChild(submitButton);
    contactContent.appendChild(contactHeading);
    contactContent.appendChild(contactText);
    contactContent.appendChild(contactForm);

    return contactContent;
}