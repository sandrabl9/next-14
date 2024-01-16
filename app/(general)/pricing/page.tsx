import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing page',
 description: 'Do you have any problem?',
 authors: [{name: 'Sandra'}],
};

export default function Pricing() {
    return (
      <main className="flex flex-col items-center p-24">
        <span className="text-5xl">Pricing page</span>
      </main>
    )
  }