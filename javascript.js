    let my_books = [
        
    ]

    function Book(book_title, book_author, book_pages, book_status) {
        this.book_title = book_title;
        this.book_author = book_author;
        this.book_pages = book_pages;
        this.book_status = book_status;
    }

    const add_book_button = document.getElementById('add-book');
    add_book_button.addEventListener('click', add_to_library()); // 'Add Book' button collects invokes add_to_library()
    const my_books_card_component = document.getElementById('my-books');

    function add_to_library() {
        let title_form_field = document.getElementById('title').value;
        let author_form_field = document.getElementById('author').value;
        let pages_form_field = document.getElementById('pages').value;
        let read_form_field = document.getElementById('read').value;
        
        const new_book = new Book(title_form_field, author_form_field, pages_form_field, read_form_field);
        my_books.push(new_book);
        
        document.getElementById('book-form').reset(); // reset form empty
        
        let book_card_component = document.createElement('div');
        book_card_component.className = 'book-card-compenent';
        book_card_component.textContent = new_book.title;
        my_books_card_component.appendChild(book_card_component);

        // // test
        // let log = console.log;
        // log(title_form_field)
        // log(author_form_field)
        // log(pages_form_field)
        // log(read_form_field)
        // log(new_book);
        // log(my_books);
        

        // for (let count = 0; count < my_books.length; i++) {
        //     my_books[count] = new 
        // }
    }