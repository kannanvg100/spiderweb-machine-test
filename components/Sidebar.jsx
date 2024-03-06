import Image from 'next/image'
import React from 'react'

export default function Sidebar() {
	return (
		<div className="h-full w-[300px] p-5 rounded-2xl border-2 border-[#D175B6] flex flex-col justify-between bg-black bg-opacity-50">
			<div className="flex-grow relative">
				<div className="absolute inset-0 overflow-y-auto">
					<div className="flex justify-between items-center px-5 py-4 rounded-lg border-2 border-[#D175B6]">
						<span className="text-[#D175B6] text-xl">Events</span>
						<Image src="/arrow-1.svg" width={12} height={7} alt="sel1" />
					</div>
					<div className="flex justify-end gap-1">
						<div className="flex flex-col pt-[10px]">
							<Image src="/vec1.svg" width={12} height={21} alt="dropdown arrow" className="z-10" />
							<Image
								src="/vec2.svg"
								width={12}
								height={54}
								alt="dropdown arrow"
								className="-translate-y-2"
							/>
							<Image
								src="/vec2.svg"
								width={12}
								height={54}
								alt="dropdown arrow"
								className="-translate-y-3"
							/>
							<Image
								src="/vec2.svg"
								width={12}
								height={54}
								alt="dropdown arrow"
								className="-translate-y-4"
							/>
						</div>
						<ul className="flex flex-col *:px-[14px] *:py-2 text-sm py-[10px] w-[195px] gap-1">
							<li className="border border-[#D175B6] rounded">New Requests</li>
							<p className="hover:bg-white hover:bg-opacity-20 text-white duration-[800ms] cursor-pointer rounded">Estimate</p>
							<li className="flex justify-between items-center hover:bg-white hover:bg-opacity-20 text-white duration-[800ms] cursor-pointer rounded">
								<span className=''>Events</span>
								<span className="drop-shadow-lg bg-white text-[#D175B6] min-w-5 h-5 rounded-full text-center shadow2">
									9
								</span>
							</li>
							<li className="hover:bg-white hover:bg-opacity-20 text-white duration-[800ms] cursor-pointer rounded">Partial Requests</li>
						</ul>
					</div>
					<p className="text-xl px-5 py-4">Positions</p>
					<p className="text-xl px-5 py-4">Contractors</p>
					<p className="text-xl px-5 py-4">Positions</p>

					<div className="flex justify-between items-center px-5 py-4">
						<span className="text-xl">Users</span>
						<Image src="/arrow-2.svg" width={12} height={7} alt="sel1" />
					</div>
					<div className="flex justify-end gap-1">
						<div className="flex flex-col pt-[10px]">
							<Image src="/vec3.svg" width={12} height={21} alt="dropdown arrow" className="z-10" />
							<Image
								src="/vec2.svg"
								width={12}
								height={54}
								alt="dropdown arrow"
								className="-translate-y-2"
							/>
							<Image
								src="/vec2.svg"
								width={12}
								height={54}
								alt="dropdown arrow"
								className="-translate-y-3"
							/>
						</div>
						<ul className="flex flex-col *:px-[14px] *:py-2 text-sm py-[10px] w-[195px] gap-1">
							<li className="hover:bg-white hover:bg-opacity-20 text-white duration-[800ms] cursor-pointer rounded">Admins</li>
							<li className="hover:bg-white hover:bg-opacity-20 text-white duration-[800ms] cursor-pointer rounded">Clients</li>
							<li className="hover:bg-white hover:bg-opacity-20 text-white duration-[800ms] cursor-pointer rounded">Coordinators</li>
						</ul>
					</div>
					<p className="text-xl px-5 py-4">Profile</p>
				</div>
			</div>
			<div className="px-5 py-4 shadow2 bg-black rounded-lg">
				<button type="button" className="w-full">
					<div className="flex justify-center gap-4">
						<Image src="/Upload.svg" alt="logout" width={20} height={20} />
						<span>Logout</span>
					</div>
				</button>
			</div>
		</div>
	)
}
