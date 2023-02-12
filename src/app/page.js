import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <img
        src="https://img.freepik.com/free-photo/abstract-smoke-wallpaper-background-desktop_53876-128257.jpg?w=996&t=st=1676223251~exp=1676223851~hmac=3e03c45eae61b6209c0d99c78e1824534d03ab4337bd1b565c798b821b432b81"
        alt=""
        className="w-full h-full object-none"
      />
    </main>
  );
}
