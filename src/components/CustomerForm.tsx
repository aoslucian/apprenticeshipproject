import { useState } from "react";
// import { useReCaptcha } from "next-recaptcha-v3";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    // email: "",
    subject: "",
    message: "",
  });

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleChange = (event: { target: { name: any; value: any } }) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  // const { executeRecaptcha } = useReCaptcha();
  // const [notifcation, setNotifcation] = useState("");
  /////////////////////////////////////
  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   console.log(formData);
  // Generate ReCaptcha token
  // const token = await executeRecaptcha("form");
  // Attach generated token to your API requests and validate it on the server
  // const res = await fetch(
  //   "https://contact-forms-serverless.adopstar.dev/api/apprenticeshipproject",
  //   {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       data: formData,
  //       token,
  //     }),
  //   }
  // );
  // setFormData({ name: "", email: "", subject: "", message: "" });
  // if (res.status !== 200) return alert("failed");
  // else alert("Thank you for your message!");
  //   res.status == 200
  //     ? setNotifcation("Message sent. Thank you!")
  //     : setNotifcation("Failed to send message, please try again later.");
  // };

  return (
    <div className=" m-auto  max-w-6xl justify-self-center bg-[#1f2026]">
      <h1
        className="mb-[1rem] mt-[2.5rem] text-left text-xl font-normal 
          text-white  md:mt-[3.2rem] "
      >
        New customer
      </h1>
      <div className="mx-[5%]  md:mx-3  lg:mx-6">
        <form
          // onSubmit={handleSubmit}
          id="form"
          className=" m-auto  my-[2rem] flex  max-w-6xl flex-col justify-center indent-1.5 "
        >
          <input
            className="my-[.5rem] bg-[#f6f6f6] p-3 text-[#444] outline-none focus:border-b-2 focus:border-[#cf2e2e] focus:bg-white "
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            value={formData.name}
            // onChange={handleChange}
            required
          />

          <input
            className="my-[.5rem] bg-[#f6f6f6] p-3 text-[#444] outline-none focus:border-b-2 focus:border-[#cf2e2e] focus:bg-white "
            type="email"
            id="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            // onChange={handleChange}
            required
          />
          <input
            className="my-[.5rem] bg-[#f6f6f6] p-3 text-[#444] outline-none focus:border-b-2 focus:border-[#cf2e2e] focus:bg-white "
            id="subject"
            placeholder="subject"
            name="subject"
            value={formData.subject}
            // onChange={handleChange}
            required
          />
          <textarea
            className="my-[.5rem] bg-[#f6f6f6] p-3 text-[#444] outline-none focus:border-b-2 focus:border-[#cf2e2e] focus:bg-white "
            id="textarea"
            placeholder="Tell us about your query"
            name="message"
            value={formData.message}
            // onChange={handleChange}
            rows={10}
            required
          />

          <button
            className="my-[.5rem] w-[10rem] rounded-[5px] bg-[#f5a600] px-[20px] py-[10px] text-[14px] font-semibold
                    text-['Roboto'] text-white outline-none hover:bg-[#333] md:text-[16px]"
            type="submit"
          >
            Send Message
          </button>
        </form>
        {/* <p className="mt-8">{notifcation}</p> */}
      </div>
    </div>
  );
};
export default CustomerForm;
