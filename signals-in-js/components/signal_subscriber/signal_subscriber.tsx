import React, { useState, type ReactNode, useEffect } from 'react';
import { Signals } from '@anjanaorg/signals-in-js.components.signals';

export type SignalSubscriberProps = {
  signal:Signals;
  children?: ReactNode;
};

export const SignalSubscriber = ({  signal, children }: SignalSubscriberProps)=> {

  const [messages, setMessage] = useState<string[]>([]);

  useEffect(() => {
    const handleMessage = (message: string) => {
      setMessage(prevMessages => [...prevMessages, message]);
    };

    signal.subscribe(handleMessage);
    return () => {
      signal.unsubscribe(handleMessage);
    };
  }, [signal]);

  return (
    <div>
    <h2 style={{color:'#6b5b95'}}>{children}</h2>
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  </div>
  );
}
