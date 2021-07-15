import { h } from 'preact';
import { WheelODecide } from './WheelODecide';
import { useGetRequest } from './api';
import { TeamPicker } from './TeamPicker';

export function ReviewChoosers() {
  const [error, loading] = useGetRequest('/.netlify/functions/ping');
  if (loading) {
    return <h3>Loading review chooser…</h3>;
  }
  if (error) {
    console.error('/.netlify/functions/ping failed', error);
    return <WheelODecide />;
  }
  return <TeamPicker />;
}
