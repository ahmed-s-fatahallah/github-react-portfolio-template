// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)

import allBirdsLogo from "./images/allbirds-logo.svg";
import littleLemonLogo from "./images/littleLemonLogo.svg";
import metiMeteorLogo from "./images/meti-meteorLogo.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ahmed-s-fatahallah";
export const linkedInUserName = "ahmed-s-fatahallah";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = `A self-taught front-end web developer with a passion for creating
  beautiful and responsive websites. I have learned vanilla HTML,
  CSS, JavaScript, and React through online courses, tutorials, and
  projects. I enjoy learning new technologies and frameworks, and
  I'm always looking for new challenges and opportunities to improve
  my skills. You can check out my work on GitHub or LinkedIn. I'm
  also active LinkedIn, where I share my insights and resources on
  web development. I'm currently looking for a front-end web
  developer position where I can apply my knowledge and creativity
  to build amazing web experiences.`;

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:nextjs" className="display-4" />,
    name: "next.js",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  "https://drive.google.com/file/d/1fVKbFSYKwzNQN8ZGxMTvYfFcdJcvlWwd/view?usp=drive_link";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  "all-birds",
  "little-lemon-restaurant",
  "meti-meteor",
];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "all-birds",
    image: allBirdsLogo,
  },
  {
    name: "little-lemon-restaurant",
    image: littleLemonLogo,
  },
  {
    name: "meti-meteor",
    image: metiMeteorLogo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xrgwzdre";
