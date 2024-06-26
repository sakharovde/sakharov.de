import React from "react";

const externalLinks = [
  { name: "Instagram", url: "https://instagram.com/sakharovde" },
  { name: "Telegram", url: "https://t.me/sakharovde" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sakharovde" },
  { name: "GitHub", url: "https://github.com/sakharovde" },
];

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="text-center font-black text-white">
        <span className="border-x-1 border-b-1 rounded-b-lg border-x-neutral-500 border-b-neutral-500 bg-white px-3 py-1">
          <span className="text-black">sakharov.de</span>
          <span className="text-gray-500">nis</span>
        </span>
      </div>
      <div className="flex flex-col text-center">
        {externalLinks.map((link) => (
          <a
            key={[link.name, link.url].join()}
            className="text-white"
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
