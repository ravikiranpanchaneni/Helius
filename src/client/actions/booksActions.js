
export const actionTypes = {
		FETCH_BOOKS_START: 'fetch_books_start',
		FETCH_BOOKS_SUCESS: 'fetch_books_sucess',
		FETCH_BOOKS_FAILED: 'fetch_books_failed'

}

export const fetchBooksStart = () => ({
type: actionTypes.FETCH_BOOKS_START
});


export const fetchBooksSucess = (books) => ({
type: actionTypes.FETCH_BOOKS_SUCESS,
payload: books
});
