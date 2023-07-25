'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LogoWName from './LogoWName';

export default function NavBar() {
	const [users, setUsers] = useState(null)

	useEffect(() => {
		fetch('/api/check-session')
		  .then(res => res.json())
		  .then(data => setUsers(data))
	  }, [])
	  console.log(users)

	function handleLogout(e) {
		e.preventDefault()
		fetch('/api/logout', {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(setUsers(null))
	}

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
				  <Link href='/join' className="py-4 px-2 text-gold-500 border-b-4 border-gold-500 font-semibold" setUsers={setUsers}>Join</Link>
				  <Link href='/login' className="py-4 px-2 text-gray-500 font-semibold hover:text-gold-500 transition duration-300" setUsers={setUsers}>Login</Link>
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
					<Link href='/favorites' className="py-4 px-2 text-gray-500 font-semibold hover:text-gold-500 transition duration-300">Favorites</Link>
					<Link href='/' className="py-4 px-2 text-gold-500 border-b-4 border-gold-500 font-semibold" onClick={handleLogout}>Logout</Link>
				  </div>
				</div>
			  </div>
		    </div>
	      </nav>
        </>
    )
}