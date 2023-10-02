'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import Loading from './Loading';
import Error from './Error';

const Dashboard = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <Loading />;
    if (error) return <Error />;
    
    console.log(user)

    return (
        user && (
            <div className="flex flex-col w-64 h-screen bg-zinc-50">
                <div className="flex flex-row items-center p-4 space-x-4 border-b border-gray-300">
                    <img src={user.picture || "/dir/to/default/asset"} alt={user.name || "Profile Name"} className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"/>
                    <h2>{user.name}</h2>
                    <a href="/api/auth/logout">Logout</a>
                </div>
                <ul className="flex-1 overflow-y-auto">
                    <li className="p-4 border-b border-gray-300">Chat 1</li>
                    <li className="p-4 border-b border-gray-300">Chat 2</li>
                    <li className="p-4 border-b border-gray-300">Chat 3</li>
                    <li className="p-4 border-b border-gray-300">Chat 4</li>
                    <li className="p-4 border-b border-gray-300">Chat 5</li>
                    <li className="p-4 border-b border-gray-300">Chat 6</li>
                    <li className="p-4 border-b border-gray-300">Chat 7</li>
                    <li className="p-4 border-b border-gray-300">Chat 8</li>
                    <li className="p-4 border-b border-gray-300">Chat 9</li>
                    <li className="p-4 border-b border-gray-300">Chat 10</li>
                    <li className="p-4 border-b border-gray-300">Chat 11</li>
                    <li className="p-4 border-b border-gray-300">Chat 12</li>
                    <li className="p-4 border-b border-gray-300">Chat 13</li>
                </ul>
            </div>
        )
    );
}

export default Dashboard;