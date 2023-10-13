import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center my-4 space-y-2">
                <h1 className="text-2xl font-semibold">All Users: {users.length}</h1>
                <Link className="text-[#e4aa3f] font-bold uppercase" to="/add">Add New</Link>
            </div>
            <div className="w-full md:w-4/5 lg:w-8/12  space-y-2">
                <div className="px-4 py-2 bg-base-200 border-[1px] rounded-md flex items-center justify-between">
                    <div className="flex items-center justify-center space-x-2">
                        <p className="text-sm">1.</p>
                        <p className="text-sm">Md. A. Barik</p>
                    </div>
                    <p className="text-sm">mdabarik@gmail.com</p>
                    <Link to="/edit" className="text-sm">Edit</Link>
                    <button className="text-[red]">X</button>
                </div>
                <div className="px-4 py-2 bg-base-200 border-[1px] rounded-md flex items-center justify-between">
                <div className="flex items-center justify-center space-x-2">
                        <p className="text-sm">2.</p>
                        <p className="text-sm">Md. A. Barik</p>
                    </div>
                    <p className="text-sm">mdabarik@gmail.com</p>
                    <Link to="/edit" className="text-sm">Edit</Link>
                    <button className="text-[red]">X</button>
                </div>
            </div>
        </div>
    );
};

export default Home;