import React, { useState } from 'react';
import '../contact-form.css';
import { ImArrowLeft2 } from "react-icons/im";



const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://getform.io/f/b62bd12a-3662-484e-860b-01f755153839', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setMessage('// Form submitted successfully.');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setMessage('// Form submission failed.');
      }
    } catch (error) {
      setMessage('// There was an error submitting the form.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='bg-[#0a192f] relative -z-10 pt-32 sm:pt-0'>
      
      <div className=' absolute left-[10%] top-[30%] flex transform -rotate-45 invisible sm:visible'>
        <ImArrowLeft2 className='text-cyan-300 text-2xl'/>
        <p className='text-gray-300 text-xl ml-4'>Or find me here!</p>
        
      </div>


      <div name='contact' className=' w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>     
        <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Send me a message</p>
          </div>
          <div className='input-group'>
            <input
              className='p-2 bg-[#0a192f]'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>
          <div className='input-group'>
            <input
              className='p-2 bg-[#0a192f]'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <textarea
            className='mt-4 bg-[#ccd6f6] p-2'
            name='message'
            rows='10'
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            required
          />

          {!isSubmitted && (
            <button className='text-white border-2 hover:bg-cyan-400 hover:border-cyan-400 px-4 py-3 my-8 mx-auto flex items-center'>
              Send Message
            </button>
          )}
          <p className='text-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
