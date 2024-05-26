import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <div className="mockup-browser border border-base-300">
        <div className="">
          <div className="input border border-base-300 text-center">
            {user.displayName}
          </div>
        </div>
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
          <div className="avatar">
            <div className="w-12 rounded-full border-2 border-black">
              <img src={user?.photoURL || "/public/placeholder.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
