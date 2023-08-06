import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgGradient from './assets/bg.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineMyLocation } from 'react-icons/md'
import { Humidity, Lightning, Umbrella, Wind, Night, Sunny, CloudyandRainy, Clouds, Clear } from './assets'
import axios from 'axios'
import NotFound from './assets/404.png'
function App() {

	const [data, setData] = useState({})
	const [location, setLocation] = useState('')

	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric",
	});

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1ead008b6f7bc918321c3c7cca663b0c`

	useEffect(() => {
		const timeOutId = setTimeout(() => setLocation(location), 500);
		return () => clearTimeout(timeOutId);
	}, [location]);

	const getWeather = (event) => {
		if (event.key == 'Enter') {
			axios.get(url).then(response => {
				setData(response.data)
				// console.log(response.data)
			})
		}
	}
	console.log(data)
	return (
		<div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-[#FEE3BC] to-[#76e0f3] relative">
			<img src={bgGradient} alt="" className='absolute w-full h-full object-cover' />
			<div className='w-[400px] h-[750px] bg-gray-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[8px] border-gray-100'>
				<div className="px-10 py-5 w-full h-full">
					<div className="border-[2px] text-white border-white rounded-full flex items-center justify-between">
						<input
							type="text"
							placeholder='Enter your location'
							value={location}
							onChange={event => {
								setLocation(event.target.value)
								console.log(data.name)
							}}
							onKeyPress={getWeather}
							className='focus:outline-none w-[300px] text-lg p-3 bg-transparent placeholder:text-white' />
						<AiOutlineSearch size={30} color='white' className='mr-4 cursor-pointer' />
					</div>
					{
						Object.keys(data).length !== 0 ?
							<div className="">
								<div className="top-content mt-10 text-white">
									<div className="left-content my-6">
										<section className='flex flex-col mb-5'>
											<p className="city text-4xl text-[#313341]">{data ? data.name : null}</p>
											<p className='text-[#9A938C] mt-2'>{formattedDate}</p>
										</section>
										<div className="flex justify-between items-center">
											<div className="w-44 h-44">
												<img src={Sunny} alt="" className='w-full h-full object-contain' />
											</div>
											<div className="">
												<p className="temperature text-6xl text-[#303345] font-bold">
													{data.main ? (data.main.temp - 273.15).toFixed(0) + '°C' : ''}
												</p>
												<p className="weather-description text-md text-[#303345]">{data.weather ? data.weather[0].main : 'undefined'}</p>
											</div>
										</div>
									</div>
								</div>
								<div className="bottom-content flex flex-col gap-4">
									<div className="bg-[rgba(255,255,255,0.36)] w-full px-5 py-3 rounded-[20px] flex justify-between items-center">
										<div className="flex items-center gap-3">
											<img src={Umbrella} alt="" className='w-12 h-12 filter drop-shadow-lg bg-white rounded-2xl p-2' />
											<p>Rainfall</p>
										</div>
										<span className='text-sm text-gray-600'>{data.main ? data.main.pressure : 'undefined'}</span>
									</div>
									<div className="bg-[rgba(255,255,255,0.36)] w-full px-5 py-3 rounded-[20px] flex justify-between items-center">
										<div className="flex items-center gap-3">
											<img src={Wind} alt="" className='w-12 h-12 filter drop-shadow-lg bg-white rounded-2xl p-2' />
											<p>Wind</p>
										</div>
										<span className='text-sm text-gray-600'>{data.wind ? data.wind.speed + 'km/h' : 'undefined'}</span>
									</div>
									<div className="bg-[rgba(255,255,255,0.36)] w-full px-5 py-3 rounded-[20px] flex justify-between items-center">
										<div className="flex items-center gap-3">
											<img src={Humidity} alt="" className='w-12 h-12 filter drop-shadow-lg bg-white rounded-2xl p-2' />
											<p>Humidity</p>
										</div>
										<span className='text-sm text-gray-600'>{data.main ? data.main.humidity + '%' : 'undefined'}</span>
									</div>
								</div>
							</div> : <div className="flex justify-center items-center w-full h-full box-border">
								<img src={NotFound} alt="" className='w-full object-contain' />
							</div>
					}
				</div>
			</div>
		</div>
	)
}

export default App
