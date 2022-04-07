import { Fragment, useEffect, useState } from "react";
import CardPage from "../card-page/card-page.component";
import Pagination from "../pagination/pagination.component";

const CardList = ({ superheros }) => {
  const SUPERHEROS_PER_PAGE = 12;

  const [currentPage, setCurrentPage] = useState(1);

  const lastPageNumber = Math.ceil(superheros.length / SUPERHEROS_PER_PAGE);
  let lastIndex = currentPage * SUPERHEROS_PER_PAGE;
  let startIndex = lastIndex - SUPERHEROS_PER_PAGE;
  let filteredSuperhero = superheros.slice(startIndex, lastIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [superheros]);

  useEffect(() => {
    lastIndex = currentPage * SUPERHEROS_PER_PAGE;
    startIndex = lastIndex - SUPERHEROS_PER_PAGE;
    filteredSuperhero = superheros.slice(startIndex, lastIndex);
  }, [currentPage]);

  return (
    <Fragment>
      <CardPage superheros={filteredSuperhero} />

      <Pagination
        currentPage={currentPage}
        lastPageNumber={lastPageNumber}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </Fragment>
  );
};

export default CardList;
