<a id="top"></a>

# Overview
This course guides students toward developing a well-rounded foundation of skills necessary for modern web development. These skills include HTML, CSS, and JavaScript coding; utilizing Git workflow processes; project organization; designing with wireframing; and employing introductory Agile development methods.

This course appears simple on the surface but is complex in implementation.

Do not be fooled by the seemingly easy subject matter. For many students this is their first step into writing code—so in addition to all of the fundamentals that must be taught carefully and in thorough detail, students’ mental welfare must also be managed as many students are facing the toughest academic challenge of their lives. It is not uncommon for 10-20% of students to drop the class by the middle of the second week, and an attrition rate of 50% is not without precedent. In those cases, we consult with the students and recommend a course of action to prepare them for the next round of this course, as well as offer them a prorated refund. (Note: all details and negotiations regarding refunds are handled by the Campus Director, and are not to be directly addressed by instructors.)

Balancing the disparate skill levels and acquisition rates among students is another fundamental challenge. For example, many students will excel in the first week of the course, but then “hit a wall” and become very discouraged in the second week. At the same time, some students are more tortoises than hares, and methodically assemble an impressive skill set over the duration of the course. This is to be encouraged.

Ultimately, this course is four weeks of the proverbial [drinking from a firehose](https://en.wiktionary.org/wiki/drink_from_a_firehose) for students—and it will be transformational for many of them, who discover not only an aptitude for writing code, but a love of it as well.

Reminder: Documents regarding grading and grade weighting in our courses:
* [Course Grading Breakdown by Assignment Category](https://docs.google.com/document/d/1WnQkPbM1FzWxYgzhrayL_SerO80DXC4tybl-I1aiSUI/edit)
* [Code Assignment Grading Rubric](https://docs.google.com/document/d/1xV-9wsMZSXMBwX0W5-wQp6sYUhqetPF3udtM5TZJpKw/edit#heading=h.95kbb7dt6wvy)

[-top-](#top)

# How To Use This Facilitator’s Guide

### Overall organization
This guide follows the day-by-day organization of the course as provided for the students in Canvas and in GitHub.
* The components of this guide should only be consumed by the instructional staff. You can find the student-facing materials in the public folder of this repository.
* Your input to this guide is welcomed, whether as comments/suggestions in a Google document or as pull requests to the class repository. The more we can capture your code demos and add them to the collection, the better.
* Parts that are intended for daily use:
  * Each class day in this guide has an introductory section that gives an overview of the topics for the day, the instructional goals, and a description of how the content fits into the overall curriculum. These sections are provided to give instructors a path into the mindset for the day.
  * The topics covered in each reading assignment are presented as bulleted lists in this guide, and serve as a foundation for daily lesson plans. This list also includes some specific points to mention.

* Parts that are intended for weekly/course-wide perspective
  * Each week has a summary that gives an overview of the subject matter and the pedagogical goals of the weekly project. This summary can be found in the markdown file for the first day of that week (days 1, 6, and 11)
  * At the end of this document there is a Summary section that contains a collection of advice from prior instructors of this course.
* This repo also contains the following supplemental materials:
  * Multiple versions of code demos for each day
  * Sample solutions for code assignments
  * Handouts and graphics that instructors may use
  * Slides
  * A quiz bank

* Suggested Techniques for Use
  * Each instructor may choose to utilize these resources as she/he sees fit
  * Following is a description of the workflow used by Sam Hamm, the original author of this guide:
    * Keep a local clone of the repository for this guide (https://github.com/codefellows/code-201-guide) in a parent directory that also contains the current class repository
    * In VSCode, open the parent directory and use “tree view” to easily inspect content and move it between the guide repo and the current class repo.
    * Besides the lab directory that contains details for the daily lab assignment, there are also sample code demos, slides, or other content for each day that can be reviewed and utilized.
    * Copy/paste the daily lesson plan into the daily placeholder README as part of the daily class preparation cycle.
    * Read through the lesson plan in the README and the README inside of the lab subdirectory in each day, make edits and adjustments as needed to the documents and/or instructional planning for the day.
    * At the top of the README, include any announcements or other class information that is relevant, such as reminders of events or other information that is unique each month.
    * At the time you want to publish the lab assignment in a given day, copy the lab directory into the daily directory to publish the lab assignment.

[-top-](#top)

# Prework

Once a student has been accepted into the course, they will complete the Code 201 [Prework](https://github.com/codefellows/code-201-prework) prior to the first day of lecture.

As a result of completing the prework for Code 201, students will:
* Have their laptops properly set up for the task of web development, including successful installation of the following industry standard tools and technologies: VSCode as a code editor, Chrome as a browser and development environment, and Git for version control.
* Demonstrate that they have successfully set up and interacted with their student accounts in the Canvas learning management system (LMS), as measured by their submission of the prework assignments in Canvas
* Have Slack installed on their laptops so that they will be able to communicate with instructional staff, fellow students, and the Code Fellows community at large
* Have copies of the course textbooks so that they can complete the assigned readings that occur throughout the course, and are the heaviest in the first week.
* Be refreshed on basic arithmetic and algebra in the prework assignment, so that they will possess skills in quantitative thought and syntactical knowledge that will be useful in writing and understanding code.
* Have an understanding of the basic Unix commands presented in the prework assignment so that they can navigate and manipulate their file system from the command line when starting and building a code project.
* Have been introduced to the concept of version control and have a basic understanding of how Git and GitHub version control works, in order to utilize professional workflows and complete specific aspects of assignments/projects in the course
* Demonstrate the ability to use basic syntax and understand the basic concepts of JavaScript, HTML, and CSS, as shown by completion of the assigned prework tutorials at Khan Academy, including the following subject areas:
  * Fundamental syntax and structure of HTML documents including `<DOCTYPE>`, `<html>`, `<head>`, and `<body>`
  * Use of assorted heading and paragraph tags to display text
  * Use of images in a HTML document
  * Use of links in a HTML document
  * Use of lists including ordered, unordered, and nested lists
  * Use of color on text and on page backgrounds
  * Use of HTML tables to organize and display data
  * Use of `<div>` and `<span>` tags as default block and inline containers, respectively
  * Use of CSS to apply styling to a HTML document including colors, text sizes, fonts, and borders
  * Use of a variety of CSS selectors, including elements, classes, IDs, and pseudoclasses
  * Use of DOM traversal techniques to style specific parts of HTML documents
  * Fundamentals of CSS layout including the box model as absolute, relative, fixed, and float techniques
  * JavaScript building blocks including variables, data types (strings, numbers, booleans), console.log(), conditionals, modulo, substrings, and reassignment of variable values
  * JavaScript functions: syntax, D.R.Y., return statements
  * JavaScript control flow: ‘for’, ‘if’, ‘while’
  * Javascript data structures including arrays and objects

[-top-](#top)s

# Outcomes

At the end of this course, students will:
* Define the structure of a web page utilizing the semantic hierarchical structural conventions of HTML5.
* Apply CSS and HTML to implement page layout styles including grid, fluid, and responsive techniques; and to style content with color, typography, and images.
* Utilize Javascript to make web projects interactive, such that user input is stored and processed to create updated and personalized content when a user interacts with a page.
* Write JavaScript that leverages the fundamentals of Computer Science, the Object-Oriented Programming paradigm, basic data types, data structures, and basic algorithms, so that the code is efficient, error-free, and matches commonly accepted standards and practices of syntax and style, as measured by the code’s functionality and ability to pass a code linter.
* Utilize industry standard version control tools and workflows, including Git and GitHub, to write functional, properly styled code and to work efficiently and harmoniously in professional environments.
* Be prepared for a Code 301 course.

### Concepts
* HTML5 and CSS3
* Object-Oriented Programming
* Introductory Data Structures & Algorithms
* Document Object Model (DOM) Manipulation & Traversal
* Multiple Approaches to Page Layout
* Using GitHub Repos and Sharing Code With Project Teams

* Environments and Tools:
  * Unix and the Command Prompt
  * Git and GitHub
  * VSCode
  * Chrome Dev Tools

[-top-](#top)

# Weekly Overview

Week 1 : An “About Me” page with an interactive guessing game

Week 2: A mockup of a site for a retail chain including tabular presentation of sales/production data

Week 3: A site that tracks user click input and then displays the resulting data utilizing a Javascript chart library and storing the data in the browser’s local storage

Week 4: A team project building a web application of the students’ concept and design

### Ensure the following prior to the first day of lecture:  

* All students and TAs have been added to the class Slack Channel

* Make sure canvas is up, cloned, and ready for day 1 including:  
  * Due dates
  * Ensure TAs have been sent invitations


* Duplicate class repo from this repo.

* It may be helpful to also clone repositories from one or two of the most recent iterations of the course. Keep this for your personal use only.

* Classroom Technology
  * Two iPads are available, the code is 1337
  * The pens connect via Bluetooth
  * Use AirServer to mirror the iPad on your computer screen
  * Use Quicktime for screen recordings. There is a wireless mic and a mic that mounts to your laptop. Make sure the mic is paired before beginning each screen recording. Each day after lecture, upload the lecture videos to the private YouTube channel and set the privacy to `unlisted`. Use meaningful naming conventions, such as `course number - day number - part x of x, description`
  * Additional information about classroom technology can be found [here](https://docs.google.com/document/d/1iopoxULkdcag-wX4-DAbOrLJZwT29MFk5ug1vbHcG9k/edit)


[-top-](#top)
