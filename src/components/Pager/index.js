import React from "react"
import { Icon } from "@iconify/react"

const Pager = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  town,
  loading,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  console.log(pageNumbers)
  return (
    <div className="pagination">
      <div className="pagination__header">
        <p>{town}: znaleziono x obiektów</p>
      </div>

      <div className="pagination__list">
        <ul>
          <li
            className={`${
              currentPage === 1
                ? "pagination__list-disable"
                : "pagination__list-move"
            }`}
            onClick={
              currentPage > 1 && loading
                ? () => paginate(currentPage - 1)
                : null
            }
          >
            <span>
              <Icon icon="ic:baseline-greater-than" rotate={2} />
            </span>
          </li>
          {pageNumbers.map(number => {
            return (
              <li
                key={number}
                className={
                  currentPage === number
                    ? "pagination__list-current"
                    : "pagination__list-notcurrent"
                }
              >
                <a
                  onClick={
                    !loading && number !== currentPage
                      ? () => paginate(number)
                      : null
                  }
                >
                  {number}
                </a>
              </li>
            )
          })}
          <li
            className={`${
              currentPage === pageNumbers.length
                ? "pagination__list-disable"
                : "pagination__list-move"
            }`}
            onClick={
              currentPage < pageNumbers.length && loading
                ? () => paginate(currentPage + 1)
                : null
            }
          >
            <span>
              <Icon icon="ic:baseline-greater-than" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pager
