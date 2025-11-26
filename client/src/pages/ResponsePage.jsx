import React, { useState, useEffect } from 'react';
import { Clock, Download } from 'lucide-react';
import { useParams } from "react-router-dom";

export default function ResponsePage() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [activeButton, setActiveButton] = useState(null);
    const {id} = useParams();
  

    

   

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 flex items-center justify-center p-8 overflow-auto">
            <div className="w-full max-w-6xl h-full flex flex-col bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl shadow-2xl p-8 text-white overflow-auto relative">
                <button
                    onClick={() => alert('Download functionality')}
                    className="absolute top-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-110 z-10"
                    title="Download Itinerary"
                >
                    <Download className="w-5 h-5" />
                </button>

                <div className="mb-8">
                    <h1 className="text-5xl font-bold mb-2">Your Plan</h1>
                    <div className="bg-orange-200 text-orange-500 inline-block px-4 py-2 rounded-lg text-sm font-semibold">
                        Itinerary
                        <br />
                        3 day 2 night
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="shrink-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200&h=200&fit=crop"
                                    alt="Tokyo Street"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1 bg-orange-600 bg-opacity-70 rounded-lg p-4 relative">
                            <h3 className="text-xl font-bold mb-2">Day 1</h3>
                            <div className="space-y-1 text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="font-semibold">06:00-10:00</span>
                                </div>
                                <p className="ml-6">Arrival at Narita Airport</p>
                                <p className="ml-6">Hotel check-in and breakfast</p>
                                <div className="mt-2">
                                    <span className="font-semibold">10:00-14:00</span>
                                    <p className="ml-6">Visit Sensoji Temple</p>
                                    <p className="ml-6">Lunch at Asakusa</p>
                                    <h1>{id}</h1>
                                </div>
                                <div className="mt-2">
                                    <span className="font-semibold">14:00-18:00</span>
                                    <p className="ml-6">Explore Shibuya Crossing</p>
                                    <p className="ml-6">Shopping at Harajuku</p>
                                </div>
                                <div className="mt-2">
                                    <span className="font-semibold">18:00-22:00</span>
                                    <p className="ml-6">Dinner at Shinjuku</p>
                                    <p className="ml-6">Visit Tokyo Metropolitan Building</p>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-4 right-4 z-20">
                                <div className="relative group">
                                    <button
                                        onClick={() => handleButtonClick("main-day1")}
                                        className="w-20 h-20 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative z-10 text-sm"
                                        aria-label="Main menu button"
                                    >
                                        Book Now
                                    </button>

                                    <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-28 transition-all duration-300 ease-out">
                                        <button
                                            onClick={() => handleButtonClick("travel-day1")}
                                            className="w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-sm"
                                            aria-label="Travel"
                                        >
                                            Travel
                                        </button>
                                    </div>

                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-28 transition-all duration-300 ease-out delay-100">
                                        <button
                                            onClick={() => handleButtonClick("hotel-day1")}
                                            className="w-20 h-20 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-sm"
                                            aria-label="Hotel"
                                        >
                                            Hotel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="shrink-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=200&h=200&fit=crop"
                                    alt="Tokyo Tower"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1 bg-orange-600 bg-opacity-70 rounded-lg p-4 relative">
                            <h3 className="text-xl font-bold mb-2">Day 2</h3>
                            <div className="space-y-1 text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="font-semibold">08:00-12:00</span>
                                </div>
                                <p className="ml-6">Breakfast at Ryogoku Sumida</p>
                                <p className="ml-6">Tokyo Skytree visit</p>
                                <div className="mt-2">
                                    <span className="font-semibold">12:00-16:00</span>
                                    <p className="ml-6">Lunch at Ginza</p>
                                    <p className="ml-6">Visit Tokyo Imperial Palace</p>
                                </div>
                                <div className="mt-2">
                                    <span className="font-semibold">16:00-20:00</span>
                                    <p className="ml-6">Explore Akihabara District</p>
                                    <p className="ml-6">Experience Robot Restaurant</p>
                                </div>
                                <div className="mt-2">
                                    <span className="font-semibold">20:00-23:00</span>
                                    <p className="ml-6">Dinner at Roppongi</p>
                                    <p className="ml-6">Visit Tokyo Tower (night view)</p>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-4 right-4 z-20">
                                <div className="relative group">
                                    <button
                                        onClick={() => handleButtonClick("main-day2")}
                                        className="w-20 h-20 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative z-10 text-sm"
                                        aria-label="Main menu button"
                                    >
                                        Book Now
                                    </button>

                                    <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-28 transition-all duration-300 ease-out">
                                        <button
                                            onClick={() => handleButtonClick("travel-day2")}
                                            className="w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-sm"
                                            aria-label="Travel"
                                        >
                                            Travel
                                        </button>
                                    </div>

                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-28 transition-all duration-300 ease-out delay-100">
                                        <button
                                            onClick={() => handleButtonClick("hotel-day2")}
                                            className="w-20 h-20 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-sm"
                                            aria-label="Hotel"
                                        >
                                            Hotel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="shrink-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200&h=200&fit=crop"
                                    alt="Tokyo Temple"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1 bg-orange-600 bg-opacity-70 rounded-lg p-4 relative">
                            <h3 className="text-xl font-bold mb-2">Day 3</h3>
                            <div className="space-y-1 text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="font-semibold">08:00-12:00</span>
                                </div>
                                <p className="ml-6">Visit Meiji Shrine (Yoyogi koen park)</p>
                                <p className="ml-6">Last-minute shopping at Omotesando</p>
                                <div className="mt-2">
                                    <span className="font-semibold">12:00-14:00</span>
                                    <p className="ml-6">Lunch at local ramen shop</p>
                                </div>
                                <div className="mt-2">
                                    <span className="font-semibold">14:00-18:00</span>
                                    <p className="ml-6">Visit TeamLab Borderless Digital Art</p>
                                    <p className="ml-6">Explore Odaiba waterfront</p>
                                </div>
                                <div className="mt-2">
                                    <span className="font-semibold">18:00-22:00</span>
                                    <p className="ml-6">Farewell dinner</p>
                                    <p className="ml-6">Airport departure</p>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-4 right-4 z-20">
                                <div className="relative group">
                                    <button
                                        onClick={() => handleButtonClick("main-day3")}
                                        className="w-20 h-20 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative z-10 text-sm"
                                        aria-label="Main menu button"
                                    >
                                        Book Now
                                    </button>

                                    <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-28 transition-all duration-300 ease-out">
                                        <button
                                            onClick={() => handleButtonClick("travel-day3")}
                                            className="w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-sm"
                                            aria-label="Travel"
                                        >
                                            Travel
                                        </button>
                                    </div>

                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-28 transition-all duration-300 ease-out delay-100">
                                        <button
                                            onClick={() => handleButtonClick("hotel-day3")}
                                            className="w-20 h-20 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-sm"
                                            aria-label="Hotel"
                                        >
                                            Hotel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}