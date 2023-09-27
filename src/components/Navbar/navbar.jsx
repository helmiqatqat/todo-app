
import { Link } from 'react-router-dom';
import  './navbar.scss';

function BasicExample() {
  return (
  <>
  <section className='navv'>
  <Link to='/'>Home</Link>
  <Link to='/settings'>Settings</Link>


  </section>
  
  </>
  );
}

export default BasicExample;