# ASLingo - AI Meets ASL: Learn to Sign, One Gesture at a Time

### Why ASLingo? 💡

People have always dreamt of taking some time to learn a different language, including us! However, there are always two things that get in the way of language mastery: 

a) People don't develop any structured plan to learn the language.

b) People value their time, and there are a few incentives to learn a different language.

In fact, we also had these issues whenever we tried to learn a new language, so we wanted to brainstorm a solution for that. We realized that American Sign Language (ASL) is among the fastest growing languages that people are learning right now. 
Considering that the World Health Organization estimates that there are almost 500 million people across the world who have a hearing disability, we thought it was increasingly important to develop an ASL platform that is effective,
scalable, and enjoyable - ASLingo was born.

### What is ASLingo? 🧠

ASLingo is the leading AI-driven ASL Platform that provides mastery-based tasks to help people learn and maintain their ASL. 

Firstly, it provides tasks powered by feedback given by trained ML models, allowing high scalability. Next, it fills in the gaps of traditional language learning classes by offering different camera-based learning tasks, from daily challenges, to self-practice, to ASL testing. Finally, it maintains a leaderboard to keep users engaged with the platform - providing points for each completed task. 

All in all, this platform provides the best recipe for long-term interest and participation in ASL learning.

### How we built it 🛠️

ASLingo was primarily built using React (JavaScript), MediaPipe/OpenCV, Python and HTML/CSS.

### Challenges with ASLingo 🤔

ASLingo's training models are built using a MediaPipe Hand Landmark Detection library, which helps detects points that would compose a hand - and thus a whole hand more accurately than a pixel-by-pixel image. This would be far more effective in assessing ASL signs in different orientations and scales. 
However, to properly validate or check what sign a user is holding, it required some graphics programming to normalize the hands, as well as some custom dataset creation in order to effectively compare with other ASL hand coordinates in our data set. Additionally, there were many UI components that were a part of the application, so the work was
divided equally among the team. Finally, we ran into issues connecting between the front and back end for the application.

### Our Accomplishments ⭐

We devised an algorithm that matches common ASL signs to the appropriate English meaning, as well as completed the front end application.

### What we learned 🎓

We learned a lot about ASL and the benefits of learning the language through our research. Throughout the hackathon, we reinforced and learned new technical skills involving Python, JavaScript, HTML and CSS - experimenting with tools wherever we could.

### What's next for ASLingo 🎯

ASLingo has potential to expand into longer, more complicated phrases in order to provide the full experience of learning ASL - targetting people of all skill levels. There are also different lesson plans that may arise in the future, such as courses ran by experts or multiplayer tasks.
