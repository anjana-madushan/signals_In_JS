import React, { useState } from 'react';
import { Signals } from '@anjanaorg/signals-in-js.components.signals';

export type SignalPublisherProps = {
  signal: Signals;
  children?: React.ReactNode;
};

export const SignalPublisher = ({ signal, children }: SignalPublisherProps) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handlePushData = () => {
    signal.dispatch(message);
  };

  return (
    <div>
      <h2 style={{color:'#6b5b95'}}>{children}</h2>
      <input type="text" value={message} onChange={handleInputChange} />
      <button type="button" onClick={handlePushData} style={{backgroundColor:'#d9b3ff'}}>Push Data</button>
    </div>
  );
}