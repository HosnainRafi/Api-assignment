const bookList = () => {
    const searchText = document.getElementById('search-input').value;
    document.getElementById('search-input').value = '';
    if (searchText == 0) {
        window.alert('Enter valid name');
    }
    else{
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
     fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data))
    }
    
}

const displayResult = books => {
    console.log(books);
    const searchResult = document.getElementById('search-result');
    const section = document.getElementById('section');
    searchResult.textContent = '';
    const h1 = document.createElement('h1');
    h1.classList.add('book-count');
    section.textContent = '';
    h1.innerHTML = `Books available : ${books.numFound}`
    section.appendChild(h1);
    if (books.length == 0) {
        window.alert("Enter the book name correctly")
    }
    books.docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-40">
            <img src="https://covers.openlibrary.org/b/id/${book.id_goodreads[0]}-M.jpg" class="card-img-top img-fluid" height = '60px' alt="...">
            <div class="card-body">
                <h4 class= 'text-center card-title'>Book name : ${book.title} </h4>
                <div class = 'card-text'>
                    <h5>Author Name: ${book.author_name[0]}</h5>
                    <h5>Publish Year: ${book.publish_year[0]}</h5>
                    <h5>Publisher : ${book.publisher[0]}</h5>
                </div>
            </div>
            <div class="card-footer">
                    <small class="text-muted"> ${book.publisher[0]}</small>
            </div>
        </div>
        `
        
        searchResult.appendChild(div);
    })

}