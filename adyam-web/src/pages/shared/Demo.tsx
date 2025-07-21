import {useState, useCallback} from 'react';
import {shuffle} from '../../utils/shuffle';

import Search from "./Search";

const allUsers = [
    'john',
    'alex',
    'gorge',
    'simon',
    'james',
];

interface DemoProps {}

export default function Demo({}:DemoProps) {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback((text:string) => {
        const filteredUsers = allUsers.filter(user => user.includes(text),);
        setUsers(shuffle(filteredUsers));
    }, [users]);

    return (
        <div className="flex flex-col gap-4">
            <Search onChange={handleSearch} />
            <button onClick={() => setUsers(shuffle(allUsers))} className="p-2 bg-blue-500 text-primary rounded-md">  
            Shuffle</button>
            <div className=" flex-col gap-2">
                {users.map((user, index) => (
                    <div key={index} className="p-2 bg-gray-100 rounded-md">
                        {user}
                    </div>
                ))}
            </div>
        </div>
    );
}