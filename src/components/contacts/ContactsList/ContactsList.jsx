import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, List, Name, Item } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContacts }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Name>
          {name} : {number}
        </Name>
        <Button onClick={() => onDeleteContacts(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onRemove: PropTypes.func,
};
