import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export const DebounceSearchDemo = () => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Debounce Demo</h2>
      
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type here..." 
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      
      <p><strong>Current Input:</strong> {input || '(empty)'}</p>
      <p><strong>Debounced Value:</strong> {debouncedInput || '(empty)'}</p>
      
      {debouncedInput && (
        <div style={{ padding: '10px', backgroundColor: '#000', marginTop: '10px' }}>
          Searching for: "{debouncedInput}"
        </div>
      )}
    </div>
  );
};
