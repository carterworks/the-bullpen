import { useEffect, useState } from 'preact/hooks';

async function getApiEndpoint(
  endpoint,
  setError,
  setLoading,
  setResponse,
  isJson = false,
) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      setError(response.statusText);
      return;
    }
    setResponse(await (isJson ? response.json() : response.text()));
  } catch (err) {
    setError(err.toString());
  } finally {
    setLoading(false);
  }
}

export function useGetRequest(endpoint, isJson = false) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    getApiEndpoint(endpoint, setError, setLoading, setResponse, isJson);
  }, [endpoint]);

  return [error, loading, response];
}
