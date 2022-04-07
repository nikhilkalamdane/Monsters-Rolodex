import "./pagination.styles.css";

const Pagination = ({
  currentPage,
  lastPageNumber,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="page">
      <button className="btn" onClick={onPrevPage} disabled={currentPage == 1}>
        &#8249;
      </button>
      <div className="numbers">{currentPage}</div>
      <button
        className="btn"
        onClick={onNextPage}
        disabled={currentPage == lastPageNumber}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Pagination;
