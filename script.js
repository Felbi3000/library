
// class for books
class Book {
  constructor (title, author, read){
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

// create Testbooks
const TestBook = new Book("Test Title", "Test Author", true);
const TestBook2 = new Book("Test Title2", "Test Author2");

// get DOM elements
const myLibrary = [TestBook, TestBook2];
const container = document.querySelector("#bookList");
const buttonDisplayForm = document.querySelector("#buttonDisplayForm");

const formAddBook = document.querySelector("#formAddBook");

const addBookTitle = document.querySelector("#addBookTitle");
const addAuthor = document.querySelector("#addAuthor");
const buttonAddBook = document.querySelector("#buttonAddBook");

function updateBookList() {
  // delete list elements
  container.innerHTML = '';

  // create list elements
  myLibrary.forEach (item => {
    const li = document.createElement("li");
    li.className = "book";
    li.id = item.id;

    const titleDiv = document.createElement("div");
    titleDiv.className = "title";
    titleDiv.innerText = item.title;

    const authorDiv = document.createElement("div");
    authorDiv.className = "author";
    authorDiv.innerText = item.author;
    
    const readDiv = document.createElement("div");
    readDiv.className = "read";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.read;
    readDiv.appendChild(checkbox);

    const removeDiv = document.createElement("div");
    removeDiv.className = "remove";
    const button = document.createElement("button");
    const img = document.createElement("img");
    img.src = "/images/trash.svg";
    img.alt = "delete book";
    button.appendChild(img);
    removeDiv.appendChild(button);
    
    // delete function of button
    button.addEventListener('click', function() {
      li.remove(); // Remove the book from the DOM
      // Remove from data array
      const index = myLibrary.findIndex(b => b.id === item.id);
      if (index > -1) {
        myLibrary.splice(index, 1);
      }
    });

    // add elements to DOM
    li.appendChild(titleDiv)
    li.appendChild(authorDiv)
    li.appendChild(readDiv)
    li.appendChild(removeDiv)
    
    container.appendChild(li)
  });
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  // check if fields are not empty
  if (!addBookTitle.value || !addAuthor.value) {
    alert("Please fill in both fields.");
    return;
  }
  const entry = new Book(addBookTitle.value, addAuthor.value, false);
  myLibrary.push(entry);
  addBookTitle.value = "";
  addAuthor.value = "";
  updateBookList();
}

// Button to show and hide the Add Book form
buttonDisplayForm.addEventListener("click", () => {
  if (formAddBook.getAttribute("style") === "visibility: visible") {
    formAddBook.setAttribute("style","visibility: hidden")
  } else {
  formAddBook.setAttribute("style","visibility: visible");
  }
});

// button to add Book
buttonAddBook.addEventListener("click", () => {addBookToLibrary()});

// initial display of the booklist at pageload
updateBookList();