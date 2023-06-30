
import { dropDown, template } from "./customerForma-data";
import { useState, type MouseEvent, type ChangeEvent, useEffect } from "react";

export default function CustomerForm() {
  const [id, setId] = useState("pere_1");

  const [inputValues, setInputValues] = useState({
    nameInput: "",
    telephoneInput: "",
    addressInput: "",
    postCodeInput: "",
    distanceInput: "",
    priceInput: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };


  function areAllFieldsCompleted() {
    return (
      inputValues.nameInput.trim() !== "" &&
      inputValues.distanceInput.trim() !== "" &&
      inputValues.addressInput.trim() !== "" &&
      inputValues.postCodeInput.trim() !== "" &&
      inputValues.telephoneInput.trim() !== "" ||
      inputValues.priceInput.trim() !== ""
    );
  }

  const handleClickSubmit = () => {
    if (areAllFieldsCompleted()) {
    setSubmitted(true);
    } else {
      alert("Please fill in all the fields");
    }
  };

  const handleClick = (e: MouseEvent<HTMLSelectElement>) => {
    const input = e.target as HTMLSelectElement;
    setId(input.value);
    setInputValues({
      nameInput: "",
      distanceInput: "",
      addressInput: "",
      postCodeInput: "",
      telephoneInput: "",
      priceInput: "",
    });
    setSubmitted(false);
  };

  const handleCopyClick = () => {
    const textarea = document.getElementById("result") as HTMLTextAreaElement;
    if (textarea) {
      textarea.select();
      document.execCommand("copy");
    }
  };

  useEffect(() => {
    if (submitted) {
      const updatedTemplate = template.find((item) => item.id === id);
      if (updatedTemplate) {
        let result = updatedTemplate.result;

        Object.entries(inputValues).forEach(([key, value]) => {
          result = result.replace(new RegExp(key, "g"), value);
        });

        const textarea = document.getElementById(
          "result"
        ) as HTMLTextAreaElement;
        if (textarea) {
          textarea.value = result;
        }
      }
    }
  }, [id, inputValues, submitted]);

  const getUpdatedTemplate = () => {
    const updatedTemplate = template.find((item) => item.id === id);
    if (updatedTemplate) {
      let result = updatedTemplate.result;

      Object.entries(inputValues).forEach(([key, value]) => {
        result = result.replace(new RegExp(key, "g"), value);
      });

      return result;
    }
    return "";
  };

  const resultTemplate = submitted ? getUpdatedTemplate() : "";

  return (
    <div className="mx-auto my-6 flex flex-col justify-center min-h-screen bg-[#303133]">
  
 

      <div className="mx-8 flex flex-col justify-center">
      

        <div className="mx-auto my-6 flex flex-col rounded-2xl border-2 border-orange-600 px-8 text-center w-[400px]">
          <div className="mt-16">
            <label htmlFor="tbselect">
              <p className="pb-2 text-xl text-white">
                Select Customer Type
              </p>
            </label>

            <select
              id="tbselect"
              className="mb-2 w-full items-center rounded-xl border-2 border-gray-200 bg-white px-4 py-2 text-centerh hover:bg-gray-300"
              onClick={handleClick}
            >
              {dropDown.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <option key={item.text} value={item.id}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="nameInput" className="text-white">NAME:</label>
            <input
              type="text"
              id="nameInput"
              className="mb-2 items-center rounded-xl border-2 px-4 py-2 shadow-lg hover:bg-gray-300 text-orange-600"
              name="nameInput"
              value={inputValues.nameInput}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="telephoneInput" className="text-white">TELEPHONE:</label>
            <input
              type="text"
              id="telephoneInput"
              name="telephoneInput"
              className="mb-2 items-center rounded-xl border-2 px-4 py-2 shadow-lg hover:bg-gray-300 text-orange-600"
              value={inputValues.telephoneInput}
              onChange={handleChange}
            />
          </div>
       

          <div className="flex flex-col">
            <label htmlFor="addressInput" className="text-white">ADDRESS:</label>
            <input
              type="text"
              id="addressInput"
              name="addressInput"
              className="mb-2 items-center rounded-xl border-2 px-4 py-2 shadow-lg hover:bg-gray-300 text-orange-600"
              value={inputValues.addressInput}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="postCodeInput" className="text-white">POST CODE:</label>
            <input
              type="text"
              id="postCodeInput"
              name="postCodeInput"
              className="mb-2 items-center rounded-xl border-2 px-4 py-2 shadow-lg hover:bg-gray-300 text-orange-600"
              value={inputValues.postCodeInput}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="distanceInput" className="text-white">DISTANCE:</label>
            <input
              type="text"
              id="distanceInput"
              name="distanceInput"
              placeholder="Distance in mi"
              className="mb-2 items-center rounded-xl border-2 px-4 py-2 shadow-lg hover:bg-gray-300 text-orange-600"
              value={inputValues.distanceInput}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="priceInput" className="text-white">DELIVERY PRICE:</label>
            <input
              type="text"
              id="priceInput"
              name="priceInput"
              className="mb-2 items-center rounded-xl border-2 px-4 py-2 shadow-lg hover:bg-gray-300 text-orange-600"
              value={inputValues.priceInput}
              onChange={handleChange}
            />
          </div>

          <div className="mx-auto my-2 flex justify-center md:my-3">
            <button
              className="m-1 rounded-2xl border-2 border-orange-600 px-5 py-1 text-sm bg-white hover:shadow-xl mr-4"
              onClick={handleClickSubmit}
            >
              SUBMIT DATA
            </button>

            <button
                 className="m-1 rounded-2xl border-2 border-orange-600 px-5 py-1 text-sm bg-white hover:shadow-xl mr-4"
              onClick={handleCopyClick}
            >
              SAVE CUSTOMER
            </button>
          </div>

          <textarea
            id="result"
            className="mb-4 rounded-2xl border-2 py-3 text-black shadow-lg hover:bg-gray-300 md:mb-8"
            rows={7}
            value={resultTemplate}
            readOnly
          ></textarea>
        </div>


      </div>
    </div>
  );
}
