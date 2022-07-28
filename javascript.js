const btn = document.querySelector("#btn");
const containers = document.querySelector(".boxes");
const form = document.querySelector(".form_container");
const closeBtn = document.querySelector("#close");
const submitBtn = document.querySelector("#submit");
const container = document.querySelector(".container");




btn.addEventListener("click", function(){
    form.style.display = "block";
});

closeBtn.addEventListener("click", function(){
    form.style.display = "none";
});

submitBtn.addEventListener("click", function(event){

    getBook(event);
    list(event);
    
     Library.shift()
    form.style.display = "none";
})

let Library = [];


const getBook = () => {

    const title = document.querySelector("#bk_title").value;
    const author = document.querySelector("#bk_author").value;
    const pages = document.querySelector("#bk_pages").value;
    let read;
    if(document.querySelector("#bk_read").checked === true){
     read = "✅"
    }else{
        read = "❌"
    }
   
    
    let newBook = new book(title,author,pages,read);
    
    Library.push(newBook);
}

function book(title, author, pages, read){
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
    
}

function createDiv(){
    let div = document.createElement("div");
    container.appendChild(div);
}

function list(){
    
    let div = document.createElement("div");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", function(event){
        div.remove();
    })
    let p = document.createElement("p");
    Library.forEach(book => {
        
        for (let item in book){
            div.setAttribute('style', 'white-space: pre;');

            
            p.innerHTML +=  (`${item}: ${book[item]} \r\n`) ;   
        }  
    })


    div.classList.add("boxes");
    deleteButton.classList.add("deleteButton");
    div.appendChild(p);
    div.appendChild(deleteButton);
    container.appendChild(div);
}

function createDeleteButton(){
    
    deleteButton.addEventListener("click", function(event){
        
    })
}