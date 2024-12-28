import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear user authentication state
      setAuthUser(null);
      localStorage.removeItem("Users");
      toast.success("Logged out successfully!");

      // Optionally redirect or refresh
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Logout Error:", error); // Log error for debugging
      toast.error(`Error during logout: ${error.message}`);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
        aria-label="Logout"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
