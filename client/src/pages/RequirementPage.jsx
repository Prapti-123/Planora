import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
export default function RequirementPage() {
  const [destinationFrom, setDestinationFrom] = useState('');
  const [destinationTo, setDestinationTo] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [tourType, setTourType] = useState('Select tour type');
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false);
  const [tripType, setTripType] = useState('2');
  const [memberCount, setMemberCount] = useState('');
  const [travel, setTravel] = useState('Select travel mode');
  const [travelDropdownOpen, setTravelDropdownOpen] = useState(false);
  const [accommodation, setAccommodation] = useState('Select accommodation');
  const [accommodationDropdownOpen, setAccommodationDropdownOpen] = useState(false);
  const [budget, setBudget] = useState('');

  const navigate = useNavigate();


  const goToPage=()=>{
    const id="123456";
    navigate(`/response/${id}`);



  }
 
  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-100 via-orange-100 to-yellow-200 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-300 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-yellow-300 rounded-full blur-2xl opacity-30"></div>

      <div className="w-full max-w-md relative z-10">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800 drop-shadow-lg">
          Plan Your Trip
        </h1>

        <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">Destination</label>
            <label className="block text-sm text-gray-600 mb-2">From</label>
            <input
              type="text"
              placeholder="Enter destination"
              value={destinationFrom}
              onChange={(e) => setDestinationFrom(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">To</label>
            <input
              type="text"
              placeholder="Enter destination"
              value={destinationTo}
              onChange={(e) => setDestinationTo(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">When</label>
            <label className="block text-sm text-gray-600 mb-2">From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">Tour Type</label>
            <div className="relative">
              <button
                onClick={() => setTourDropdownOpen(!tourDropdownOpen)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent flex items-center justify-between text-left text-gray-700"
              >
                {tourType}
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              {tourDropdownOpen && (
                <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
                  <div
                    onClick={() => {
                      setTourType('Adventure');
                      setTourDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Adventure
                  </div>
                  <div
                    onClick={() => {
                      setTourType('Mountains');
                      setTourDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Mountains
                  </div>
                  <div
                    onClick={() => {
                      setTourType('Beaches');
                      setTourDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Beaches
                  </div>
                  <div
                    onClick={() => {
                      setTourType('Cultural');
                      setTourDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Cultural
                  </div>
                  <div
                    onClick={() => {
                      setTourType('All');
                      setTourDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    All
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">Type of Trip</label>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="1"
                  checked={tripType === '1'}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-gray-700">Family</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="2"
                  checked={tripType === '2'}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-gray-700">Friends</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="3"
                  checked={tripType === '3'}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-gray-700">Couple</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">
              Total Members (include child above age 3)
            </label>
            <input
              type="number"
              min="1"
              placeholder="Enter count"
              value={memberCount}
              onChange={(e) => setMemberCount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Travel Preference</label>
            <div className="relative">
              <button
                onClick={() => setTravelDropdownOpen(!travelDropdownOpen)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent flex items-center justify-between text-left text-gray-700"
              >
                {travel}
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              {travelDropdownOpen && (
                <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
                  <div
                    onClick={() => {
                      setTravel('Flight');
                      setTravelDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Flight
                  </div>
                  <div
                    onClick={() => {
                      setTravel('Train');
                      setTravelDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Train
                  </div>
                  <div
                    onClick={() => {
                      setTravel('Bus');
                      setTravelDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Bus
                  </div>
                  <div
                    onClick={() => {
                      setTravel('Own Vehicle');
                      setTravelDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Own Vehicle
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Stay Preference</label>
            <div className="relative">
              <button
                onClick={() => setAccommodationDropdownOpen(!accommodationDropdownOpen)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent flex items-center justify-between text-left text-gray-700"
              >
                {accommodation}
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              {accommodationDropdownOpen && (
                <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
                  <div
                    onClick={() => {
                      setAccommodation('Budget Hotel');
                      setAccommodationDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Budget Hotel
                  </div>
                  <div
                    onClick={() => {
                      setAccommodation('3-Star Hotel');
                      setAccommodationDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    3-Star Hotel
                  </div>
                  <div
                    onClick={() => {
                      setAccommodation('5-Star Hotel');
                      setAccommodationDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    5-Star Hotel
                  </div>
                  <div
                    onClick={() => {
                      setAccommodation('Resort');
                      setAccommodationDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                  >
                    Resort
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm text-gray-600 mb-2">Budget (Hotels & Travel Only)</label>
            <input
              type="text"
              placeholder="Enter budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Cancel
            </button>
            
            <button onClick={goToPage} className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium shadow-lg">
              Next
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}