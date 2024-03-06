'use client'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/navigation'

export default function Page() {
	const router = useRouter()
	const handleClick = () => router.push('/event')
	return (
		<div className="flex flex-col h-screen">
			<div className="min-h-[120px] flex justify-center">
				<Header />
			</div>
			<div className="h-full flex-grow flex gap-4 p-10">
				<Sidebar />
				<div className="flex-grow rounded-2xl border-2 border-[#D175B6] flex flex-col justify-between">
					<div className="px-10 py-5 flex justify-between">
						<p className="text-4xl">Event Requests</p>
						<div className="flex gap-5 items-center">
							<div className="border rounded-lg flex items-center justify-start gap-2 ps-4 pe-6 self-stretch">
								<Image src="/search-01.svg" width={24} height={24} alt="search icon" />
								<input
									type="text"
									placeholder="Search here"
									className="text-base bg-transparent outline-none"
								/>
							</div>
							<div
								className="p-[5px] border rounded bg-gradient-to-r from-[#FF00FF] to-[#8F00FF]"
								style={{ boxShadow: '0px 0px 20px rgba(209, 117, 182, 0.4)' }}>
								<Image src="/add-01.svg" width={24} height={24} alt="add icon" />
							</div>
						</div>
					</div>
					<div className="flex-grow w-full h-full relative">
						<div className="absolute inset-0 overflow-auto">
							<table className="w-full table-fixed">
								<thead className="">
									<tr className="bg-[#D175B6] whitespace-nowrap text-xl h-[50px] text-left">
										<th className="w-[334px]">
											<div className="flex gap-[10px]">
												<div className="w-[34px] h-[24px]"></div>
												<span className="font-normal text-xl">Event Name</span>
												<Image
													src="/arrow-3.svg"
													width={24}
													height={24}
													alt="order"
													className=""
												/>
											</div>
										</th>
										<th className="ps-2 w-[150px]">
											<div className="flex gap-[10px]">
												<span className="font-normal text-xl">Event Start</span>
												<Image
													src="/arrow-3.svg"
													width={24}
													height={24}
													alt="order"
													className="rotate-180"
												/>
											</div>
										</th>
                                        <th className="ps-2 w-[150px]">
											<div className="flex gap-[10px]">
												<span className="font-normal text-xl">Event End</span>
												<Image
													src="/arrow-3.svg"
													width={24}
													height={24}
													alt="order"
													className="rotate-180"
												/>
											</div>
										</th>
										<th className="w-[150px]">Client Name</th>
										<th className="w-[150px]">Contact Info</th>
										<th className="w-[300px]">Venue</th>
										<th className="w-[200px]">City</th>
										<th className="w-[200px]">State</th>
										<th className="w-[200px]">Zip Code</th>
									</tr>
								</thead>
								<tbody>
									{[...Array(14)].map((_, index) => (
										<tr
											key={index}
											onClick={handleClick}
											className="whitespace-nowrap h-[50px] border-b-2 border-[#D175B6] *:cursor-pointer">
											<td className="w-[334px] h-[50px] flex items-center gap-[10px] ps-4 bg-black bg-opacity-30">
												<Image src="/Show.svg" width={19} height={15} alt="show" />
												<span>Filled Name</span>
											</td>
											<td className="ps-2 w-[150px]">Jan 12, 2024</td>
											<td className="w-[200px]">Jan 14, 2024</td>
											<td className="w-[150px]">Muhammad Asad</td>
											<td className="w-[150px]">+ 1 234 566 7890</td>
											<td className="w-[300px]">Lorem ipsum dolor sit amet</td>
											<td className="w-[200px]">-</td>
											<td className="w-[200px]">-</td>
											<td className="w-[200px]">-</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className="flex justify-center items-center gap-5 p-3 bg-black rounded-br-2xl rounded-bl-2xl">
						<Image src="/arrow-left-02.svg" width={24} height={24} alt="go left" />
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span className="text-[#D175B6]">4</span>
						<Image src="/arrow-right-02.svg" width={24} height={24} alt="go right" />
					</div>
				</div>
			</div>
		</div>
	)
}
