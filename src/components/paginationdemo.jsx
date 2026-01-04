import { usePagination } from '../hooks/usePagination';
export const PaginationDemo = () => {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  
  const { 
    currentPage, 
    totalPages, 
    startIndex, 
    endIndex, 
    nextPage, 
    prevPage, 
    canNextPage, 
    canPrevPage 
  } = usePagination(50, 10);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Pagination Demo</h2>
      
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        {items.slice(startIndex, endIndex).map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>

      <button onClick={prevPage} disabled={!canPrevPage}>Previous</button>
      <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
      <button onClick={nextPage} disabled={!canNextPage}>Next</button>
    </div>
  );
};
