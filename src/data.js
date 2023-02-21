import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const dataLinks = [
  { id: 1, href: "#home", title: "home" },
  { id: 2, href: "#about", title: "about" },
  { id: 3, href: "#services", title: "services" },
  { id: 4, href: "#tours", title: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: img1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "china",
    duration: "6 days",
    price: "RM2100",
  },
  {
    id: 2,
    image: img2,
    date: "october 1st, 2020",
    title: "Best Of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "Indonesia",
    duration: "11 days",
    price: "RM1400",
  },
  {
    id: 3,
    image: img3,
    date: "September 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "hong kong",
    duration: "8 days",
    price: "RM5000",
  },
  {
    id: 4,
    image: img4,
    date: "december 5th, 2020",
    title: "Kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "kenya",
    duration: "20 days",
    price: "RM3300",
  },
];
