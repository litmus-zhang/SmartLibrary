// SPDX-License-Identifier == Unlicensed

pragma solidity ^0.8.0;

contract Library{

    struct Book{
        string title;
        string authorName;
    }

    Book[] public books;


    function createBook( string memory title , string memory author ) public {
       Book memory newBook = Book(title,author);
        books.push(newBook);
    }

    function getBook(uint index) public view returns (Book memory){
        return books[index];
    } 



    

}