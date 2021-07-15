import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useGetRequest } from './api';

export function TeamPicker() {
  const [teamsError, teamsLoading, teams] = useGetRequest(
    '/.netlify/functions/getTeams',
    true,
  );

  if (teamsLoading) {
    return <h3>Loading teams…</h3>;
  }
  if (teamsError) {
    console.error('getTeams failed', teamsError);
    return (
      <p>
        <h3 class="text-red-600">Error getting teams!</h3>
        <pre class="whitespace-pre-line bg-gray-800 p-2 rounded">
          {teamsError}
        </pre>
      </p>
    );
  }

  const [members, setMembers] = useState(['Alpha', 'Bravo', 'Charlie']);
  const [newName, setNewName] = useState('');
  const [shouldGetResult, setShouldGetResult] = useState(false);
  const [result, setResult] = useState('');
  const [resultError, setResultError] = useState('');

  function removeMember(member) {
    setMembers(members.filter((mx) => mx !== member));
  }

  function addMembers() {
    setMembers([...members, ...newName.split(',').map((n) => n.trim())]);
    setNewName('');
  }

  if (shouldGetResult) {
    const [resultError, , resultFinal] = useGetRequest(
      `/.netlify/functions/choose?choices=${members.join(',')}`,
    );
    if (resultError) {
      setResultError(resultError);
      setShouldGetResult(false);
    } else if (resultFinal) {
      setResult(resultFinal);
      setShouldGetResult(false);
    }
  }

  return (
    <p>
      {(resultError || result) && (
        <div class="mb-2">
          {!resultError && result && (
            <h3>
              Send your code review to{' '}
              <span class="text-green-600">{result}</span>!
            </h3>
          )}
          {resultError && !result && (
            <h3>
              Error picking code reviewer:{' '}
              <span class="text-red-400">{resultError}</span>
            </h3>
          )}
        </div>
      )}
      <div>
        {Object.entries(teams).map(([key, value]) => (
          <button
            type="button"
            onClick={() => setMembers(value)}
            class="bg-gray-700 mr-2 py-1 px-2 rounded uppercase transition-all hover:ring-4 focus:ring-2 ring-gray-800 active:ring-offset-2"
          >
            {key}
          </button>
        ))}
      </div>
      <div>
        <div>
          <input
            value={newName}
            class="p-1 placeholder-gray-600 mt-2 bg-gray-800 rounded transition-all hover:ring-2 focus:ring-2 ring-gray-700 active:ring-offset-2"
            placeholder="Delta, Echo"
            onChange={(e) => setNewName(e.target.value)}
            type="text"
          />
          <button
            type="button"
            class="uppercase bg-gray-700 mt-2 py-1 px-2 md:ml-2 rounded transition-all hover:ring-4 focus:ring-2 ring-gray-800 active:ring-offset-2"
            onClick={addMembers}
          >
            Add
          </button>
          <button
            type="button"
            disabled={members.length === 0}
            class="disabled:opacity-25 disabled:pointer-events-none uppercase bg-green-600 py-1 px-2 ml-2 rounded transition-all hover:ring-4 focus:ring-2 ring-gray-800 active:ring-offset-2"
            onClick={() => setShouldGetResult(true)}
          >
            Pick
          </button>
        </div>
        <ul class="mt-2">
          {members.map((m) => (
            <li>
              <button
                type="button"
                class="rounded bg-gray-800 px-2 mb-1 select-none transition-colors hover:bg-red-900"
                aria-label={`Remove ${m}`}
                title={`Remove ${m}`}
                onClick={() => removeMember(m)}
              >
                {m}
                <span class="ml-2" aria-hidden="true">
                  ×
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </p>
  );
}
