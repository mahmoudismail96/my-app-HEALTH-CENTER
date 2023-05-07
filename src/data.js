import img1 from "../src/assets/slider1.jpg";
import img2 from "../src/assets/slider2.jpg";
import img3 from "../src/assets/slider3.jpg";
import imgDr1 from "../src/assets/team-image1.jpg";
import imgDr2 from "../src/assets/team-image2.jpg";
import imgDr3 from "../src/assets/team-image3.jpg";
import imgNews1 from "../src/assets/news-image.jpg";
import imgNews2 from "../src/assets/news-image2.jpg";
import imgNews3 from "../src/assets/news-image3.jpg";
import imgNews4 from "../src/assets/news-image1.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

export const links = [
  {
    id: "#",
    name: "Home",
  },
  {
    id: "#about",
    name: "About Us",
  },
  {
    id: "#doctors",
    name: "Doctors",
  },
  {
    id: "#news",
    name: "News",
  },
  {
    id: "#contact",
    name: "Contact",
  },
];

export const carousel = [
  {
    id: 1,
    img: img1,
    text1: "Let's make your life happier",
    text2: "Healthy Living",
    textbtn: "Meet Our Doctors",
  },
  {
    id: 2,
    img: img2,
    text1: "Aenean luctus lobortis tellus",
    text2: "New Lifestyle",
    textbtn: "More About Us",
  },
  {
    id: 3,
    img: img3,
    text1: "Pellentesque nec libero nisi",
    text2: "Your Health Benefits",
    textbtn: "Read Stories",
  },
];

export const doctors = [
  {
    id: 1,
    img: imgDr1,
    textH2: "Nate Baston",
    textP: "General Principal",
    phone: "010-020-0120",
    phoneIcon: <BsFillTelephoneFill />,
    MailIcon: <HiOutlineMailOpen />,
    mail: "general@company.com",
    Facebook: <FaFacebookSquare />,
    inkedin: <ImLinkedin />,
    Twitter: <FaTwitterSquare />,
  },
  {
    id: 2,
    img: imgDr2,
    textH2: "Jason Stewart",
    textP: "Pregnancy",
    phone: "010-070-0170",
    phoneIcon: <BsFillTelephoneFill />,
    MailIcon: <HiOutlineMailOpen />,
    mail: "pregnancy@company.com",
    Facebook: <FaFacebookSquare />,
    inkedin: <ImLinkedin />,
    Twitter: <FaTwitterSquare />,
  },
  {
    id: 3,
    img: imgDr3,
    textH2: "Miasha Nakahara",
    textP: "Cardiology",
    phone: "010-040-0140",
    phoneIcon: <BsFillTelephoneFill />,
    MailIcon: <HiOutlineMailOpen />,
    mail: "cardio@company.com",
    Facebook: <FaFacebookSquare />,
    inkedin: <ImLinkedin />,
    Twitter: <FaTwitterSquare />,
  },
];

export const News = [
  {
    id: 1,
    img: imgNews1,
    textDate: "March 08, 2018",
    textHeadr: "About Amazing Technology",
    textP:
      "Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis.",
    imgDr: imgNews4,
    textName: "Jeremie Carlson",
    textDr: "CEO / Founder",
  },
  {
    id: 2,
    img: imgNews2,
    textDate: "February 20, 2018",
    textHeadr: "Introducing a new healing process",
    textP:
      "Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.",
    imgDr: imgNews4,
    textName: "Jason Stewart",
    textDr: "General Director ",
  },
  {
    id: 3,
    img: imgNews3,
    textDate: "January 27, 2018",
    textHeadr: "Review Annual Medical Research",
    textP:
      "Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim.",
    imgDr: imgNews4,
    textName: "Andrio Abero",
    textDr: "Online Advertising",
  },
];
