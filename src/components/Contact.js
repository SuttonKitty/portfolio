import { BsMailbox2Flag } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-3xl w-fit mt-5 flex flex-row gap-3 md:mt-0 md:flex-col md:gap-1">
        <div>
            <a href="mailto:suttonfritz04@gmail.com" target="_blank" rel="noopener noreferrer" alt="Gmail" className="hover:text-[#C71610]"><BsMailbox2Flag /></a>
        </div>

        <div>
            <a href="https://github.com/SuttonKitty" target="_blank" rel="noopener noreferrer" alt="GitHub" className="hover:text-[#501DAF]"><FaSquareGithub /></a>
        </div>

        <div>
            <a href="www.linkedin.com/in/sutton-fritz" target="_blank" rel="noopener noreferrer" alt="LinkedIn" className="hover:text-[#0077B5]"><FaLinkedin /></a>
        </div>
    </div>
  )
}

export default Contact
