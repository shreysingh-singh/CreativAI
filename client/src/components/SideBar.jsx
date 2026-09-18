import { useClerk, useUser } from "@clerk/react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PenLine,
  Image,
  Eraser,
  ScanSearch,
  FileText,
  Users,
  LogOut,
  X,
} from "lucide-react";

function SideBar({ sideBar, setSideBar }) {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/ai/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Write Article",
      path: "/ai/write-article",
      icon: PenLine,
    },
    {
      name: "Generate Images",
      path: "/ai/generate-images",
      icon: Image,
    },
    {
      name: "Remove Background",
      path: "/ai/remove-background",
      icon: Eraser,
    },
    {
      name: "Remove Object",
      path: "/ai/remove-object",
      icon: ScanSearch,
    },
    {
      name: "Review Resume",
      path: "/ai/review-resume",
      icon: FileText,
    },
    {
      name: "Community",
      path: "/ai/community",
      icon: Users,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={() => setSideBar(false)}
        className={`
          fixed inset-0 bg-black/20 backdrop-blur-sm z-30
          sm:hidden
          transition-opacity duration-300
          ${
            sideBar
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
    w-64
    shrink-0
    bg-white
    border-r border-gray-200
    flex flex-col

    max-sm:absolute
    max-sm:top-0
    max-sm:left-0
    max-sm:h-full
    max-sm:z-40

    transition-transform
    duration-300
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${sideBar ? "translate-x-0" : "max-sm:-translate-x-full"}
  `}
      >
        {/* Logo / Header */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-gray-100">
          {/* Mobile Close */}
          <button
            onClick={() => setSideBar(false)}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* User */}
        <div className="px-4 md:-mt-15 pb-5">
          <button
            onClick={openUserProfile}
            className="
              w-full
              flex items-center gap-3
              p-3
              rounded-xl
              hover:bg-gray-50
              transition-all duration-200
              text-left
            "
          >
            <img
              src={user?.imageUrl}
              alt={user?.firstName || "User"}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {user?.firstName}
              </p>

              <p className="text-xs text-gray-400 truncate">AI Creator</p>
            </div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 overflow-y-auto">
          <p className="px-3 mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            AI Tools
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSideBar(false)}
                  className={({ isActive }) => `
                    group
                    flex items-center gap-3
                    px-3 py-2.5
                    rounded-xl
                    text-sm
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`
                          w-5 h-5
                          transition-transform duration-200
                          group-hover:scale-110

                          ${
                            isActive
                              ? "text-indigo-600"
                              : "text-gray-400 group-hover:text-gray-600"
                          }
                        `}
                      />

                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-gray-100">
          <button
            onClick={() => signOut()}
            className="
              w-full
              flex items-center gap-3
              px-3 py-2.5
              rounded-xl
              text-sm text-gray-600
              hover:bg-red-50
              hover:text-red-500
              transition-all duration-200
            "
          >
            <LogOut className="w-5 h-5" />

            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
