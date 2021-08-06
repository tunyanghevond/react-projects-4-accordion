import { useState } from "react";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";
const Questions = ({ info, title }) => {
  const [addInfo, setAddInfo] = useState(false);

  return (
    <article className="cart">
      <h4 className="asd">
        <p> {title}</p>
        <button className="btn" onClick={() => setAddInfo(!addInfo)}>
          {addInfo ? <AiOutlineMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </h4>
      {addInfo && <p>{info}</p>}
    </article>
  );
};

export default Questions;
