import { useEffect, useState } from 'preact/hooks';

async function getApiEndpoint(endpoint, setError, setLoading, setResponse) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      setError(response.statusText);
      return;
    }
    setResponse(await response.text());
  } catch (err) {
    setError(err.toString());
  } finally {
    setLoading(false);
  }
}

export function useGetRequest(endpoint) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    getApiEndpoint(endpoint, setError, setLoading, setResponse);
  }, [endpoint]);

  return [error, loading, response];
}
