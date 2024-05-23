import React from 'react'

function About() {
  return (
    <div className='about'>
      <div>
        <h1 className='about-section-title'><span>Welcome to textSwift</span>Text Editor</h1>
       
     {/* <span>lightweight text editor</span>  */}
      </div>
      <div className="about-text">

        <p>
        Ever found yourself lost in a sea of tabs, notifications, and endless distractions while trying to get some writing done? Fear not, textSwift is here to rescue you from the chaos! 🌟
        </p>
       
        <h2>Minimalist Interface, Maximum Impact</h2>
        <p>The sleek, distraction-free mode ensures you stay focused on your words and not on your ever-growing list of browser tabs. It’s just you and your thoughts—pure Zen.🧘‍♂️</p>
        <h2>Basic Features Done Right</h2>
        <p>All the essentials of a top-notch text editor are at your fingertips. Whether it’s formatting, or searching I've got it all covered. Plus, I've thrown in a dark mode to keep your eyes happy during those late-night writing sessions. 🌑</p>
        <h2>Boost Your Productivity</h2>
        <ul>
        <li><strong>Distraction-Free Mode</strong>: Immerse yourself in your writing with a clean, uncluttered workspace.</li>
        <li><strong>Timer</strong>: Need a little nudge to stay on track? The built-in timer helps you manage your time effectively, so you can power through your writing goals. <span className="emoji">⏲️</span></li>
        <li><strong>Voice-to-Text</strong>: Feeling lazy? Just speak, and textSwift will do the typing for you. Perfect for when your hands need a break, or you just want to dictate your next great idea. <span className="emoji">🗣️➡️📝</span></li>
    </ul>
      
    <h2>Extra Bells and Whistles</h2>
    <p>textSwift didn't stop at the basics. It comes with a treasure trove of features designed to enhance your writing experience:</p>
    <ul>
        <li><strong>Git Integration</strong>: Keep track of your revisions and collaborate seamlessly with built-in Git support.🖇️</li>
        <li><strong>Performance Enhancements</strong>:This text editor is optimized for speed and efficiency, so you can write without lag or interruption.</li>
    </ul>
    <h2>Why Choose textSwift?</h2>
    <p>Because writing should be a pleasure, not a chore! my mission is to provide a serene and powerful environment where your creativity can flourish. Whether you're crafting the next bestseller or jotting down notes for a meeting, textSwift is your ultimate writing companion.</p>

    <h2>Join the Community</h2>
    <p>Curious to see what textSwift can do for you? Check out my GitHub repository and contribute, suggest features, or just see what’s under the hood.🚀</p>
    <p><a href='https://github.com/aneesa04/textSwift-.git' target='_blank' rel='noopener noreferrer'>textSwift GitHub Repository</a></p>
    <p>Remember, writing is an art, and every artist needs the right tools. With textSwift, you’ll have everything you need to create masterpieces, minus the distractions. Ready to unleash your full writing potential? Let's get started!</p>

    <p>Hope you enjoy using textSwift as much as I enjoyed creating it! Happy writing!✍️</p>
      
      
      </div>
     
      
    </div>
  )
}

export default About
