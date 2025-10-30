export type SiteConfig = typeof siteConfig;

export const siteConfig = {
name: "Dr. Iwula",
description: "Your trusted source for health insights, medical courses, and personalized consultations.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    
    {
      label: "About",
      href: "/about",
    },
   
  ],
  navMenuItems: [
     {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    twitter: "https://twitter.com/hero_ui",
    discord: "https://discord.gg/9b6yyZKmH4",
    login: "/login",  
    signup: "/signup",
  },
};
