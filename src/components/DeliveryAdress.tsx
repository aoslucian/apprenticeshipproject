import Link from "next/link";

export default function Delivery() {

  return (
    <div className="bg-[#1f2026]">
    <div className="flex flex-col max-w-md mx-auto min-h-[100vh] align-start justify-center ">
      <div className="flex flex-col md:flex-row  justify-center items-center">

    
      <form>

      <label htmlFor="name" className="text-white flex">Post Code</label>
      <input
        className="my-2 bg-[#f6f6f6] p-3 text-[#444] outline-none focus:border-b-2 focus:border-[#cf2e2e] focus:bg-white"
        id="phone"
        type="tel"
        placeholder="Postcode"
        name="phone"
        // value={FormData.tel}
        // onChange={handleChange}
          />
        {/* </div> */}

      {/* <div className="flex flex-col md:flex-row  justify-center items-center"> */}
 
      <label htmlFor="price" className="text-white flex">Price for delivery</label>
      <input
        className="my-2 bg-[#f6f6f6] p-3 text-[#444] outline-none focus:border-b-2 focus:border-[#cf2e2e] focus:bg-white"
        id="price"
        type="text"
        placeholder="Price for delivery"
        name="price"
        // value={FormData.tel}
        // onChange={handleChange}
      
        />
        
        </form>
        </div>
        <div className="flex flex-row align-bottom justify-center text-white my-6">
                    <div className="mr-12 space-y-2 flex flex-col">
                        <p>If delivery is not possible</p>
                        <p> Recomand pick up:</p>
                    </div>

                    <div className="ml-12 space-y-10 flex flex-col">
                    <Link className="py-4 px-6 bg-green-800 rounded-xl " href="/new-order">Procede</Link>
                    <Link className="py-4 px-6 bg-red-600 rounded-xl " href="/">Quit Order</Link>
                  </div>
        </div>
    </div>
    </div>
  );
}
