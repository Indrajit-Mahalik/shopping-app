import React, { useState, useEffect } from "react";

function LoadingScreen({ onFinish }) {
  const [phase, setPhase] = useState("loading"); // 'loading' | 'transitioning' | 'complete'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter over 1.6 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 14 + 8);
      });
    }, 120);

    // After 1.7 seconds, begin transition towards the website logo
    const transitionTimer = setTimeout(() => {
      setPhase("transitioning");
    }, 1700);

    // After 2.3 seconds, completely finish and reveal website
    const finishTimer = setTimeout(() => {
      setPhase("complete");
      if (onFinish) onFinish();
    }, 2350);

    return () => {
      clearInterval(interval);
      clearTimeout(transitionTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (phase === "complete") return null;

  return (
    <div className={`loading_screen_backdrop ${phase === "transitioning" ? "loading_exit" : ""}`}>
      <div className="loading_screen_content">
        {/* Animated Brand Emblem */}
        <div className="loading_gift_icon_wrap">
          <div className="loading_sparkle sparkle_1">✦</div>
          <div className="loading_sparkle sparkle_2">✧</div>
          <div className="loading_sparkle sparkle_3">✦</div>
          <div className="loading_gift_box">
            <i className="fa fa-gift" aria-hidden="true"></i>
          </div>
        </div>

        {/* Brand Name */}
        <div className="loading_brand_title">
          <span>GIFTOS</span>
        </div>

        <p className="loading_tagline">Curated Gifts & Premium Finds</p>

        {/* Subtle Progress Bar & Percentage */}
        <div className="loading_progress_wrapper">
          <div className="loading_progress_track">
            <div
              className="loading_progress_fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <span className="loading_percentage">
            {Math.min(progress, 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
