## 🧑‍💻P5.js-Side-Scroller-Game-Project
Link to run the Game:
https://kohxionghui.github.io/P5.js-Side-Scroller-Game-Project/

A Side Scroller Game with Particles, Sound and Moving Platfoms. Object-Oriented Programming (Class Syntax) is used throughout the Project to create the invidiual objects in the game. A Startup and Loading screen is added primarily to bypass modern browser Autoplay Policy, ensuring audio assets had started playing when the game starts.

### ⛏️Tools and Website Used:
- P5.js
- VSCode
- https://mixkit.co/free-sound-effects/game/
- https://www.youtube.com/ (For Non-Copyright Music)

### ⚙️Features
- Animated Character and Enemies
- Each start of the game is Randomised (Random Objects and Obstacles)
- Movement Particle effects with dynamic colours
- Interactable Animated Moving Platforms and Flagpole
- Sound Effects

### Implementation of Key Extensions:
I developed a Dynamic Particle Emitter, Animations and Rotations. The particle system uses Object-Oriented logic to pass specific colours during setup, such as “emitter.emit(5, color(255, 240, 200))”. This allowed Orange for walking, White for jumping, and Red for enemies. For the physics, I implemented a gravity constant of 2 and a jumpStrength variable to create a jump arc. While I built a Jump Count system capable of double-jumping, I limited “const maxJumps” to 1 to maintain difficulty and simplifer the game controls for the player.

### Key Challenges Faced:
The primary difficulty was the Audio. I struggled to stop the walking sound upon key release or reaching the flagpole. To solve this, I used variables like “movingSoundPlayed” to track and toggle “walkSound”. I also debugged a critical issue where the walk sound will not stop playing when the player falls into the canyon, I found out that a return statement in the “isPlummeting” block prevented the “walkSound.stop()” command from executing; reordering the code resolved this. I also realise that the Game Volume is not consistant so I have to fix it with "masterVolume(1.0);".

Additionally, I managed Moving Platform Collision issues where double jumping on the platforms caused the character to fall through. I initially tried to fix the collision by revamping the jump code to include velocity and implementing "abs(jumpHeight)", but it will make the code overly complicated and I will have to debug more to make it work before the deadline, hence I stabilised this by just limiting “jumpCount” to 1 on platforms, so double jump was enabled on the ground and single jump on the platforms, now standardised to a single jump. 

Finally, I engineered a Start/Loading screen to bypass the Chrome Autoplay Policy, ensuring audio assets had started playing when the game starts.

### Skills Learned:
I strengthened my ES6 Object-Oriented Programming and debugging skills while prioritising the visuals and interactions of the game for instance, using “walkSound.rate(2)” to sync “walkSound” to particle emission rather than leg movement to make the “walkSound” feel more realistic.

### Future Improvements:
- Fix the Platform Collision with Double Jump
- Add randomised Levels potentially make the game loop with random levels
- Adding a proper start page
- Fixing the glitch during respawn animation when the character moves


### 📽️Video Preview:
https://github.com/user-attachments/assets/ddf70880-51eb-4586-b552-e1344f119d83

