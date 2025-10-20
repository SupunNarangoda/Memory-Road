# Memory Road 🧠

**A Dementia Awareness Game for Australia**

Memory Road is a gentle, therapeutic board game designed to raise awareness about dementia and mental health wellbeing in Australia. Through reminiscence therapy and historical Australian memories, players engage with questions that stimulate long-term memory recall in a supportive, compassionate environment.

---

## 🎮 Game Overview

**Theme:** Mental Health & Wellbeing (Dementia Awareness)
**Type:** 2D Browser-based Board Game
**Target Audience:** Elderly Australians, dementia patients, caregivers, and those interested in learning about dementia
**Technology:** HTML5, CSS3, Vanilla JavaScript

### Social Impact

Dementia affects over 400,000 Australians, with someone developing dementia every 6 minutes. Memory Road addresses this critical social challenge by:

- **Raising Awareness:** Educating players about dementia and memory loss
- **Therapeutic Value:** Using reminiscence therapy to stimulate memory recall
- **Empathy Building:** Helping caregivers and family members understand memory challenges
- **Community Connection:** Creating conversations about mental health and aging

---

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### How to Run

1. **Clone or download this repository:**
   ```bash
   git clone <your-repo-url>
   cd game_submission
   ```

2. **Open the game:**
   - Navigate to `game_app/index.html`
   - Double-click the file, or
   - Right-click and open with your browser

3. **Or use a local server (recommended):**
   ```bash
   cd game_app
   python -m http.server 8000
   # OR
   npx serve
   ```
   Then open `http://localhost:8000` in your browser

4. **Start playing!**
   - Click "Start Memory Journey"
   - Roll the dice to move along the memory path
   - Answer questions about Australian history and experiences
   - Complete the journey to see your results

---

## 🎯 How to Play

1. **Menu Screen:**
   - Start a new game
   - Learn about the game and dementia awareness
   - View your high score

2. **Game Board:**
   - Roll the dice to move forward
   - Land on tiles to trigger memory questions
   - Answer questions about Australian history (1940s-1980s)
   - Earn "Memory Points" for correct answers
   - Read gentle feedback and historical context

3. **Question Types:**
   - Australian history (moon landing, decimal currency)
   - Childhood memories (milkman, paddle pops)
   - Cultural moments (TV, music, fashion)
   - Real events people aged 60+ experienced

4. **Results:**
   - View your total memory points
   - Read encouraging, therapeutic messages
   - Learn about dementia awareness
   - Play again to improve

---

## 📁 Project Structure

```
game_submission/
├── README.md                          # This file
├── project_report.pdf                 # Detailed project report
├── youtube_link.txt                   # Demo video link
├── prompts/                           # AI generation prompts
│   ├── concept_prompts.txt
│   ├── asset_generation_prompts.txt
│   ├── code_generation_prompts.txt
│   └── refinement_prompts.txt
├── game_app/                          # Main game application
│   ├── index.html                     # Main HTML file
│   ├── css/
│   │   └── style.css                  # All game styling
│   ├── js/
│   │   ├── main.js                    # Entry point
│   │   ├── game-data.js               # Questions & constants
│   │   ├── game-logic.js              # Core game mechanics
│   │   └── ui-controller.js           # UI management
│   └── assets/
│       ├── images/                    # AI-generated images
│       └── sounds/                    # AI-generated audio
└── screenshots/                       # Game screenshots
    ├── menu_screen.png
    ├── play_screen1.png
    ├── play_screen2.png
    ├── play_screen3.png
    └── results_screen.png
```

---

## 🛠️ Technology Stack

### Core Technologies
- **HTML5** - Semantic structure and accessibility
- **CSS3** - Responsive design, animations, gradients
- **JavaScript (ES6+)** - Game logic, DOM manipulation, local storage

### Design Principles
- **Accessibility First:** Large text, high contrast, clear buttons
- **Responsive Design:** Works on desktop, tablet, and mobile
- **Gentle UX:** Animations are smooth and non-startling
- **Therapeutic Tone:** Encouraging feedback, never punishing

### AI Tools Used

1. **Concept Development:**
   - ChatGPT (GPT-4) - Game design and question generation
   - Claude - Code architecture and refactoring

2. **Asset Generation:**
   - DALL-E 3 - Image generation (planned)
   - Midjourney - Visual assets (planned)
   - ElevenLabs - Sound effects (planned)

3. **Code Development:**
   - GitHub Copilot - Code suggestions
   - ChatGPT - Code generation and debugging
   - Claude - Code refactoring and optimization

---

## 🎨 Features

### Implemented
✅ Multiple game screens (Menu, Play, Results)
✅ Dice rolling mechanics with animation
✅ 30-tile game board with special milestone tiles
✅ 16 historically accurate quiz questions
✅ Gentle, therapeutic feedback system
✅ Score tracking and local storage
✅ Progress bar visualization
✅ Responsive design for all devices
✅ Accessibility considerations
✅ Dementia awareness messaging

### Planned Enhancements
🔲 AI-generated visual assets
🔲 Background music and sound effects
🔲 Additional question categories
🔲 Difficulty levels
🔲 Multiplayer mode for families
🔲 Printable memory cards

---

## 📊 Educational Value

### Dementia Statistics (Australia)
- **472,000** Australians living with dementia (2024)
- **1 in 6** people over 80 have dementia
- **65%** are women
- **$15.7 billion** annual cost to Australian economy
- Expected to reach **1.1 million** by 2058

### How This Game Helps
- **Reminiscence Therapy:** Proven to improve mood and cognition
- **Family Engagement:** Encourages conversations between generations
- **Awareness:** Educates about dementia challenges
- **Compassion:** Builds empathy for those with memory loss

---

## 🤝 Contributing

This project was created for an educational hackathon. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

### Ideas for Contribution
- Add more historically accurate questions
- Translate to other languages
- Improve accessibility features
- Create additional therapeutic mini-games
- Add caregiver resources

---

## 📝 License

This project is created for educational purposes as part of a hackathon submission.

---

## 🙏 Acknowledgments

- **Dementia Australia** - For resources and statistics
- **Australian Bureau of Statistics** - Historical data
- **Reminiscence Therapy Research** - Therapeutic approach
- **Hackathon Organizers** - For the opportunity
- **AI Tools** - ChatGPT, Claude, DALL-E for development assistance

---

## 📞 Support Resources

**Dementia Australia National Helpline:**
📞 1800 100 500
🌐 [dementia.org.au](https://www.dementia.org.au)

**Mental Health Support:**
Lifeline: 13 11 14
Beyond Blue: 1300 22 4636

---

## 👥 Team

Created with ❤️ using AI assistance for the [Hackathon Name] Challenge 3

**Demo Video:** See `youtube_link.txt`
**Detailed Report:** See `project_report.pdf`

---

**Remember:** Every memory is precious. This game celebrates the rich experiences of Australian life while raising awareness about dementia and supporting those affected by memory challenges.
