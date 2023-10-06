'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import Loading from './Loading';
import ErrorScreen from './ErrorScreen';
import { LogOut, Cog, PlusSquare } from 'lucide-react';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Menu } from 'lucide-react';


const Dashboard = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <Loading />;
    if (error) return <ErrorScreen />;

    console.log(user)

    return (
        user && (
            <div className="flex flex-col w-64 h-screen bg-zinc-50">
                <div className="flex flex-row items-center p-4 space-x-4 border-b border-gray-300">
                    <Menubar className="w-fit h-full">
                        <MenubarMenu>
                            <MenubarTrigger>
                                <img src={user.picture || "/dir/to/default/asset"} alt={user.name || "Profile Name"} className="w-8 h-8 p-1 rounded-full" />
                                <h3 className="truncate">{user.name}</h3>
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                <div className="pr-3">
                                    <Cog />
                                </div>
                                    <a>Settings</a>
                                </MenubarItem>
                                <MenubarItem>
                                <div className="pr-3">
                                    <LogOut />
                                </div>
                                <a href="/api/auth/logout">Logout</a>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>

                        <MenubarMenu>
                            <MenubarTrigger>
                                <Menu />
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    <div className="pr-3">
                                        <PlusSquare />
                                    </div>
                                    <a>New Chat</a>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
                <ul className="flex-1 overflow-y-auto">
                    
                </ul>
            </div>
        )
    );
}

export default Dashboard;