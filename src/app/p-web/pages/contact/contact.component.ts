import { Component } from '@angular/core';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  service: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: false,
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formState: ContactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: '',
  };
  isSubmitting = false;
  isSubmitted = false;

  // FAQ data
  faqs = [
    {
      question: 'What areas do you serve?',
      answer:
        'We provide industrial electrical services throughout Vietnam, with a focus on major industrial centers including Ho Chi Minh City, Hanoi, Da Nang, and surrounding areas.',
    },
    {
      question: 'How quickly can you respond to service requests?',
      answer:
        'For standard service requests, we typically respond within 24-48 hours. For emergency services, we offer a rapid response time of 2-4 hours depending on your location.',
    },
    {
      question: 'Do you provide free consultations?',
      answer:
        'Yes, we offer free initial consultations to discuss your project requirements and provide a general overview of our approach. Detailed assessments may require a fee, which is credited towards your project if you choose to work with us.',
    },
    {
      question: 'What warranties do you offer on your work?',
      answer:
        "We provide a standard 1-year warranty on all our installation work and services. For specific products, warranty periods may vary according to the manufacturer's terms.",
    },
    {
      question: 'How do you ensure safety in your projects?',
      answer:
        'Safety is our top priority. We adhere to strict safety protocols, conduct regular safety training for our team, and implement comprehensive risk assessment procedures for every project. All our work complies with national and international safety standards.',
    },
  ];

  handleSubmit(): void {
    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.formState = {
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: '',
      };
    }, 1500);
  }

  resetForm(): void {
    this.isSubmitted = false;
  }
}
