# CoffeeShop_Tycoon
# ☕ Coffee Shop Tycoon – Playable on GitHub Pages

[![Play on GitHub Pages](https://img.shields.io/badge/Play%20Now-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://your-username.github.io/coffee-shop-tycoon/)
[![Status](https://img.shields.io/badge/status-live-success)](https://your-username.github.io/coffee-shop-tycoon/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

> **Brew, manage, and survive – become the ultimate coffee mogul!**  
> A complete tycoon/manager game with a real‑time visual shop, dynamic weather, and a deep economic loop – **playable instantly in your browser**.

![Gameplay Screenshot](screenshots/gameplay.png)  
*Live management panel + animated coffee shop scene*

---

## 🎮 Play Now – No Installation Required

The game is hosted live on **GitHub Pages**. Click the badge above or open:  
🔗 **[https://your-username.github.io/coffee-shop-tycoon/](https://charlestan1.github.io/CoffeeShop_Tycoon/)**

- Works on desktop, tablet, and mobile browsers.
- No login, no download – just pure web‑based tycoon action.

---

## 📖 Project Description

**Coffee Shop Tycoon** is a browser‑based tycoon/management game built with HTML, CSS, and JavaScript. You play as a barista / shop owner who must balance **coffee pricing**, **inventory restocking**, and **daily expenses** while facing random weather conditions that affect customer demand.

The game features:
- A **pixel‑art inspired visual shop** (canvas‑rendered) with a barista, walking customers, and stock animations.
- A **complete game loop** including a main menu, active management screen, and a final score / game over screen.
- **Dynamic difficulty** – weather, price elasticity, and stock limits create emergent strategy.
- Fully **responsive** design.

This project was developed as a **14‑day sprint** assignment, showcasing front‑end game development, UI/UX design, and GitHub Pages deployment.

---

## 🕹️ Controls & Gameplay

### Management Panel (Right Side)
- **Price slider** – Set coffee price per cup ($0.50 – $9.00). Higher price reduces demand.
- **Restock buttons** – Buy beans ($0.50 each) or cups ($0.10 each) in batches.
- **Next Day** – Advances the day: calculates sales, deducts rent ($5), updates weather, and triggers customer animation.
- **Main Menu** – Return to start screen.

### Visual Shop (Left Canvas)
- Shows **barista**, counter, espresso machine, and stack of cups/beans based on your inventory.
- A **customer walks in** from the left whenever you press “Next Day” and a sale occurs – with a floating dollar animation.
- **Weather icon** changes dynamically (☀️ / ☁️ / 🌧️).

### Goal
Survive as many days as possible without running out of money. Optimise price and stock to maximise your final **score** = `(Days survived × 12) + Final cash + Total profit`.

---

## 📸 Screenshots

> *Replace these placeholder paths with actual screenshots from your deployed game.*

| Main Menu | In‑Game Management |
|-----------|--------------------|
| ![Main Menu](screenshots/menu.png) | ![Game Screen](screenshots/game.png) |

| Visual Shop (Canvas) | Game Over Score |
|----------------------|-----------------|
| ![Shop Scene](screenshots/shop.png) | ![Game Over](screenshots/gameover.png) |



---

## 👥 Team Page & GitHub Profiles

The project includes a dedicated **Team Page** accessible via the navbar. It documents individual roles and provides direct links to student GitHub profiles.

| Role | Name | GitHub | Responsibilities |
|------|------|--------|------------------|
| Project Manager / Lead Developer | *Barista Bot* | (https://github.com/charlestan1) | Game architecture, core loop, canvas visuals |
| Game Designer / Artist | *Coffee Pixel* | (https://github.com/Hanchetajr22) | UI design, animations,|

---

## 🧰 Technologies Used

- **HTML5** – Structure and semantic layout
- **CSS3** – Responsive design, glass‑morphism effects, flexbox/grid
- **JavaScript (ES6)** – Game state management, canvas rendering, event handling
- **Canvas API** – Real‑time 2D graphics for shop scene
- **Font Awesome 6** – Icons for visual polish (CDN)
- **GitHub Pages** – Hosting and deployment

---


