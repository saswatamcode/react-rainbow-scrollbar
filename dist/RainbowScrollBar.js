import React from 'react';
import './RainbowScrollBar.css';
export default function RainbowScrollBar() {
  window.onscroll = () => {
    let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progressHeight = window.pageYOffset / totalHeight * 100;
    progress.style.height = progressHeight + "%";
  };

  return React.createElement("div", {
    className: "rainbowscrollbar"
  }, React.createElement("div", {
    id: "progressbar"
  }), React.createElement("div", {
    id: "scrollPath"
  }));
}