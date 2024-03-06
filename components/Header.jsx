import Image from 'next/image'
import React from 'react'

export default function Header() {
	return (
		<div className="self-center flex justify-center items-center gap-6">
			<Image src="/Info-Square.svg" width={32} height={32} className="w-[32px] h-[32px]" alt="info" />
			<div className="relative">
				<Image src="/notification.svg" width={32} height={32} alt="notifications" />
				<div className="absolute top-[2px] right-1 w-2 h-2 bg-[#D175B6] rounded-full"></div>
			</div>
			<div className="flex items-center gap-2">
				<div>
					<p className="font-normal">
						Hi, <span className="text-[#00EEC5]">Muhammad Asad</span>
					</p>
					<p>welcome back!</p>
				</div>
				<Image
					src="/avatar.png"
					width={64}
					height={64}
					alt="user avatar"
					className="rounded-full border-2 border-[#D175B6]"
					style={{ boxShadow: '0 0 40px rgba(255, 0, 255, 0.3)' }}
				/>
			</div>
		</div>
	)
}
