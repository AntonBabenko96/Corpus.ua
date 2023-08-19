import Container from '../../Container/Container';
import NavBarItems from '../NavBar/NavBarItems/NavBarItems';
import items from '../navBarData.json';
import s from './BurgerMenu.module.scss';

export default function BurgerMenu({
  categories,
  showMenu,
  showInnerMenu,
  handleShowInnerMenu,
  handleHideInnerMenu,
}) {
  return (
    <div className={`${s.menuWrapper} ${showMenu ? s.show : ''}`}>
      <Container>
        <NavBar categories={categories}/>
      </Container>
    </div>
  );
}
