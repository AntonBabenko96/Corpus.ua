import NavBarItems from '../NavBarItems';
import s from './Dropdown.module.scss';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? s.dropdownSubmenu : '';

  return (
    <ul
      className={`${s.dropdownMenu} ${dropdownClass} ${dropdown ? s.show : ''}`}
    >
      {submenus.map((submenu, index) => (
        <NavBarItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
