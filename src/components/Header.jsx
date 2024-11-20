import moment from "moment/moment";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <div className="flex justify-center flex-col items-center mt-10">
        <div className="w-[471px]">
          <img className=" w-full h-full" src={logo} alt="logo" />
        </div>
        <p className="text-gray-500 text-lg mt-5">
          Journalism Without Fear or Favour
        </p>
        <p className="text-gray-500 text-xl font-medium mt-2">
          <span className="text-black ">{moment().format("dddd")} </span>{" "}
          {moment().format("MMM D, YYYY")}
        </p>
      </div>
    </>
  );
}
