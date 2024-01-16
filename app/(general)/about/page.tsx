import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'Learn about us',
 keywords: ['About Page', 'Sandra'],
};


export default function About() {
    return (
      <main className="flex flex-col items-center p-24">
        <span className="text-5xl">About page</span>
      </main>
    )
  }