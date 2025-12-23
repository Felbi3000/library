
// create Testbooks
const TestBook = new Book("Test Title", "Test Author");
const TestBook2 = new Book("Test Title2", "Test Author2");

const myLibrary = [TestBook, TestBook2];
const container = document.querySelector("#bookList");

function Book(title, author) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = self.crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.read = false;
}


function updateBookList() {
  // delete list elements
  for (const item in myLibrary) {
    // container.removeChild(item);
    // div.setAttribute("id", "theDiv");
    // div.textContent = "Hello World!";
    
    // Take the ID
    // look for ID in DOM
    // delete item in DOM
  };
  // create list elements
  for (const item in myLibrary) {
    let li = document.createElement('li');
    li.innerText = item.title;
    container.appendChild(li);
    
    
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

updateBookList();