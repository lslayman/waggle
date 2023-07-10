'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import LogoWName from './LogoWName';

export default function NavBar() {
	const [users, setUsers] = useState(null)

	const updateUser = (user) => setUsers(user)

	if(!users) return(
		<>
		<nav className="bg-white shadow-lg">
		  <div className="max-w-6xl mx-auto px-4">
			<div className="flex justify-between">
			  <div className="flex space-x-7">
				  
				  <div>
					<LogoWName />
				  </div>
				  
				  <div class="hidden md:flex items-center space-x-1">
					  <Link href='/join' className="py-4 px-2 text-gold-500 border-b-4 border-gold-500 font-semibold ">Join</Link>
					  <Link href='/login' className="py-4 px-2 text-gray-500 font-semibold hover:text-gold-500 transition duration-300">Login</Link>
				  </div>
			  </div>
			</div>
		  </div>
		</nav>
	  </>
	)
    return (
        <>
          <nav className="bg-white shadow-lg">
		    <div className="max-w-6xl mx-auto px-4">
			  <div className="flex justify-between">
				<div className="flex space-x-7">
					
					<div>
					  <LogoWName />
					</div>
					
					<div class="hidden md:flex items-center space-x-1">
						<Link href='/join' className="py-4 px-2 text-gold-500 border-b-4 border-gold-500 font-semibold ">Join</Link>
						<Link href='/login' className="py-4 px-2 text-gray-500 font-semibold hover:text-gold-500 transition duration-300">Login</Link>
					</div>
				</div>
			  </div>
		    </div>
	      </nav>
        </>
    )
}