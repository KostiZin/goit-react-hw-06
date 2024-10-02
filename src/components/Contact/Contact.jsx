import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = ({ id, name, number, deleteContacts }) => {
  return (
    <li className={css.li}>
      <div className={css.div}>
        <p className={css.element}>
          <BsFillPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.element}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => deleteContacts(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
