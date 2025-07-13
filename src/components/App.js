import React from 'react';
import Autocomplete from './Autocomplete';

const App = () => {
 const locations = [
  // A
  "Ahmedabad", "Agra", "Allahabad", "Amritsar", "Aurangabad", "Aligarh",
  
  // B
  "Bangalore", "Bhopal", "Bhubaneswar", "Bikaner", "Bareilly", "Bellary",
  
  // C
  "Chennai", "Chandigarh", "Coimbatore", "Cuttack", "Chittoor", "Chandrapur",
  
  // D
  "Delhi", "Dehradun", "Dhanbad", "Durgapur", "Dindigul", "Dibrugarh",
  
  // E
  "Erode", "Eluru", "Etawah", "Etah", "Ernakulam", "Emmiganur",
  
  // F
  "Faridabad", "Firozabad", "Fatehpur", "Fazilka", "Firozpur", "Farrukhabad",
  
  // G
  "Gurgaon", "Guwahati", "Gwalior", "Gandhinagar", "Gaya", "Gorakhpur",
  
  // H
  "Hyderabad", "Howrah", "Hubli", "Haldia", "Hajipur", "Hoshiarpur",
  
  // I
  "Indore", "Imphal", "Itanagar", "Ichalkaranji", "Indergarh", "Islampur",
  
  // J
  "Jaipur", "Jabalpur", "Jammu", "Jamshedpur", "Jodhpur", "Jhansi",
  
  // K
  "Kolkata", "Kanpur", "Kochi", "Kota", "Kolhapur", "Kurnool",
  
  // L
  "Lucknow", "Ludhiana", "Loni", "Latur", "Lakhimpur", "Lalitpur",
  
  // M
  "Mumbai", "Mysore", "Madurai", "Meerut", "Moradabad", "Mangalore",
  
  // N
  "Nagpur", "Nashik", "Noida", "Nellore", "Nizamabad", "Nandyal",
  
  // O
  "Orai", "Ongole", "Osmanabad", "Ozhukarai", "Obra", "Okha",
  
  // P
  "Pune", "Patna", "Pondicherry", "Panipat", "Patiala", "Puri",
  
  // Q
  "Quilon", "Qadian", "Qasimpur", "Quthbullapur", "Quepem", "Quilandy",
  
  // R
  "Raipur", "Rajkot", "Ranchi", "Rourkela", "Ratlam", "Rewa",
  
  // S
  "Surat", "Srinagar", "Salem", "Shimla", "Sagar", "Satara",
  
  // T
  "Thane", "Tirupati", "Tirunelveli", "Tumkur", "Tezpur", "Tinsukia",
  
  // U
  "Udaipur", "Ujjain", "Ulhasnagar", "Unnao", "Udhampur", "Umred",
  
  // V
  "Varanasi", "Vijayawada", "Vellore", "Vadodara", "Virar", "Vapi",
  
  // W
  "Warangal", "Wardha", "Wani", "Wokha", "Washim", "Waltair",
  
  // Y
  "Yavatmal", "Yamunanagar", "Yellandu", "Yemmiganur", "Yadgir", "Yerraguntla",
  
  // Z
  "Zira", "Zunheboto", "Zahirabad", "Zamania", "Zaidpur", "Ziro"
];

  return (
    <div>
      <Autocomplete suggestions={locations} />
    </div>
  );
};

export default App;
