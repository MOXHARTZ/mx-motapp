import { useLocation } from 'react-router-dom'
import { FaLocationArrow, FaUser, FaDoorClosed, FaKey } from "react-icons/fa";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";
import Countdown from 'react-countdown'

const Home = () => {
    const location = useLocation()
    console.log('location', location)
    return (
        <section id="house-interaction-container" className="relative px-6 w-full h-full gap-6 flex flex-col">
            <h1 className='text-3xl w-full py-4 rounded-lg mt-5'>Sunny Side Motel</h1>
            <article id="house-actions" className="flex flex-col gap-4">
                <ul className="grid grid-cols-2 gap-6 w-full">
                    <li className="bg-white/10 h-72 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-24 h-24 rounded-full flex items-center justify-center bg-white/15">
                            <FaLocationArrow size={28} />
                        </figure>
                        <footer className="flex flex-col">
                            <p className="text-lg">Location</p>
                            <p className="text-white/50 my-home-waypoint">Set Waypoint</p>
                        </footer>
                    </li>
                    <li className="bg-white/10 h-72 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-24 h-24 rounded-full flex items-center justify-center bg-white/15">
                            <FaDoorClosed size={28} />
                        </figure>
                        <footer className="flex flex-col">
                            <p className="text-lg">Front Door</p>
                            <p className="text-white/50 my-home-waypoint">Unlocked</p>
                        </footer>
                    </li>
                    <li className="bg-white/10 h-72 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-24 h-24 rounded-full flex items-center justify-center bg-white/15">
                            <FaKey size={28} />
                        </figure>
                        <footer className="flex flex-col">
                            <p className="text-lg">Give Key</p>
                            <p className="text-white/50">Manage</p>
                        </footer>
                    </li>
                    <li className="bg-white/10 h-72 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-24 h-24 rounded-full flex items-center justify-center bg-white/15">
                            <IoIosTimer size={28} />
                        </figure>
                        <footer className="flex flex-col">
                            <p className="text-lg">Rentcycle</p>
                            <Countdown className='text-white/50' date={Date.now() + 100000000} />
                        </footer>
                    </li>
                    <li className="bg-white/10 h-72 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-24 h-24 rounded-full flex items-center justify-center bg-white/15">
                            <PiContactlessPaymentFill size={28} />
                        </figure>
                        <footer className="flex flex-col">
                            <p className="text-lg">$5000</p>
                            <p className="text-white/50">Pay Your Rent</p>
                        </footer>
                    </li>
                </ul>
            </article>
            <article id="house-key-actions" className="flex flex-col gap-4">
                <header className="gap-2 text-xl flex items-center">
                    <p className="houses-keys-access">Key Access</p>
                    <i className="fas fa-chevron-right text-muted"></i>
                </header>
                <ul className="grid grid-cols-3 gap-6" id="house-key-action-list">
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                    <li className="bg-white/10 h-40 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition cursor-pointer">
                        <figure className="p-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/15">
                            <FaUser size={20} />
                        </figure>
                        <div className="flex flex-col">
                            <p>QUASAR</p>
                            <p className="text-white/50">Manage</p>
                        </div>
                    </li>
                </ul>
            </article>
        </section >
    )
}

export default Home