import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Single from "./Single";

const Home = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center my-4 space-y-2">
                <h1 className="text-2xl font-semibold">All Users: {users.length}</h1>
                <Link className="text-[#e4aa3f] font-bold uppercase" to="/add">Add New</Link>
            </div>
            <div className="w-full md:w-4/5 lg:w-8/12  space-y-2">
                {
                    users.map((user, id) => <Single key={user.id} id={id + 1} user={user}></Single>)
                }
            </div>
        </div>
    );
};

export default Home;