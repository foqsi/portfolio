import React from 'react'
import '../contact-form.css'


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/b62bd12a-3662-484e-860b-01f755153839" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below to send me a message</p>
        </div>
        <div className='input-group'>
          <input className='p-2 bg-[#0a192f]' type="text" name='name' required />
          <label for="">Name</label>
        </div>
        <div className='input-group'>
          <input className='p-2 bg-[#0a192f]' type="email" name='email' required />
          <label for="">Email</label>
        </div>
        <textarea className='mt-4 bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-cyan-400 hover:border-cyan-400 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact