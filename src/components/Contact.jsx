import React from "react";
import Lottie from 'react-lottie';
import animationData from './../../public/contact.json';

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "codeaprogram@gmail.com" },
    { logo: "logo-whatsapp", text: "123 456 780" },
    {
      logo: "location",
      text: "demo location",
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    // <section id="contact" className="py-10 px-3 text-white">
    //   <div className="text-center mt-8">
    //     <h3 className="text-4xl font-semibold">
    //       Contact <span className="text-cyan-600">Me</span>
    //     </h3>
    //     <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

    //     <div
    //       className="mt-16 flex md:flex-row flex-col
    //      gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
    //     >
    //       <form className="flex flex-col flex-1 gap-5">
    //         <input type="text" placeholder="Your Name" />
    //         <input type="Email" placeholder="Your Email Address" />
    //         <textarea placeholder="Your Message" rows={10}></textarea>
    //         <button className="btn-primary w-fit">Send Message</button>
    //       </form>
    //       <div className="flex flex-col  gap-7 ">
    //         {contact_info.map((contact, i) => (
    //           <div
    //             key={i}
    //             className="flex flex-row  
    //               text-left gap-4 flex-wrap items-center"
    //           >
    //             <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
    //               <ion-icon name={contact.logo}></ion-icon>
    //             </div>
    //             <p className="md:text-base text-sm  break-words">
    //               {contact.text}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section class="bg-white dark:bg-gray-200">
    <div class="container px-6 py-12 mx-auto">
        <div class="lg:flex lg:items-center lg:-mx-6">
            <div class="lg:w-1/2 lg:mx-6">
            <Lottie options={defaultOptions}
              height={500}
              width={500}/>
            </div>

            <div class="mt-8 lg:w-1/2 lg:mx-6">
                <div
                    class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                    <h1 class="text-lg font-medium text-gray-700">What do you want to ask</h1>

                    <form class="mt-6">
                        <div class="flex-1">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 mt-6">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="w-full mt-6">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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
