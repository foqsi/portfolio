import portfolio from "../assets/projects/portfolio.png";
import allcardb from "../assets/projects/allcardb.png";
import elrenonailspa from "../assets/projects/elrenonailspa.png";
import pchr from "../assets/projects/pchr.png";
import csp from "../assets/projects/csp-classproject.png";

export const data = [
    {
        id: 1,
        name: "El Reno Nail Spa",
        image: elrenonailspa,
        github: "https://github.com/foqsi/react-salon",
        live: "https://www.elrenonailspa.com",
        desc: "Simple site for a nail salon. Admin can update banner, gallery, and services (Postgres). Appointment form with limits—no past dates or overbooking. Uses EmailJS for notifications.",
    },
    {
        id: 2,
        name: "Portfolio Website",
        image: portfolio,
        github: "https://github.com/foqsi/react-portfolio",
        desc: "This portfolio was built in a NodeJS package with React & TailwindCSS to display my projects.",
    },
    {
        id: 3,
        name: "Car DB - WIP",
        image: allcardb,
        github: "https://github.com/foqsi/allcardb",
        live: "https://www.allcardb.com",
        desc: "This project uses React & an API to display information about a vehicle. Plan to implement search functionality & images.",
    },
    {
        id: 4,
        name: "Personal Care Health Record - NO LIVE",
        image: pchr,
        github: "https://github.com/foqsi/CSharp-PCHR",
        desc: "C# Class Project. Provided with an unfinished DB, I used Migration Builder to modify it to create *-1 & *-* relationships.",
    },
    {
        id: 5,
        name: "CSP Project",
        image: csp,
        github: "https://github.com/foqsi/CSP-FinalProject",
        live: "http://apollo.occc.edu/user3976/csp/jschapter11/index.html",
        desc: "This was a class final project for Client Side Programming. It is built with HTML, CSS, & JavaScript."
    }


]