import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* <Image
        src=""
        alt="avatar"
        className=" mx-auto border rounded-full "
        height={128}
        width={128}
        layout="intrinsic"
        quality="100"
      /> */}
      <h3 className="my-10 text-4xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Boris</span> Ivanov
      </h3>
      <p className="px-2 py-2 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Senior Full Stack Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Resume-Boris-Ivanov.pdf"
        download="Resume-Boris-Ivanov.pdf"
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.linkedin.com/in/boris-ivanov-358626279/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/ancient310/">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Shtip, North Macedonia </span>
        </div>
        <p className="my-2 "> ivanovboris310@gmail.com </p>
        <p className="mx-1.5 my-2"> 389358626279 / 19107221111 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-12/12 px-5 py-2 mx-2 my-6 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:ivanovboris310@gmail.com")}
      >
        Contact Me
      </button>
      <button
        onClick={changeTheme}
        className="w-12/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
