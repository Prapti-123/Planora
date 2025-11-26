import React, { useState } from 'react';
import { Sun, Moon} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const MyPlans = () => {
  const [budget, setBudget] = useState([15, 3.75]);
  const [selectedBHK, setSelectedBHK] = useState('2');
  const [selectedStatus, setSelectedStatus] = useState('new');
  const [selectedPossession, setSelectedPossession] = useState('ready');
  const navigate = useNavigate();
  const goToPage=()=>{
    const id="123456";
    navigate(`/response/${id}`);



  }
  const Trip = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1717323821798-8cee2f6826ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYXJhc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Trip:',
      details: 'Some details about the trip',
      days: 3,
      nights: 3,
      
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8fDB8fHww',   
      title: 'Trip:',
      details: 'Some details about the trip',
       days: 3,
      nights: 3,
      
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1583821017783-4333717df070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D',  
      title: 'Trip:', 
      details: 'Some details about the trip',  
       days: 3,
      nights: 3,
      
    }
  ];

  return (
    <div className="min-h-screen bg-white flex">
    
         <h1 className="text-4xl font-bold text-gray-800 mb-2">My Plans</h1>
    
      {/* Trip Listings */}
      <div className="flex-1 p-18">
        <div className="space-y-6">
          {Trip.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-md overflow-hidden flex">
              {/* Trip Image */}
              <div className="w-64 h-64 relative flex-shrink-0">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              
              </div>

              {/* Trip Details */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {trip.title}
                      </h3>
                     
                    </div>
                  
                  </div>

                 
                </div>

                {/* Amenities & Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Sun className="w-5 h-5" />
                      <span className="text-sm">{trip.days} Days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Moon className="w-5 h-5" />
                      <span className="text-sm">{trip.nights} Nights</span>
                    </div>
                  
                  </div>

                  <div className="flex gap-3">
                  
                    <button onClick={goToPage} className="px-8 py-3 bg-orange-400 text-white rounded-lg font-semibold hover:bg-orange-500 transition-colors">
                      View Trip
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPlans;