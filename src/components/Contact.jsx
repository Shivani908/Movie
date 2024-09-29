import React from 'react'
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4c2ecaf1-2a33-4457-bdc7-70bc6acf5120");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "You clicked the button!",
        icon: "success"
      });
    }
  }
  return (
    <section  className='contact w-[50%] h-[80%] bg-white ml-72 mt-24'>
      <form className='px-10 text-l' onSubmit={onSubmit}> 
        <h2 className='text-black font-semibold  text-2xl mt-5'>Contact Form </h2>
        <div className='input-box mt-5'>
          <label className='text-black'>Full Name</label>
          <br />
          <input name='name' type="text" className='field w-[25vw]  outline outline-2 outline-zinc-300 ...' placeholder='Enter your name' required  />
        </div>
        <div className='input-box mt-10'>
        <label className='text-black '>Email Address</label>
        <br />
        <input name='email' type="email" className='field  w-[25vw]  border-black outline outline-2 outline-zinc-300 ...' placeholder='Enter your email'equired  />
        </div>
        <div className='input-box mt-10'>
        <label className='text-black'>Your message</label>
        <br />
        <textarea name='message' className='field mess w-[25vw] h-[20vh]  outline outline-2 outline-zinc-300 ...' placeholder='Enter Your message' required></textarea>
        </div>
        <button  className='text-black  bg-blue-400 w-[10vw] h-[6vh] mt-5' type='submit '>Send</button>
      </form>
    </section>
  )
}

export default Contact