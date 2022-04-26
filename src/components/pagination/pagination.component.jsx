import "./pagination.styles.css";

//const arr = [-3, -2, -1, 0, 1, 2, 3];

// const PaginationNumber = (
//   currentPage,
//   index,
//   handlePageNumber,
//   lastPageNumber
// ) => {
//   // 1. currentPage > Math.abs(index)
//   // 2. currentPage > lastPageNumber - index
//   // 3. index > 0

//   /*
//     1 && 2 ==> return 0;
//     1 && 2(0) ==> return 1;
//     1(0) && 3 ==> return 1;
//     1(0) && 3(0) ==> return 0;

//   */

//   // const a =
//   //   currentPage > Math.abs(index) && currentPage > lastPageNumber - index;

//   // const b =
//   //   currentPage > Math.abs(index) && !(currentPage > lastPageNumber - index);

//   // const c = !(currentPage > Math.abs(index)) && index > 0;

//   // const d = !(currentPage > Math.abs(index)) && !(index > 0);

//   if (currentPage > Math.abs(index)) {
//     if (currentPage > lastPageNumber - index) {
//       return <></>;
//     } else {
//       return (
//         <li>
//           <a onClick={handlePageNumber(currentPage + index)}>
//             {currentPage + index}
//           </a>
//         </li>
//       );
//     }
//   } else {
//     if (index > 0) {
//       return (
//         <li>
//           <a onClick={handlePageNumber(currentPage + index)}>
//             {currentPage + index}
//           </a>
//         </li>
//       );
//     } else {
//       return <></>;
//     }
//   }
// };

const Pagination = ({
  currentPage,
  lastPageNumber,
  onNextPage,
  onPrevPage,
  handlePageNumber,
}) => {
  return (
    <div data-pagination>
      <a onClick={onPrevPage} disabled={currentPage == 1}>
        &#8249;
      </a>
      <ul className="current">
        {/* {arr.map((index) => {
          return PaginationNumber(
            currentPage,
            index,
            handlePageNumber,
            lastPageNumber
          );
        })} */}
        {currentPage && currentPage > 3 ? (
          <li>
            <a onClick={handlePageNumber(currentPage - 3)}>{currentPage - 3}</a>
          </li>
        ) : (
          <></>
        )}
        {currentPage && currentPage > 2 ? (
          <li>
            <a onClick={handlePageNumber(currentPage - 2)}>{currentPage - 2}</a>
          </li>
        ) : (
          <></>
        )}

        {currentPage && currentPage > 1 ? (
          <li>
            <a onClick={handlePageNumber(currentPage - 1)}>{currentPage - 1}</a>
          </li>
        ) : (
          <></>
        )}

        <li>
          <a onClick={handlePageNumber(currentPage)}>
            <b>{currentPage}</b>
          </a>
        </li>

        {currentPage &&
        currentPage < lastPageNumber &&
        lastPageNumber - currentPage >= 1 ? (
          <li>
            <a onClick={handlePageNumber(currentPage + 1)}>{currentPage + 1}</a>
          </li>
        ) : (
          <></>
        )}

        {currentPage &&
        currentPage < lastPageNumber - 2 + 1 &&
        lastPageNumber - currentPage >= 2 ? (
          <li>
            <a onClick={handlePageNumber(currentPage + 2)}>{currentPage + 2}</a>
          </li>
        ) : (
          <></>
        )}

        {currentPage &&
        currentPage < lastPageNumber - 3 + 1 &&
        lastPageNumber - currentPage >= 3 ? (
          <li>
            <a onClick={handlePageNumber(currentPage + 3)}>{currentPage + 3}</a>
          </li>
        ) : (
          <></>
        )}
      </ul>

      <a onClick={onNextPage} disabled={currentPage == lastPageNumber}>
        &#8250;
      </a>
    </div>
  );
};

export default Pagination;
