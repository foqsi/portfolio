import portfolio from "../assets/projects/portfolio.png";
import allcardb from "../assets/projects/allcardb.png";
import elrenonailspa from "../assets/projects/elrenonailspa.png";
import weddingInvitation from "../assets/projects/wedding-invitation.png";
import wsd2 from "../assets/projects/wsd-classproject.png";
import csp from "../assets/projects/csp-classproject.png";

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
    {
        id: 3,
        name: "El Reno Nail Spa - WIP",
        image: elrenonailspa,
        github: "https://github.com/foqsi/salon",
        live: "https://www.elrenonailspa.com",
        desc: "This Vue project is for a nail salon business. It allows users to create appointments and view services.",
    },
    {
        id: 4,
        name: "Wedding Invitation",
        image: weddingInvitation,
        github: "https://github.com/foqsi/wedding-invitation",
        live: "http://apollo.occc.edu/user3976/invitation/public/index.html",
        desc: "This was a project for a friend. A simple wedding invitation website that allows us to track RSVPs with a realtime DB.",
    },
    {
        id: 5,
        name: "WSD Project Store",
        image: wsd2,
        github: "https://github.com/foqsi/WSD-FinalProject/tree/second-project",
        live: "http://apollo.occc.edu/user3976/wsd/pacific14/index.html",
        desc: "This was project for the same Web Site class. It is built with basic HTML & CSS. It is a mock store."
    },
    {
        id: 6,
        name: "CSP Project",
        image: csp,
        github: "https://github.com/foqsi/CSP-FinalProject",
        live: "http://apollo.occc.edu/user3976/csp/jschapter11/index.html",
        desc: "This was a class final project for Client Side Programming. It is built with HTML, CSS, & JavaScript."
    }


]