import { useState } from 'react';
import { FaXmark,  } from 'react-icons/fa6';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';






function App() {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </>
  );
  return (
    <>
      <div className="flex relative">
        <div
          className={` w-[15rem] bg-white border-2 shadow-xl drop-shadow-2xl h-[90vh] absolute z-10 ${
            !open && 'hidden'
          } duration-500  lg:hidden top-[4.3rem]`}
        >
          <div className="flex flex-col items-center gap-5 mt-24">
            <img
              className="w-16 h-16 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1GF5jMq6-jZ_ECZ5jDHvUotsaM0K4RcSaA&s"
              alt="Profile"
            />
            <h1>Name : </h1>

            <div>
              <ul className="flex flex-col gap-4">{navLinks}</ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-2 py-4 px-4 bg-slate-300 w-full h-15">
          <div>logo </div>
          <div>
            {/* menu button home about service  */}

            <div>
              <ul className="items-center gap-5 hidden lg:flex ">{navLinks}
              
              
                <div>
              </div>
              </ul>
            </div>
            {/* navbar end lg device  */}
          </div>
          <div className="flex items-center gap-3">
            profile
            <div
              className="text-2xl border-2 p-1 md:flex lg:hidden flex text-white bg-rose-600"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaXmark /> : <HiOutlineMenuAlt1 />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
