
import React from 'react';
import { Search, Globe, Award, Headphones } from 'lucide-react';
import heroImage from '../assets/balint-miko-ebB8JOg2kYU-unsplash.jpg';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-6xl font-bold mb-4">Your world of joy</h1>
          <p className="text-xl mb-8">From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
          
          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-xl p-6 flex items-end space-x-4 text-gray-800">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2">Where</label>
              <input 
                type="text" 
                placeholder="Beach destination" 
                className="border-b-2 border-gray-300 focus:border-orange-500 outline-none pb-2 w-48"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2">When</label>
              <input 
                type="text" 
                placeholder="February 05 - March 14" 
                className="border-b-2 border-gray-300 focus:border-orange-500 outline-none pb-2 w-48"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2">Tour Type</label>
              <select className="border-b-2 border-gray-300 focus:border-orange-500 outline-none pb-2 w-32">
                <option>All tour</option>
                <option>Adventure</option>
                <option>Beach</option>
                <option>Mountains</option>
                <option>Cultural</option>
              </select>
            </div>
            <button className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-6xl mx-auto py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why choose Tourz</h2>
        <div className="grid grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-orange-500 rounded-lg">
              <Globe className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-bold mb-2">Ultimate flexibility</h3>
            <p className="text-sm text-gray-600">You're in control, with free cancellation and payment options to satisfy any plan or budget.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-orange-500 rounded-lg">
              <Award className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-bold mb-2">Memorable experiences</h3>
            <p className="text-sm text-gray-600">Browse and book tours and activities so incredible, you'll want to tell your friends.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-orange-500 rounded-lg">
              <Award className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-bold mb-2">Quality at our core</h3>
            <p className="text-sm text-gray-600">High-quality standards. Millions of reviews. A tour+ company.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-orange-500 rounded-lg">
              <Headphones className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-bold mb-2">Award-winning support</h3>
            <p className="text-sm text-gray-600">New price? New plan? No problem. We're here to help, 24/7.</p>
          </div>
        </div>
      </div>

      {/* Trending Destinations */}
      <div className="max-w-6xl mx-auto py-16 px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Trending destinations</h2>
          <a href="#" className="text-orange-500 hover:underline">See all</a>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400' },
            { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
            { name: 'Rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400' },
            { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400' },
            { name: 'Santorini', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400' },
            { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400' },
            { name: 'Iceland', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400' },
            { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400' }
          ].map((dest, i) => (
            <div key={i} className="relative h-48 rounded-xl overflow-hidden cursor-pointer group">
              <img 
                src={dest.image} 
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{dest.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Popular things to do */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Popular things to do</h2>
            <button className="text-sm text-gray-600 hover:text-gray-900">See all</button>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Row 1 */}
            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1aXNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" 
                alt="Cruises"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">Cruises</span>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" 
                alt="Beach Tours"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">Mountain Tours</span>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop" 
                alt="City Tours"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">City Tours</span>
            </div>

            {/* Row 2 */}
            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://media.istockphoto.com/id/539002142/photo/mexico-citys-downtown-at-twilight.webp?a=1&b=1&s=612x612&w=0&k=20&c=yMinpFoDrrj9_-lfIur0vI_qwpaiTQugAIxiFtHEJTw=" 
                alt="Museum Tour"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">Museum Tour</span>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop" 
                alt="Beach Tours"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">Beach Tours</span>
            </div>

            
            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer col-start-3">
              <img 
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop" 
                alt="Hiking"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">Hiking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Trending */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Top Trending</h2>
          <button className="text-sm text-gray-600 hover:text-gray-900">See all</button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop" 
                alt="Palo Verde"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Palo Verde</p>
              <h3 className="font-semibold text-sm text-gray-900 mb-3 line-clamp-2">
                Combodia Tour - Guided Arizona Desert Tour by ATV
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-400">
                  <span className="text-sm">★★★★★</span>
                </div>
                <span className="text-xs text-gray-500">4 days</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop" 
                alt="New York"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">New York, USA</p>
              <h3 className="font-semibold text-sm text-gray-900 mb-3 line-clamp-2">
                Molokini and Turtle Town Snorkeling Adventure
              </h3>
              <div className="flex items-center">
                <div className="flex items-center text-yellow-400">
                  <span className="text-sm">★★★★★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a?w=400&h=300&fit=crop" 
                alt="Lower US"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">LOWER, US</p>
              <h3 className="font-semibold text-sm text-gray-900 mb-3 line-clamp-2">
                Westminster Walking Tour & Westminster Abbey Entry
              </h3>
              <div className="flex items-center">
                <div className="flex items-center text-yellow-400">
                  <span className="text-sm">★★★★★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1540206395-68808572332f?w=400&h=300&fit=crop" 
                alt="New York"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">New York, USA</p>
              <h3 className="font-semibold text-sm text-gray-900 mb-3 line-clamp-2">
                All Inclusive Ultimate Circle Island Day Tour
              </h3>
              <div className="flex items-center">
                <div className="flex items-center text-yellow-400">
                  <span className="text-sm">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

