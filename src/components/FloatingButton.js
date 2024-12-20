"use client"
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from 'next/link';
import { CatalogIcon, LoginIcon, SettingsIcon, LogoutIcon } from '@/lib/SvgIcons';
import { signIn, signOut } from 'next-auth/react';
import { ArrowPathIcon,ClockIcon,ChatBubbleBottomCenterIcon,BookOpenIcon,BanknotesIcon,ChatBubbleOvalLeftEllipsisIcon,HomeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next-nprogress-bar';

function FloatingButton({session}) {
    const iconClasses = "w-5 h-5 text-xl text-default-500 pointer-events-none flex-shrink-0";
    const router = useRouter();
    return (
        <Dropdown backdrop="blur" placement="bottom-end" classNames={{
            base: "before:bg-default-200",
            content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
        }}>
            <DropdownTrigger>
                <button className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[45px] h-[45px] text-white rounded-full flex items-center justify-center box-border outline-none bg-[#4d148c] shadow-2xl md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>                </button>
            </DropdownTrigger>
            <DropdownMenu variant="flat" aria-label="Profile Actions">
                <DropdownItem key="home" startContent={<HomeIcon className={iconClasses} />}>
                    <Link href={`/`} className='w-full h-full block '>Home</Link>
                </DropdownItem>
                <DropdownItem key="catalog" startContent={<CatalogIcon className={iconClasses} />}>
                    <Link href={`/anime/catalog`} className='w-full h-full block '>Explore</Link>
                </DropdownItem>
                <DropdownItem key="AIChat" startContent={<ChatBubbleOvalLeftEllipsisIcon className={iconClasses} />}>
                    <Link href={`https://ollama.marcus7i.net`} className='w-full h-full block '>AI Chats</Link>
                </DropdownItem>
                <DropdownItem key="chat" startContent={<ChatBubbleBottomCenterIcon className={iconClasses} />}>
                    <Link href={`https://discord.gg/s7ZUHYDmbD`} className='w-full h-full block '>Community/Discord</Link>
                </DropdownItem>
                {/*  Schedule Website is down
                <DropdownItem key="schedule" startContent={<ClockIcon className={iconClasses} />}>
                    <Link href={`/schedule`} className='w-full h-full block '>Schedule</Link>
                </DropdownItem>
                */}
                <DropdownItem key="random" startContent={<ArrowPathIcon className={iconClasses} />}>
                    <Link href={`/anime/random`} className='w-full h-full block '>Random Anime</Link>
                </DropdownItem>
                <DropdownItem key="settings" startContent={<SettingsIcon className={iconClasses} />}>
                    <Link href={`/settings`} className='w-full h-full block '>Settings</Link>
                </DropdownItem>
                {session ? (
                    <DropdownItem key="logout" color="danger" startContent={<LogoutIcon className={iconClasses} />}>
                        <button className="font-semibold outline-none border-none w-full h-full block text-left" onClick={() => signOut('AniListProvider')}>Log Out</button>
                    </DropdownItem>
                ) : (
                    <DropdownItem key="login" color="danger" startContent={<LoginIcon className={iconClasses} />}>
                        <button className="font-semibold outline-none border-none w-full h-full block text-left" onClick={() => {
                router.push("/authv2/v2/");
            }}>SignUp/LogIn</button>
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    )
}

export default FloatingButton
