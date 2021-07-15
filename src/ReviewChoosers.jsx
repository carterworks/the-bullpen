import { h } from 'preact';
import { WheelODecide } from './WheelODecide';
import { useGetRequest } from './api';

export function ReviewChoosers() {
  const [error, loading, response] = useGetRequest('/.netlify/functions/ping');
  if (loading) {
    return <h3>Loading review chooser…</h3>;
  }
  if (error) {
    console.error('/.netlify/functions/ping failed', error);
    return <WheelODecide />;
  }
  return <h1>Hello world!</h1>;
}
