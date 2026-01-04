import { PaginationDemo } from './components/paginationdemo';
import { DebounceSearchDemo } from './components/DebounceSearchDemo';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Custom Hooks Lab</h1>
      <hr />
      <PaginationDemo />
      <hr />
      <DebounceSearchDemo />
    </div>
  );
}

export default App;