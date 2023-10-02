import portfolio from "../assets/projects/portfolio.png";
import allcardb from "../assets/projects/allcardb.png";
import unitedelite from "../assets/projects/unitedelite.png";
import weddingInvitation from "../assets/projects/wedding-invitation.png";

export const data = [
    {
        id: 1,
        name: "Portfolio Website",
        image: portfolio,
        github: "https://github.com/foqsi/react-portfolio",
        desc: "This portfolio was built in a NodeJS package with React & TailwindCSS to display my projects.",
    },
    {
        id: 2,
        name: "Car DB - WIP",
        image: allcardb,
        github: "https://github.com/foqsi/allcardb",
        live: "https://www.allcardb.com",
        desc: "This project uses React & an API to display information about a vehicle. Plan to implement search functionality & images.",
    },
    // {
    //     id: 3,
    //     name: "United Elite - WIP",
    //     image: unitedelite,
    //     github: "https://github.com/foqsi/react-unitedelite",
    //     live: "",
    //     desc: "This is a project for a friend. A website for his business that allows him to display his services & contact information.",
    // },
    {
        id: 4,
        name: "Wedding Invitation",
        image: weddingInvitation,
        github: "https://github.com/foqsi/wedding-invitation",
        live: "http://apollo.occc.edu/user3976/invitation/public/index.html",
        desc: "This was a project for a friend. A simple wedding invitation website that allows us to track RSVPs.",
    }

]