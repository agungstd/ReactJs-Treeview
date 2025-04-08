import { useState } from "react";
import PropTypes from "prop-types";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return item.childrens && Array.isArray(item.childrens) ? (
    <div className={open ? "sidebar-item open" : "sidebar-item"}>
      <div className="sidebar-title" onClick={toggleOpen}>
        <span>
          {item.icon && <i className={item.icon}></i>}
          {item.title}
        </span>
        <i className={`bi-chevron-left toggle-btn icon-item ${open ? 'rotate' : ''}`}></i>
      </div>
      <div className="sidebar-content">
        {item.childrens.map((child, index) => (
          <SidebarItem key={index} item={child} />
        ))}
      </div>
    </div>
  ) : (
    <a href={item.path || "#"} className="sidebar-item plain">
      {item.icon && <i className={item.icon}></i>}
      {item.title}
    </a>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SidebarItem;