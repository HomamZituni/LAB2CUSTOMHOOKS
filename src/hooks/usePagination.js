import { useState } from 'react';

export const usePagination = (totalItems, itemsPerPage = 10, initialPage = 1) => {
const [currentPage, setCurrentPage] = useState(initialPage);
const totalPages = Math.ceil(totalItems / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
const itemsOnCurrentPage = endIndex - startIndex;

 const setPage = (pageNumber) => {
    const page = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(page);
  };

  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);
  
};


