// import React from "react";
// import "./account.css";
// import { MdDashboard } from "react-icons/md";
// import { IoMdLogOut } from "react-icons/io";
// import { UserData } from "../../context/UserContext";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Account = ({ user }) => {
//   const { setIsAuth, setUser } = UserData();

//   const navigate = useNavigate();

//   const logoutHandler = () => {
//     localStorage.clear();
//     setUser([]);
//     setIsAuth(false);
//     toast.success("Logged Out");
//     navigate("/login");
//   };
//   return (
//     <div>
//       {user && (
//         <div className="profile">
//           <h2>My Profile</h2>
//           <div className="profile-info">
//             <p>
//               <strong>Name - {user.name}</strong>
//             </p>

//             <p>
//               <strong>Email - {user.email}</strong>
//             </p>
//             <button
//               onClick={() => navigate(`/${user._id}/dashboard`)}
//               className="common-btn"
//             >
//               <MdDashboard />
//               Dashboard
//             </button>

//             <br />

//             {user.role === "admin" && (
//               <button
//                 onClick={() => navigate(`/admin/dashboard`)}
//                 className="common-btn"
//               >
//                 <MdDashboard />
//                 Admin Dashboard
//               </button>
//             )}

//             <br />

//             <button
//               onClick={logoutHandler}
//               className="common-btn"
//               style={{ background: "red" }}
//             >
//               <IoMdLogOut />
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Account;

import React from "react";
import "./account.css";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <section className="account-page">
      {user ? (
        <div className="account-container">
          <div className="account-header">
            <FaUserCircle className="avatar-icon" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <span className="badge">{user.role === "admin" ? "Admin" : "Student"}</span>
          </div>

          <div className="account-actions">
            <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="account-btn"
            >
              <MdDashboard /> My Dashboard
            </button>

            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="account-btn"
              >
                <MdDashboard /> Admin Dashboard
              </button>
            )}

            <button
              onClick={logoutHandler}
              className="account-btn logout-btn"
            >
              <IoMdLogOut /> Logout
            </button>
          </div>
        </div>
      ) : (
        <p className="not-logged">You are not logged in.</p>
      )}
    </section>
  );
};

export default Account;
