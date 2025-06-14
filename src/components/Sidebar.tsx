import { NavLink } from "react-router-dom";
import {
  Home, Calendar, Star, DollarSign,
  MessageSquare, Box, ClipboardList, Users, Bed
} from "lucide-react";

const menuItems = [
  { to: "/", label: "Dashboard", icon: <Home size={20} /> },
  { to: "/reservation", label: "Reservation", icon: <Calendar size={20} /> },
  { to: "/hotels", label: "Khách sạn", icon: <Bed size={20} /> },
  { to: "/messages", label: "Messages", icon: <MessageSquare size={20} />, hasNotification: true },
  { to: "/housekeeping", label: "Housekeeping", icon: <ClipboardList size={20} /> },
  { to: "/inventory", label: "Inventory", icon: <Box size={20} /> },
  { to: "/calendar", label: "Calendar", icon: <Calendar size={20} /> },
  { to: "/financials", label: "Financials", icon: <DollarSign size={20} /> },
  { to: "/reviews", label: "Reviews", icon: <Star size={20} /> },
  { to: "/concierge", label: "Concierge", icon: <Users size={20} /> },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen shadow-md p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">StayGo Partner</h1>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-x-3 p-3 text-sm font-medium rounded-md ${
                isActive ? "text-black-600 bg-blue-200" : "text-gray-300"
              }`
            }
          >
            {item.icon}
            <span className="relative">
              {item.label}
              {item.hasNotification && (
                <span className="absolute -top-1 -right-3 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
