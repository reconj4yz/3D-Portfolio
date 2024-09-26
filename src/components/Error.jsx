import  { useState, useEffect } from "react";
const Error = () => {
  const BLACKLISTED_KEY_CODES = [38, 40, 37, 39, 18, 20, 17, 16, 9, 27, 144];
  const COMMANDS = {
    help: "The page you want to visit does not exist, or it may have been deleted, or the wrong address was entered. To see the commands, enter the word commands",
    exit: "",
    report: "This page report has been successfully sent to support.",
    commands: "List of commands: help, report, exit",
    cls: "",
  };

  const [bodyClass, setBodyClass] = useState("");
  const [terminalOutput, setTerminalOutput] = useState("");
  const [inputText, setInputText] = useState("");
  const [str, setStr] = useState("");

  const executeCommand = (input) => {
    if (input.length === 0) return;

    if (!COMMANDS.hasOwnProperty(input)) {
      setTerminalOutput((prev) => prev + "<p>The command entered is not correct</p>");
    } else if (input === "cls") {
      setTerminalOutput("");
    } else if (input === "exit" || input === "close") {
      window.location.href = "../../index.html";
    } else if (input === "report") {
      setTerminalOutput((prev) => prev + `<p>${COMMANDS[input]}</p>`);
    } else {
      setTerminalOutput((prev) => prev + `<p>${COMMANDS[input]}</p>`);
    }
  };

  const keyEvent = (e) => {
    let currentKey = e.key;
    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) return;

    if (e.key === "Enter") {
      executeCommand(str);
      setInputText("");
      setStr("");
      e.target.value = "";
    } else {
      setStr((prev) => prev + currentKey);
      setInputText((prev) => prev + currentKey);
    }
  };

  const backSpace = (e) => {
    if (e.keyCode === 8) {
      setInputText((prev) => prev.slice(0, -1));
      setStr((prev) => prev.slice(0, -1));
    }
  };

  const MenuBTN = (type) => {
    switch (type) {
      case "max":
        setBodyClass((prev) => (prev !== "max" ? "max" : ""));
        break;
      case "min":
        setBodyClass((prev) => {
          if (prev === "max") return "max min";
          else if (prev !== "max") return "min";
          return prev;
        });
        break;
      case "re":
        if (bodyClass === "max min") setBodyClass("max");
        if (bodyClass === "min") setBodyClass("");
        break;
      case "close":
        window.close(); // Close the window or redirect
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", keyEvent);
    document.addEventListener("keydown", backSpace);
    return () => {
      document.removeEventListener("keypress", keyEvent);
      document.removeEventListener("keydown", backSpace);
    };
  }, [str]);

  return (

    <div id="body" className={`flex items-center justify-center h-screen bg-[#171F37] text-white ${bodyClass}`}>
      <main className="transition-all w-4/5 h-3/5">
        <header className="flex justify-between items-center bg-[#313335] py-1 px-3 rounded-t-xl">
          <p>Terminal</p>
          <p className="font-bold">404</p>
          <div className="flex space-x-2">
            <a
              href="#"
              id="min"
              className="block w-5 h-5 rounded-full bg-[#3FC950]"
              onClick={() => MenuBTN("min")}
            />
            <a
              href="#"
              id="max"
              className="block w-5 h-5 rounded-full bg-[#FFBD48]"
              onClick={() => MenuBTN("max")}
            />
            <a
              href="#"
              id="close"
              className="block w-5 h-5 rounded-full bg-[#FA615C]"
              onClick={() => MenuBTN("re")}
            />
          </div>
        </header>
        <div className="bg-[#2B2B2B] w-full h-full p-4 rounded-b-xl overflow-auto">
          <p>Oops! page not found</p>
          <br />
          <p>
            Enter <span className="text-red-500">help</span> for help
          </p>
          <br />
          <div className="Terminal_code">
            <div className="Terminal_line">
              <div className="code" dangerouslySetInnerHTML={{ __html: terminalOutput }} />
              <span className="text-yellow-400 font-bold text-lg ml-2">→</span>
              <span className="user-input inline-block min-w-[5px] relative">{inputText}</span>
            </div>
          </div>
        </div>
      </main>
      {bodyClass.includes("min") && (
        <div className="absolute bottom-0 left-0 m-4 bg-[#3C3F41] rounded-full w-12 h-12 flex justify-center items-center">
          <a href="#" onClick={() => MenuBTN("re")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
              <path fill="#CFD8DC" d="M41,6H7C6.4,6,6,6.4,6,7v35h36V7C42,6.4,41.6,6,41,6z" />
              <path fill="#263238" d="M8 13H40V40H8z" />
              <path
                fill="#90A4AE"
                d="M13.5 8A1.5 1.5 0 1 0 13.5 11 1.5 1.5 0 1 0 13.5 8zM9.5 8A1.5 1.5 0 1 0 9.5 11 1.5 1.5 0 1 0 9.5 8z"
              />
              <g>
                <path fill="#18FFFF" d="M18.5 26.5l-3.5-2V22l6 3.4v2.1L15 31v-2.5L18.5 26.5zM23 29H33V31H23z" />
              </g>
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}

export default Error;
