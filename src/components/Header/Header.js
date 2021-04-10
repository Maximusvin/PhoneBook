import Layout from '../Layout/Layout';
import s from './Header.module.css';

const Header = () => (
  <header className={s.header}>
    <Layout>
      <h1 className={s.title}>Phonebook</h1>
    </Layout>
  </header>
);

export default Header;
