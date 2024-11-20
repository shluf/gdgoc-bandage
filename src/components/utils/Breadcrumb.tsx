import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
  items?: BreadcrumbItem[]
  separator?: React.ReactNode
}

export const Breadcrumb = ({ className, items, separator, ...props }: BreadcrumbProps) => {
  
  const breadcrumbItems = items

  return (
    <nav 
      aria-label="Breadcrumb"
      className={cn("flex", className)} 
      {...props}
    >
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbItems?.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator>
              {separator || <ChevronRight className="h-4 w-4" />}
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </nav>
  )
}

export function BreadcrumbList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

export function BreadcrumbItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li">) {
  return <li className={cn("inline-flex items-center gap-1.5", className)} {...props} />
}

export function BreadcrumbLink({
  asChild,
  className,
  href,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : Link

  return (
    <Comp
      href={href}
      className={cn(
        "hover:text-foreground transition-colors font-medium",
        className
      )}
      {...props}
    />
  )
}

export function BreadcrumbPage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn("font-normal text-foreground", className)}
      aria-current="page"
      {...props}
    />
  )
}

export function BreadcrumbSeparator({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li
      className={cn("text-muted-foreground", className)}
      style={{ margin: "0 4px" }}
      {...props}
    >
      {children || <ChevronRight className="h-4 w-4" />}
    </li>
  )
}
