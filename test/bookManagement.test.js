const { expect } = require("chai");


describe("Book management", () => {
    before(async () => {
        this.Library = await ethers.getContractFactory("Library");
    })

    beforeEach(async () => {
        this.library = await this.Library.deploy();
        await this.library.deployed();
    })

    // const CreateBook = async (title = "Lord of the Flies", author = "William Golding") => await this.library.createBook(title, author);

    it("user should be able to add a book", async () => {
        await this.library.createBook("Lord of the Flies", "William Golding");   
        expect((await this.library.getBook(0)).toString()).not.to.be.undefined()     
    })
    it("user should be able to get a book title and the author name", async () => {
        await CreateBook();
        expect((await this.library.getBook(0)).toString()).to.be({ title: "Lord of the Flies", author: "William Golding" })
    })
})