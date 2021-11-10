import { FaFaceBook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Icons({ color }) {
  return (
    <div className={`${color} text-2xl flex space-x-4`}>
      <FaFaceBook />
      <FaTwitter />
      <FaInstagram />
    </div>
  )
}
