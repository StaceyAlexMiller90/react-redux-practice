// src/pages/HomePage.js
import React from "react";
import PostsFeed from '../../components/PostsFeed/PostsFeed'
import './HomePage.css'

export default function HomePage() {
  return <div className="page">
            <PostsFeed />
        </div>;
}