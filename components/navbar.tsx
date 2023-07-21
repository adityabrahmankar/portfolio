import Sidebar from "./sidebar";

const Navbar = () => {
    return ( 
        <div className="w-full relative z-10">
            <div className="hidden w-full fixed md:flex  md:h-16 bg-black backdrop-blur-md text-white">
                <Sidebar />
            </div>
        </div>
     );
}
 
export default Navbar;