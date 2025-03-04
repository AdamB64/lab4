import Link from 'next/link'
export default function Navbar() {
 return (
 <ul>
 <li>
 <Link href="/">Home</Link>
 </li>
 <li>
 <Link href="/about">About Us</Link>
 </li>
<li>
	 <Link href="/list">To Do List</Link>
</li>
 </ul>
 );
}

