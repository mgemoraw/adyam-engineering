
import {memo} from 'react';

interface SearchProps {
    onChange: (text: string) => void;
}

function Search({onChange}: SearchProps) {
    // nothing

    return (
        <div className="flex items-center justify-center w-full">
            <input 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type='text'
                placeholder="Search users..."
                onChange={(e)=>onChange(e.target.value)}
                />
        </div>
    );
}

export default memo(Search);
