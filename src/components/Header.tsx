"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, User, Menu, Heart, ShoppingBag, X } from 'lucide-react'
import { useLikes } from "./utils/LikeContext"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import SearchBar from "./utils/SearchBar"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const { likeCount } = useLikes();

  return (
    <header className="bg-white shadow w-full sticky top-0 z-10">
      <div className="w-full px-10 lg:px-32 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-blue">
          Bandage
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/shop"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <ShoppingBag className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Shop
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover a wide range of exciting products in our
                          shop. Shop now and enjoy a delightful shopping
                          experience!
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <ListItem href="/shop/1" title="Floating Phone">
                    Experience the latest in mobile technology with our Floating
                    Phone.
                  </ListItem>
                  <ListItem href="/shop/2" title="Smart Watch Pro">
                    Stay connected and track your fitness with the Smart Watch
                    Pro.
                  </ListItem>
                  <ListItem href="/shop/3" title="Wireless Earbuds X">
                    Enjoy high-quality sound with our Wireless Earbuds X.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/shop" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/shop" className={navigationMenuTriggerStyle()}>
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/shop" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/shop" className={navigationMenuTriggerStyle()}>
                  Pages
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-4 text-blue">
          <Button variant="ghost" className="px-0 lg:px-2">
            <User className="h-5 w-5" />
            <span className="lg:block hidden">Login / Register</span>
          </Button>
          <Button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            variant="ghost"
            size="icon"
          >
            <Search className="h-5 w-5" />
          </Button>
          {isSearchOpen && <SearchBar />}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />1
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
            {likeCount > 0 && likeCount}
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <Menu className="h-5 w-5" />
          ) : (
            <X className="h-5 w-5" />
          )}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <nav className="flex flex-col space-y-2 items-center">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-blue-600">
              Shop
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Pages
            </Link>
            <Button variant="ghost" className="text-blue hover:text-blue">
              <User className="h-5 w-5" />
              Login / Register
            </Button>
          </nav>
          <div className="mt-4 flex justify-around text-blue mx-8 mb-4">
            <Button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              variant="ghost"
              size="icon"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />1
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              {likeCount > 0 && likeCount}
            </Button>
          </div>
          {isSearchOpen && <SearchBar />}
        </div>
      )}
    </header>
  );
}

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const ListItem = ({ href, title, children } : ListItemProps) => (
  <li>
    <NavigationMenuLink asChild>
      <Link 
        href={href} 
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
)