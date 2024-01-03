import './globals.css';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className='nf_wrapp'>
      <h2 className='nf_head'>Not Found</h2>
      <Link className='nf_link' href="/">Return Home</Link>
    </div>
  )
}