import React from "react";
import { Signals } from '@anjanaorg/signals-in-js.components.signals';
import { SignalSubscriber } from '@anjanaorg/signals-in-js.components.signal_subscriber';
import { SignalPublisher } from '@anjanaorg/signals-in-js.components.signal_publisher';

export function SignalDemoApp() {

  const signal = new Signals();

  return (
   <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh'}}
  >
    <div style={{textAlign:'center'}}>
      <SignalPublisher signal={signal}>Send your publication message</SignalPublisher>
      <SignalSubscriber signal={signal}>Subscribed Publication messages</SignalSubscriber>
    </div>
   </div>
  );
}