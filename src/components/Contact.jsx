import React, { useRef } from "react";
import Lottie from 'react-lottie';
import animationData from './../../public/contact.json';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const dataForm = e.target;

    emailjs.sendForm('service_w2x9fgm', 'template_op3wkdg', form.current, '4QOEH-MRAB5dnGy4O')
      .then((result) => {
          console.log(result.text);
          dataForm.reset();
          toast.success('Message Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <section id="contact" className="py-10 px-3 text-white">
    <div className="container text-center mt-8 mx-auto">
    <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Lets Get in Touch</p>
        <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 hidden lg:block lg:mx-6">
            <Lottie options={defaultOptions}
              height={600}
              width={600}/>
            </div>

            <div data-aos="zoom-out-left" className="mt-8 lg:w-1/2 lg:mx-6 px-3 mb-4 text-left">
                <div
                    className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                    {/* <h1 className="text-lg font-medium text-gray-700">What do you want to ask</h1> */}

                    <form className="mt-6" ref={form} onSubmit={sendEmail}>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input type="text" placeholder="Your Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="mail@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button className="w-full px-6 py-3 mt-6 text-md tracking-wide bg-gradient-to-r from-pink-500 text-white font-semibold capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            get in touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Contact;
