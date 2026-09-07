import {
  Instagram,
  Mail01Icon,
  NewTwitterIcon,
  ThreadsIcon,
} from "@hugeicons/core-free-icons";
import { LINKS } from "./links";

export const connect = [
  {
    name: "@loreandcode",
    title: "Instagram",
    link: LINKS.instagram,
    // link: "https://www.instagram.com/loreandcode/",
    icon: Instagram,
  },
  {
    name: "@loreandcode",
    title: "Threads",
    link: LINKS.threads,
    // link: "https://www.threads.com/@loreandcode",
    icon: ThreadsIcon,
  },
  {
    name: "loreandcode",
    title: "Twitter",
    link: LINKS.x,
    // link: "https://x.com/loreandcode",
    icon: NewTwitterIcon,
  },
  {
    name: "adiasmuhsin1206@gmail.com",
    title: "Email",
    link: "mailto:" + LINKS.email,
    // link: "https://mail.google.com/mail/?view=cm&fs=1&to=adiasmuhsin1206%40gmail.com",
    icon: Mail01Icon,
  },
];
