import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as Delete } from '../../img/iconbin.svg';

const ContactsList = ({ contact, ondeleteContact }) => (
  <ul className={css.phoneList}>
    {contact.map(({ id, name, number }) => (
      <li key={id} className={css.ContactsList}>
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
        <IconButton onClick={() => ondeleteContact(id)}>
          <Delete width="32" height="32" />
        </IconButton>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contact: PropTypes.array,
  ondeleteContact: PropTypes.func,
};
export default ContactsList;