import css from './ContactList.module.css';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, onRemove, children }) => {
  return (
    <div className={css.card}>
      <h2 className={css.title}>Contacts</h2>
      {children}
      <ul className={css.list}>
        {contacts.length === 0 ? null : (
          <>
            {contacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <p>
                    <span>{name} : </span>
                    {number}
                  </p>
                  <button
                    className={css.btn}
                    onClick={() => {
                      onRemove(id);
                    }}
                  >
                    ⛌
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};
ContactList.propTypes = {
  id: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
};
