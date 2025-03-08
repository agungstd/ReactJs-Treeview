import { useCallback, useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import axios from "axios";

const Sidebar = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await axios.get("/menu");
      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load menu items. Please try again later.");
      return [];
    } finally {
      setIsLoading(false);
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
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {!isLoading && !error && items.length === 0 && (
        <div className="empty">No menu items found</div>
      )}
      {items.map((item, index) => (
        <SidebarItem key={item.id || index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;