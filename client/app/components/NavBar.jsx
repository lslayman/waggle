'use client'

import Link from 'next/link'

export default function NavBar() {
    return (
        <>
          <nav className="bg-white shadow-lg">
		    <div className="max-w-6xl mx-auto px-4">
			  <div className="flex justify-between">
				<div className="flex space-x-7">
					
					<div>
						<a href="#" className="flex items-center py-4 px-2">
							<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" />
							<span className="font-semibold text-gray-500 text-lg"
								>Navigation</span>
						</a>
					</div>
					
					<div class="hidden md:flex items-center space-x-1">
						<Link href='/join' className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Join</Link>
						<Link href='/login' className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Login</Link>
					</div>
				</div>
			  </div>
		    </div>
	      </nav>
        </>
    )
}