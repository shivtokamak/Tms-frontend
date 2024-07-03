import React, { useState, useEffect } from 'react';
import getCurrentNetwork from '../../hooks/getCurrentNetwork';

const SuccessCard = ({ txnHash }) => {
  const [explorerUrl, setExplorerUrl] = useState('');

  useEffect(() => {
    async function fetchCurrentNetwork() {
      const currentNetwork = await getCurrentNetwork();
      const explorerUrl = currentNetwork.chain.blockExplorers.default.url;
  
      setExplorerUrl(explorerUrl);
    }
    fetchCurrentNetwork();
  }, [txnHash]);

  return (
    <div className='flex flex-col px-5 py-6 mt-5 max-w-65 rounded w-full '>
      <div className='h-full w-full  rounded-md mx-auto my-10 p-5 text-center '>
        <h1 className=' text-xl font-bold p-3 flex justify-center'>SUCCESS!</h1>

        <p className='text-base mb-4 '>
          View transaction on{' '}
          <a
            className='text-blue-600 hover:underline'
            href={`${explorerUrl}/tx/${txnHash}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Titan Explorer
          </a>
        </p>
        <p className='text-base mb-4 '>
          {' '}
          <a
            className='text-blue-600 hover:underline'
            href={`${explorerUrl}/tx/${txnHash}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            {txnHash}
          </a>
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;
