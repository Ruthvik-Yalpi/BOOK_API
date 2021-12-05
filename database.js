const books = [
    {
        ISBN: "12345bOOK",
        title: "Getting started with mern",
        pubDate: "2021-11-25",
        language: "en",
        numPage: 250,
        author: [1, 2],   //id of authors
        publications: [1],
        category: ["tech", "programming", "education"]
    },
    {
        ISBN: "bahu123",
        title: "Bahubali",
        pubDate: "2021-11-25",
        language: "telugu",
        numPage: 250,
        author: [1, 2],   //id of authors
        publications: [1],
        category: ["movie","history"]
    },
    {
        ISBN: "bahu123en",
        title: "Bahubali",
        pubDate: "2021-11-25",
        language: "en",
        numPage: 250,
        author: [1, 2],   //id of authors
        publications: [1],
        category: ["movie","history"]
    }
];

const author = [
    {
        id: 1,
        name: "Ruthvik",
        books: ["12345bOOK"]
    },
    {
        id: 2,
        name: "Elon Musk",
        books: ["12345bOOK"]
    }

];

const publication = [
    {
        id: 1,
        name: "Writex",
        books: ["12345bOOK"]
    },{
        id:2,
        name:"Writex2",
        books:[]
    }
];


module.exports={books,author,publication};

//mongoose can be used for validation
