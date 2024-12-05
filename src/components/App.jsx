// import contactsData from '../assets/contacts.json';
import ContactForm from './ContactForm/ContactForm';
import '../index.css';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
// import { nanoid } from 'nanoid';

const App = () => {
  // запит 2) встановл діспатч та юзефект для виконання запиту після рендеру
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts()); // Виклик dispatch
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
