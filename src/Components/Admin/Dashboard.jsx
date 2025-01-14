import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import control from "../../assets/control.png"
import  calendar   from "../../assets/Calendar.png"
import  User  from "../../assets/User.png"
import Folder from "../../assets/Folder.png"
import logo from "../../assets/logo.png"
import Search from "../../assets/Search.png"
import Setting from "../../assets/Setting.png"
import Chat from "../../assets/Chat.png"
import chart from "../../assets/Chart.png"
import Chart_fill from "../../assets/Chart_fill.png"

function Dashboard() {
  
 const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Dashboard", src: Chart_fill },
      { title: "Inbox", src: Chat },
      { title: "Accounts", src: User, gap: true },
      { title: "Schedule ", src: calendar },
      { title: "Search", src: Search },
      { title: "Analytics", src: chart },
      { title: "Files ", src: Folder, gap: true },
      { title: "Setting", src: Setting },
    ];

  return (
    <div className="flex py-24">
    <div
      className={` ${
        open ? "w-72" : "w-40 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    > 
      <img
        src={control}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md ${open? "p-2":"p-0"} cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4  
            mt-9 ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={Menu.src} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="h-screen flex-1 p-9 ml-7 "> 
      
      <Outlet></Outlet>
    </div>
  </div>
  
  )
}

export default Dashboard