import { Signals } from '@anjanaorg/signals-in-js.components.signals';
import { SignalSubscriber } from './signal_subscriber.js';

export const BasicSignalSubscriber = () => {
  return (
    <SignalSubscriber signal={new Signals()}>Subscribed Publication messages</SignalSubscriber>
  );
}
