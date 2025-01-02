import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import './Contact.css';  // External CSS for background and form styling
import Footer from './Footer';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_message: '',
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
      user_email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      user_message: Yup.string()
        .min(10, 'Message must be at least 10 characters long')
        .required('Message is required'),
    }),
    onSubmit: (values, { resetForm, setSubmitting, setStatus }) => {
      emailjs
        .send(
          'service_ychg6bg', // Replace with your service ID
          'template_lt092ss', // Replace with your template ID
          values,
          'M5i5Eq_N1JTAfTTAV' // Replace with your user ID
        )
        .then(
          () => {
            setStatus({ success: true });
            alert('Message sent successfully!');
            resetForm();
            setSubmitting(false);
          },
          (error) => {
            console.error('Error sending email:', error);
            setStatus({ success: false });
            setSubmitting(false);
          }
        );
    },
  });

  return (
    <>
      <div id="contact" className="container-fluid">
      <div className="row">
        {/* Background Image Section */}
        <div className="col-12 d-flex  align-items-center contact-background">
          <div className="contact-form-wrapper">
            <h2 className="text-center text-white">Get in Touch</h2>
            <p className="text-center text-white">I would love to hear from you! Let’s collaborate or discuss your ideas.</p>

            {/* Form */}
            <form onSubmit={formik.handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="user_name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className={`form-control ${formik.touched.user_name && formik.errors.user_name ? 'is-invalid' : ''}`}
                    value={formik.values.user_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.user_name && formik.errors.user_name && (
                    <div className="invalid-feedback">{formik.errors.user_name}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="user_email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    className={`form-control ${formik.touched.user_email && formik.errors.user_email ? 'is-invalid' : ''}`}
                    value={formik.values.user_email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.user_email && formik.errors.user_email && (
                    <div className="invalid-feedback">{formik.errors.user_email}</div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="user_message" className="form-label">Message</label>
                <textarea
                  id="user_message"
                  name="user_message"
                  className={`form-control ${formik.touched.user_message && formik.errors.user_message ? 'is-invalid' : ''}`}
                  rows="4"
                  value={formik.values.user_message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.user_message && formik.errors.user_message && (
                  <div className="invalid-feedback">{formik.errors.user_message}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
     
    </div>
    <Footer/>
    </>
  
  );
};

export default Contact;
