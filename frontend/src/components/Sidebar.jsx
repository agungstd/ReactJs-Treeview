import { useCallback, useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import axios from "axios";

const Sidebar = () => {
  const [items, setItems] = useState([]);

  const getData = useCallback(async () => {
    try {
      const result = await axios.get("/menu");
      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    getData().then((data) => {
      if (isMounted) setItems(data);
    });
    return () => {
      isMounted = false;
    };
  }, [getData]);

  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
