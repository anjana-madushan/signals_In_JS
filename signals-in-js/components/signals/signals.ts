type CallbackFunction = (data: any) => void;

export class Signals {
  private listeners: CallbackFunction[] = [];

  subscribe(callback: CallbackFunction): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  unsubscribe(callback: CallbackFunction): void {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }

  dispatch(data: any): void {
    this.listeners.forEach(listener => listener(data));
  }
}
