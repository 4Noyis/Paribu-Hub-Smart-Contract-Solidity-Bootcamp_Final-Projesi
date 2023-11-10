
import React, { useState } from 'react';
import { ethers } from 'ethers';

// Import the ABI (Application Binary Interface) of the smart contract
import RentalContractABI from './RentalContractABI.json';
// Contract address (replace with the actual deployed contract address)
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// Create a new ethers.js contract instance
const rentalContract = new ethers.Contract(contractAddress, RentalContractABI, ethers.getDefaultProvider());

function RentalApp() {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const registerUser = async () => {
    // Connect to the user's Ethereum wallet (MetaMask, for example)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Connect to the smart contract using the signer
    const contractWithSigner = rentalContract.connect(signer);

    try {
      // Call the registerUser function on the smart contract
      const transaction = await contractWithSigner.registerUser(userType, name, email);

      // Wait for the transaction to be mined
      await transaction.wait();

      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h1>Rental Contract Application</h1>
      <div>
        <label>User Type:</label>
        <input type="text" onChange={(e) => setUserType(e.target.value)} value={userType} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
      <button onClick={registerUser}>Register User</button>
    </div>
  );
}

export default RentalApp;