import { Link } from "react-router-dom"; 
export const Footer = () => {
  return (
<footer className="bg-white shadow  dark:bg-gray-800 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to ="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.instagram.com/_.kratos_/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
        </li>
        <li>
            <a href="https://www.facebook.com/rishav.shrestha.33" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Facebook</a>
        </li>
        <li>
            <a href="https://github.com/rishav69" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Github</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/rishav-shrestha-78470b212/" rel="noreferrer" target="_blank" className="hover:underline">LinkedIn</a>
        </li>
    </ul>
    </div>
</footer>
  )
}
