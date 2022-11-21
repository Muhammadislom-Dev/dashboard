import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {

    
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <>
      <nav>
        <ul 
        style={{display:"flex", justifyContent:"flex-end", marginTop:"50px", marginRight:"80px"}}
        className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
                className="page-link"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
