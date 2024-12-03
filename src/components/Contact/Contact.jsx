import s from './Contact.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <div className={s.i}>
        <div>
          <FaUser /> {name}
        </div>
        <div>
          <FaPhoneAlt /> {number}
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
