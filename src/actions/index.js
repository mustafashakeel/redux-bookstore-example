export function selectBook(book){
	// console.log(" A Book has been Selected", book.title)

	//  Select Book is an Action Creator it needs to return 
	// an Action an objet with a type property

	return {
		type:'BOOK_SELECTED',
		payload:book

	}

}