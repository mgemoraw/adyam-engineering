import React from "react";
import { Link } from "react-router-dom";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import "./NewsSlider.css"; // you'll create this for styling

const dummyNews = [
  {
    id: 1,
    title: "Adyam Launches New Urban Planning Division",
    summary:
      "Expanding our expertise to better serve growing metropolitan areas.",
    link: "/news/urban-planning-launch",
  },
  {
    id: 2,
    title: "2025 Structural Innovations Conference Highlights",
    summary: "Key insights and innovations presented by our engineering team.",
    link: "/news/structural-conference-2025",
  },
  {
    id: 3,
    title: "Project X Completed Ahead of Schedule",
    summary:
      "Our commitment to deadlines leads to early delivery for a major client.",
    link: "/news/project-x-completion",
  },
  {
    id: 4,
    title: "Project X Completed Ahead of Schedule",
    summary:
      "Our commitment to deadlines leads to early delivery for a major client.",
    link: "/news/project-x-completion",
  },
];

const NewsSlider = () => {
  return (
    <section className="news-slider-section">
      <div className="news-slider-header">
        <NewspaperIcon className="h-8 w-8 text-sky-800" />
        <h2 className="text-2xl font-bold text-sky-800 ml-2">Latest News</h2>
      </div>
      <div className="news-slider">
        {dummyNews.map((item) => (
          <div key={item.id} className="news-card">
            <h3 className="news-title">{item.title}</h3>
            <p className="news-summary">{item.summary}</p>
            <Link to={item.link} className="news-link">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSlider;
