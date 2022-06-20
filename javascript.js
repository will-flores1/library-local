    let my_books = [];

    // Book object constructor
    function Book(book_title, book_author, book_pages, book_read) {
        this.book_title = book_title;
        this.book_author = book_author;
        this.book_pages = book_pages;
        this.book_read = book_read;
    }

    const my_books_card_component = document.getElementById('my-books');
    const add_book_button = document.getElementById('add-book');
    add_book_button.addEventListener('click', add_to_library); // 'Add Book' button invokes add_to_library()

    function add_to_library() {
        
        // html input elementss
        let title_form_field = document.getElementById('title').value;
        let author_form_field = document.getElementById('author').value;
        let pages_form_field = document.getElementById('pages').value;
        let read_form_field = document.getElementById('read').value;

        if (title_form_field == '' || author_form_field == '' || pages_form_field == '') {
            alert(`Please fill out the form completely.`)
            return
        }

        // instantiate new Book object
        const new_book = new Book(title_form_field, author_form_field, pages_form_field, read_form_field);
        my_books.push(new_book);

        // reset form values
        document.getElementById('book-form').reset();
        
        // Create new book component
        let book_card_component = document.createElement('div');
        book_card_component.className = 'book-card-component';
        my_books_card_component.appendChild(book_card_component);

        let title_component = document.createElement('p');
        title_component.textContent = `Title: ${title_form_field}`;
        book_card_component.appendChild(title_component);

        let author_component = document.createElement('p');
        author_component.textContent = `Author: ${author_form_field}`;
        book_card_component.appendChild(author_component);

        let pages_component = document.createElement('p');
        pages_component.textContent = `Pages: ${pages_form_field}`;
        book_card_component.appendChild(pages_component);

        let read_component = document.createElement('select');
        book_card_component.appendChild(read_component);
        let read_component_option = document.createElement('option');
        read_component_option.setAttribute('value', 'Yes');
        read_component_option.textContent = 'Yes'
        if (read_form_field == 'Yes') read_component_option.selected = 'select';
        let read_component_option2 = document.createElement('option');
        read_component_option2.setAttribute('value', 'No');
        read_component_option2.textContent = 'No'
        if (read_form_field == 'No') read_component_option2.selected = 'select';
        read_component.appendChild(read_component_option);
        read_component.appendChild(read_component_option2);
        
        // Remove book button functionality
        let remove_book_btn = document.createElement('button');
        remove_book_btn.className = 'remove-book-btn';
        remove_book_btn.textContent = 'X';
        book_card_component.appendChild(remove_book_btn);
        remove_book_btn.addEventListener('click', () => {
            my_books_card_component.removeChild(book_card_component);
        });
    }