import React from 'react';

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	recordsPerPage: number;
}

const Pagination = (props: PaginationProps) => {
	let { totalPages, currentPage, setCurrentPage, recordsPerPage } = props;

	const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);
	let recordGroup = recordsPerPage * currentPage;
	let totalRecords = recordsPerPage * totalPages;

	const nextPage = () => {
		if (currentPage !== totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className='pagination--container'>
			<p>
				Showing {recordGroup} of {totalRecords}
			</p>
			<ul>
				<li>
					<button
						type='button'
						className='btn btn-pagination'
						onClick={previousPage}
					>
						Previous
					</button>
				</li>
				{pageNumbers.map((pageNumber) => {
					return (
						<li key={pageNumber}>
							<button
								type='button'
								className='btn btn-pagination'
								onClick={() => setCurrentPage(pageNumber)}
							>
								{pageNumber}
							</button>
						</li>
					);
				})}
				<li>
					<button
						type='button'
						className='btn btn-pagination'
						onClick={nextPage}
					>
						Next
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
