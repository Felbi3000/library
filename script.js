const myLibrary = [];
const container = document.querySelector("#bookList");

function Book(id, title, author) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = Crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.read = false;
}



function updateBookList() {
  // delete list elements
  for (const item in myLibrary) {
    container.removeChild(item);
    // div.setAttribute("id", "theDiv");
    // div.textContent = "Hello World!";
    
    // 
  };
  // create list elements
  for (const item in myLibrary) {
    // create li item with ID = item.id
    // const div = document.createElement("div");

    // create divs with classes title, author, read and remove button

    // parentNode.appendChild(childNode)
    // div.setAttribute("id", "theDiv");
    // div.textContent = "Hello World!";
    
    // 
  };
}

function addBookToLibrary() {
  // take params, create a book then store it in the array

  updateBookList();
}

function deleteBook () {
  // div.getAttribute("id");
  updateBookList();
}


// read array
// put item in div