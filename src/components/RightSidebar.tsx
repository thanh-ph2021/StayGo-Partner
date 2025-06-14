import React, { useState, useRef, useEffect } from "react";
import { LogOut, Settings, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useAppSelector from "../hooks/useAppSelector";
import { logout, userProfile } from "../features/auth/authSlice";
import useAppDispatch from "../hooks/useAppDispatch";

const RightSidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const userCurrent = useAppSelector(userProfile);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="fixed top-0 right-0 h-screen w-16 bg-white flex flex-col items-center gap-8 py-4 shadow-inner">
      {/* Top section */}
      <div className="space-y-6">
        {/* Avatar + menu */}
        <div className="relative" ref={menuRef}>
          <img
            src={userCurrent?.avatar ?? "https://i.pravatar.cc/150?img=15"}
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer object-cover"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {menuOpen && (
            <div className="absolute top-0 right-full mr-4 w-80 bg-white rounded-2xl shadow-2xl p-5 z-50">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://i.pravatar.cc/150?img=15"
                  alt="avatar"
                  className="w-16 h-16 rounded-full border object-cover mb-2"
                />
                <p className="text-sm font-medium mb-1">{userCurrent?.email}</p>
                <p className="text-lg font-semibold">{`Chào, ${userCurrent?.fullName}`}</p>
              </div>

              <div className="flex mt-5 border-t pt-4 gap-2">
                <button
                  onClick={handleLogout}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <LogOut size={16} />
                  <span className="text-sm">Đăng xuất</span>
                </button>
              </div>

              <div className="mt-4 text-xs text-gray-400 text-center">
                <a href="#" className="hover:underline">Chính sách quyền riêng tư</a> · <a href="#" className="hover:underline">Điều khoản dịch vụ</a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <button
          className="text-gray-600 hover:text-blue-600 transition"
          onClick={() => console.log("Open notifications...")}
        >
          <Bell size={24} />
        </button>
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
      </div>

      <button
        className="text-gray-600 hover:text-blue-600 transition"
        onClick={() => console.log("Open settings...")}
      >
        <Settings size={24} />
      </button>
    </div>
  );

};

export default RightSidebar;
