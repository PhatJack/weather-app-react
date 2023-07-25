import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgGradient from './assets/bg.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineMyLocation } from 'react-icons/md'
import { Lightning, Sunny, Umbrella } from './assets'
function App() {

	return (
		<div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-[#FEE3BC] to-[#76e0f3] relative">
			<img src={bgGradient} alt="" className='absolute w-full h-full object-cover' />
			<div className='w-[400px] h-[750px] bg-gray-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[8px] border-gray-100'>
				<div className="px-10 py-5 w-full h-full">
					<div className="border-[2px] text-white border-white rounded-full flex items-center justify-between">
						<input type="text" placeholder='Enter your location' className='focus:outline-none w-[300px] text-lg p-3 bg-transparent placeholder:text-white' />
						<AiOutlineSearch size={30} color='white' className='mr-4 cursor-pointer' />
					</div>
					<div className="top-content mt-10 text-white">
						<div className="left-content my-6">
							<section className='flex flex-col mb-5'>
								<p className="city text-4xl text-[#313341]">Stockholm,
									Sweden</p>
								<p className='text-[#9A938C] mt-2'>Tue, Jun 30</p>
							</section>
							<div className="flex justify-between items-center">
								<div className="w-44 h-44">
									<img src={Sunny} alt="" className='w-full h-full object-contain' />
								</div>
								<div className="">
									<p className="temperature text-6xl text-[#303345]">
										15&deg;C
									</p>
									<p className="weather-description text-md text-[#303345]">Cloudy</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bottom-content">
						<div className="bg-[rgba(255,255,255,0.36)] w-full px-5 py-3 rounded-[25px]">
							<img src={Umbrella} alt="" className='w-16 h-16 filter drop-shadow-lg bg-white rounded-2xl p-2' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
