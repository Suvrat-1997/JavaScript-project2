console.log("This is index.js");

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype

Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

    tableBody.innerHTML += uiString;
}
//Implement the clear function

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//Implement the validate function

Display.prototype.validate = function (book) {
    let libraryForm = document.getElementById('libraryForm');
    if (book.name.length < 3 || book.author.length < 3) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message:</strong>${displayMessage} 
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`

    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);
}


// Add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted Library Form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let programming = document.getElementById('programming');
    let zymnastic = document.getElementById('zymnastic');
    let cooking = document.getElementById('cooking');
    let nature = document.getElementById('nature');

    if (programming.checked) {
        type = programming.value;
    }
    else if (zymnastic.checked) {
        type = zymnastic.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else if (nature.checked) {
        type = nature.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been successfully added.');
    }
    else {
        // show error to the user
        display.show('danger', ' Sorry You cannot add this book.');

    }




    e.preventDefault();

}