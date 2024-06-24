import Image from "next/image";
import LogoutButton from "../LogoutButton";
import useUserStore from "../useUserStore";

const UserMenu = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated );
  const imageUrl = "/public/images/avatar.svg";

  if (!isAuthenticated) {
    return null;
  }

    return (
      <div className="dropdown dropdown-end sm:block px-2">
      <button tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
            alt="User Profile"
            src="/images/avatar.svg"
            width={40} // Add the width of the image
            height={40} // Add the height of the image
            className="rounded-full bg-white"
          />
        </div>
      </button>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a href="#" className="justify-between">
            Profile<span className="badge">New</span>
          </a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
    );
  };
  
  export default UserMenu;
  