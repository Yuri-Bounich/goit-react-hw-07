import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  // console.log('Contacts:', contacts);

  const filter = useSelector(selectNameFilter);

  const filteredData = contacts.filter(
    item => item.name && item.name.toLowerCase().includes(filter.toLowerCase())
  );
  // console.log(filteredData);

  if (!contacts.length) {
    return <p>No contacts available</p>; // Повідомлення, якщо список порожній
  }
  return (
    <div className={s.cotainer}>
      <ul className={s.block}>
        {filteredData.map(item => (
          <Contact {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
