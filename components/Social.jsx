import Link from "next/link";

import { FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";

const socials = [
  {icon: <FaLinkedinIn />, path: ""},
  {icon: <FaTwitter />, path: "https://x.com/EducareL23579"},
  {icon: <FaYoutube />, path: "https://www.youtube.com/@Educareservices"},
  {icon: <FaFacebook />, path: "https://www.facebook.com/share/sGKAmLJjvt1EpooV/?mibextid=qi2Omg"},
  {icon: <FaInstagram />, path: "https://www.instagram.com/educare_services_?igsh=ZmFnMjRmdHhpNGxl"},
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