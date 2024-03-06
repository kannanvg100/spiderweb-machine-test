import Image from 'next/image'
import React from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default function Page() {
	return (
		<div className="flex flex-col h-screen">
			<div className="min-h-[120px] flex justify-center">
				<Header />
			</div>
			<div className="h-full flex-grow flex gap-4 p-10">
				<Sidebar />
				<div className="flex-grow rounded-2xl border-2 border-[#D175B6] flex flex-col justify-between gap-5 px-10 py-5">
					<div className="flex justify-between">
						<p className="text-[40px]">
							Event Name <span className="text-2xl font-light">(Venue Details)</span>
						</p>
					</div>
					<div className="w-full h-full relative">
						<div className="absolute inset-0 overflow-auto">
							<div className="flex flex-col gap-5">
								<div className="inline-flex border-2 border-[#D175B6] rounded-lg text-base self-start">
									<p className="p-5 text-[#D175B6]">Event Details</p>
									<p className="p-5 bg-[#D175B6]">Assign Coordinator/Coordinator</p>
									<p className="p-5 text-[#D175B6]">Session Management</p>
									<p className="p-5 text-[#D175B6]">Generate SOW</p>
								</div>

								<div className="grid grid-cols-1 :grid-cols-2 gap-5">
									<div className="px-1">
										<label for="coordinators" className="text-xl">
											Assign Coordinator
										</label>
										<select
											id="coordinators"
											class="mt-3 bg-transparent border text-sm rounded-lg focus:[#D175B6] block w-full p-2.5 border-[#D175B6] placeholder-gray-400 text-white focus:border-[#D175B6]">
											<option selected>Search Coordinator</option>
											<option value="1">Coordinator 1</option>
											<option value="2">Coordinator 2</option>
											<option value="3">Coordinator 3</option>
											<option value="4">Coordinator 4</option>
										</select>
										<p className="text-[#D175B6] mt-1">Add New Coordinator</p>
									</div>
									<div className="">
										<p className="text-2xl">
											Event Name <span className="text-xl font-light">(Venue Here)</span>
										</p>
										<div className="mt-3 flex border border-[#D175B6] rounded-[3px] px-[10px] py-1">
											<p className="flex-grow">
												<span className="font-light">Start:</span> 12-12-2023
											</p>
											<p className="flex-grow">
												<span className="font-medium">Ends:</span> 15-12-2023
											</p>
										</div>
										<div className="mt-3 flex border border-[#D175B6] rounded-[3px] px-[10px] py-1">
											<p className="flex-grow">
												<span className="font-medium">Venue Address:</span> Some Location 12,
												Name Here, City, State.
											</p>
										</div>
									</div>
								</div>
								<div>
									<div className="flex gap-5">
										<div>
											<p className="text-2xl">Assign Contractor</p>
											<div className="mt-3 w-[340px] border border-[#D175B6] rounded-xl flex flex-col gap-[10px] p-4 bg-black">
												{[...Array(5)].map((_, index) => (
													<div
														key={index}
														className={`${
															index === 0 ? 'bg-[#D175B6]' : ''
														} rounded-xl p-4 border-2 border-[#D175B6]`}>
														<div className="flex items-center gap-[10px]">
															<p className="font-medium text-xl">
																Meeting Room {index + 1}
															</p>
															<Image
																src="/Star 2.svg"
																width={16}
																height={16}
																alt="star"
                                                                style={{boxShadow: '0 0 30px rgba(209, 117, 182, 0.2)'}}
															/>
															<p
																className={`${
																	index !== 0 ? 'text-[#D175B6]' : 'text-black'
																} font-medium`}>
																12 Positions
															</p>
														</div>
														<p className="font-light text-xs">
															Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
														</p>
													</div>
												))}
											</div>
										</div>
										<div className="flex flex-col gap-3 w-full">
											<p className="invisible">lorem</p>
											<p className="text-xl">Positions</p>
											<div className="flex-grow border border-[#D175B6] rounded-xl w-full bg-black">
												<table className="w-full table-fixed">
													<thead className="">
														<tr className="whitespace-nowrap text-xl h-[50px] text-left border-b border-[#D175B6]">
															<th className="ps-2 w-[150px]">Position</th>
															<th className="w-[200px]">Time</th>
															<th className="w-[150px]">Info</th>
															<th className="w-[80px]">Quantity</th>
															<th className="w-[240px] invisible">Text</th>
														</tr>
													</thead>
													<tbody>
														{[...Array(8)].map((_, index) => (
															<tr
																key={index}
																className="whitespace-nowrap h-[50px] border-b border-[#D175B6]">
																<td className="ps-2 w-[150px] font-normal">Camera 1 (Video)</td>
																<td className="w-[200px] font-normal">9 am - 7 pm</td>
																<td className="w-[150px] font-normal"><span className='font-bold'>LP </span>default</td>
																<td className="w-[150px] font-normal">20</td>
																<td className="w-[240px] font-normal">
																	<select
																		id="coordinators"
																		class="border bg-transparent text-sm rounded-lg focus:[#D175B6] block w-full p-1 border-[#D175B6] placeholder-gray-400 text-white focus:border-[#D175B6]">
																		<option selected>Select Coordinator</option>
																		<option value="1">Coordinator 1</option>
																		<option value="2">Coordinator 2</option>
																		<option value="3">Coordinator 3</option>
																		<option value="4">Coordinator 4</option>
																	</select>
																</td>
															</tr>
														))}
													</tbody>
												</table>
												<div className="flex justify-center gap-5 items-center px-3 py-2">
													<Image
														src="/arrow-left-02.svg"
														width={24}
														height={24}
														alt="go left"
													/>
													<Image src="/Ellipse 4.svg" width={10} height={10} alt="e4" />
													<Image src="/Ellipse 3.svg" width={16} height={16} alt="e3" />
													<Image
														src="/arrow-right-02.svg"
														width={24}
														height={24}
														alt="go right"
													/>
												</div>
											</div>
											<div className="flex justify-center">
												<button
													className="h-[60px] px-[60px] py-4 bg-[#D85AD8] rounded-xl"
													style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.6), 0 30px 80px rgba(255, 0, 255, 0.3)'}}>
													Save Edits
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
