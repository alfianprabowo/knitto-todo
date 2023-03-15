import { useEffect, useState } from "react";

const AddButton = ({ text, handleClick }) => {
  const [num, setNum] = useState(0);

  function click() {
    setNum(num + 1);
    console.log("Clicked");
  }

  return (
    <div>
      <button onClick={click} type="button" class="text-white bg-blue-700 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 0">

        {text}
      </button>
    </div>
  )
};

export default AddButton;