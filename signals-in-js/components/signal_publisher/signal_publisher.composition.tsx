import React from 'react';
import { Signals } from '@anjanaorg/signals-in-js.components.signals';
import { SignalPublisher } from './signal_publisher.js';

export const BasicSignalPublisher = () => {
  return (
    <SignalPublisher signal={new Signals()}>Send your publication message</SignalPublisher>
  );
}
