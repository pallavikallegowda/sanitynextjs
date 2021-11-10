import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function SocialIcons({ color }) {
  return (
    <div className={`${color} text-3xl flex space-x-4 pt-5`}>
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
    </div>
  )
}
