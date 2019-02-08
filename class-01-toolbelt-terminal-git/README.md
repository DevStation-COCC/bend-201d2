# Class 1: Introduction to the Tools and Fundamentals of Development

<a id="top"></a>
## Lecture 1

## Today's Schedule
This first day of class is an all-day session with the students that is mostly lecture. Note: this is not our typical class schedule. 

- [Kickoff!](#kickoff) *[30 minutes]*
- [Academic Overview](#academic) *[60 minutes]*
- [Unix & Git](#ug) *[60 minutes]*
- [Go over the assigned readings](#readings) *[30 minutes]*

*Lunch Break*

- [Continuing going over the assigned readings](#readings) *[30-60 minutes]*
- Discuss Career Coaching assignments
- [Set up a JavaScript linter](#linter) *[15 minutes after Unix/Git is finished]*
- [Verify Student Toolbelts](#toolbelt) *[30-45 minutes]*
- [Code demo to prep for lab](#code) *[60 minutes]*
- [LAB](#lab)
  - Write code as outlined in the lab assignment

**Learning Objectives**

As a result of completing Lecture 1 of Code 201, students will be able to:
- create a HTML page from scratch, with proper HTML5 hierarchical structure conventions, as demonstrated by successful completion of the daily code assignment
- properly include a \<script> tag in an HTML document that will interact with the user via prompt/alert, as demonstrated by successful completion of the daily code assignment
- write JavaScript that will interact with the user via prompt/alert, as demonstrated by successful completion of the daily code assignment
- use the command line to create and change directories, create and list files, and open files in a text editor and in a web browser, as demonstrated by successful completion of the daily code assignment
- install & use plugins for their text editor, including a minimap and a JavaScript linter, as measured by observations of the instructional staff

## Readings

- HTML Chapter 1: "Structure"
- HTML Chapter 8: "Extra Markup"
- HTML Chapter 17: "HTML5 Layout"
- HTML Chapter 18: "Process & Design"
- JS Chatper 1: "The ABC of Programming"

<a id="kickoff"></a>

## Kickoff!

This is the welcome and introduction to Code Fellows. Students will meet the campus manager and learn about campus operations and policies.

[-top-](#top)

<a id="academic"></a>

## Academic Overview

The instructor will give an overview of the topics to be covered in this course and how those topics fit into the overall academic program at Code Fellows.

[-top-](#top)

<a id="toolbelt"></a>

## Verify Student Toolbelts

By doing a few quick tests and exercises, as detailed below, we will ensure that you have functionality of all of the core pieces of your development environment:
- VSCode: type `code` in the command line to verify that it opens properly. Command line tools may need to be installed
- VSCode packages: ensure that the linter is enabled
- Chrome: how to open Chrome from the console, and how to open the developer tools in Chrome
- Git: enter `which git` in the command line to verify installation
- Directory structure: together we will set up a directory at ~/codefellows/201/ in which you will store your classwork. We will go over directory structure in general and compare it to GUI


[-top-](#top)

<a id="ug"></a>

## Unix & Git

Introduction to core the concepts of file management from the command line and the fundamentals of Git and GitHub.

[-top-](#top)

<a id="linter"></a>

## Set up a JavaScript linter
Students should open a new tab in their terminal and type `cd` to navigate to their home directory. Then type `code .eslintrc.json`, which will create a new file called `.eslintrc.json` and open it in VSCode. Students should paste the contents of the `.eslintrc.json` file, which is located in the root of the class repository.

[-top-](#top)

## Additional VSCode Settings
In the lower left-hand corner of VSCode, click on the gear icon and select "Settings". Use the search functionality to set the following values:
* "editor.tabSize" should be set to 2
* "editor.detectIndentation" should be set to true
* "editor.wordWrap" should be set to "on"
* "editor.minimap.enabled" should be set to true

[-top-](#top)

<a id="readings"></a>

## Go over the assigned readings

**HTML Chapter 1: "Structure"**

- p.15: How pages use structure
- p.20: HTML describes the structure of pages
- pp.21-22: Tags as containers (great graphic page)
- p.24: Tags
- p.26: Attributes
- p.33: Code in a CMS

**HTML Chapter 8: "Extra Markup"**

- p.179: Evolution of HTML
- p.181: Doctypes
- p.182: Comments
- p.183: Class & id attributes
- p.185: Block vs. inline
- p.191: Meta tags
- p.193: Escape characters
- p.194: Special characters

**HTML Chapter 17: "HTML5 Layout"**

- Semantic HTML
- Traditional layout vs. HTML5
- Header, footer, nav, aside, section, figure, div

**HTML Chapter 18: "Process & Design"**

- Things to think about when starting a project
  - Who is the site for?
  - User stories
  - Sitemaps
  - Wireframes
- Visual hierarchy, grouping, navigation

**JS Chatper 1: "The ABC of Programming"**

- p.16 	Designing a script
- p.28 	Objects & properties
- p.30 	Events
- p.36 	Browsers & document object
- p.40 	How a browser sees a web page
- p.44 	How HTML, CSS, JS work together			
- p.45 	Progressive enhancement
- p.51 	JavaScript runs where it is found in the HTML

We also need to discuss the role of *pseudocode*, which is something the Duckett text does not cover very well.

[-top-](#top)

<a id="code"></a>

## Live code

This code demo is to help students be ready to complete the first assignment and also to show off some functionality of the REPL and Chrome Developer Tools. This demo should also reveal any lingering issues with student computer setups.

[-top-](#top)
