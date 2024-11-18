import React from 'react'
import { Button } from "@/components/ui/button"
import { Mail, Phone } from 'lucide-react'
import InstagramIcon from "./ic/instagram"
import FacebookIcon from "./ic/facebook"
import YoutubeIcon from "./ic/youtube"
import TwitterIcon from "./ic/twitter"
import Link from 'next/link'

const Ads = () => {
  return (
    <div className="w-screen lg:px-32 bg-green-background text-white px-10 py-4 hidden md:flex items-center justify-between">
      <div className="flex lg:gap-6 gap-1 lg:flex-row flex-col">
        <Link href="/" className="text-xs flex-row flex items-center gap-2 text-nowrap">
          <Phone width={15} height={15} />
          (225) 555-0118
        </Link>
        <Link href="/" className="text-xs flex-row flex items-center gap-2">
          <Mail width={15} height={15} />
          michelle.rivera@example.com
        </Link>
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className="font-bold hover:text-white text-sm text-nowrap">
          Follow Us and get a chance to win 80% off
        </Link>
      </nav>
      <div className="hidden md:flex items-center space-x-4 text-sm gap-4">
        <p className="font-bold">Follow us :</p>
        <Button className="w-0" variant="ghost" size="icon">
          <InstagramIcon />
        </Button>
        <Button className="w-0" variant="ghost" size="icon">
          <YoutubeIcon />
        </Button>
        <Button className="w-0" variant="ghost" size="icon">
          <FacebookIcon />
        </Button>
        <Button className="w-0" variant="ghost" size="icon">
          <TwitterIcon />
        </Button>
      </div>
    </div>
  );
}

export default Ads