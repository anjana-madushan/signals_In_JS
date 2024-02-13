import { MemoryRouter } from 'react-router-dom';
import { SignalDemoApp } from "./signal_demo_app.js";
    
export const SignalDemoAppBasic = () => {
  return (
    <MemoryRouter>
      <SignalDemoApp />
    </MemoryRouter>
  );
}