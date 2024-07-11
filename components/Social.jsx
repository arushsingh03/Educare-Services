import Link from "next/link";

import { FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";

const socials = [
  {icon: <FaLinkedinIn />, path: ""},
  {icon: <FaTwitter />, path: ""},
  {icon: <FaYoutube />, path: "https://www.youtube.com/@Educareservices"},
  {icon: <FaFacebook />, path: ""},
  {icon: <FaInstagram />, path: ""},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return ( 
          <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
          </Link>
          );
      })}
    </div>
  );
};

export default Social;