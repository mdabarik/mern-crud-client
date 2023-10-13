import { Link } from 'react-router-dom';

const Single = ({id, user}) => {
    return (
        <div className="px-4 py-2 bg-base-200 border-[1px] rounded-md flex items-center justify-between">
            <div className="flex items-center justify-center space-x-2">
                <p className="text-sm">{id}.</p>
                <p className="text-sm">{user.name}</p>
            </div>
            <p className="text-sm">{user.email}</p>
            <Link to={`/edit/${id}`} className="text-sm">Edit</Link>
            <button className="text-[red]">X</button>
        </div>
    );
};

export default Single;