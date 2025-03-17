/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Assignment3a from '../components/assignment3a.v2';
import Assignment3b from '../components/assignment3b.v2';

// setting localstorage for assignment v1
localStorage.setItem('cats', JSON.stringify(['Abyssinian', 'Aegean', 'American Bobtail', 'American Curl', 'American Shorthair', 'American Wirehair', 'Aphrodite Giant', 'Arabian Mau', 'Asian', 'Australian Mist', 'Balinese', 'Bambino', 'Bengal Cats', 'Birman', 'Bombay', 'Brazilian Shorthair', 'British Longhair', 'British Shorthair', 'Burmese', 'Burmilla']));

const assignment3a = new Assignment3a();
const assignment3b = new Assignment3b();

export default { assignment3a, assignment3b };