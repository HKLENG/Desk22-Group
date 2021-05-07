# Sprints & Project Management

## Table of contents
- [Group working methods](#jump1)
- [Individual contributions](#jump2)
- [Sprints Documentation](#jump3)
- [Team use of Git](#jump4)

## <span id="jump1">Group working methods</span>

At the beginning, our group did not set up a team work plan. We're just taking it one step at a time. Our main team tool is WeChat, a popular messaging tool in China.

However, we soon ran into some problems. We mix daily chats between friends with project work, and we need to find useful information, such as meeting agendas, results of discussions, notices of various kinds, through a lot of chats and discussions. This has a direct impact on our efficiency.

We decided to use Airtable, a collaborative software, to organize the work. We designed a workspace to consist of "Task List", "Near-term Activities", "Participant", and "Reference Material". One of the pages is shown below.
<div align=center>

![image](https://user-images.githubusercontent.com/45459767/117415035-c1756a80-af0f-11eb-8a01-0d31dc373add.png)

</div>

-  In "Task List", we set the tasks that need to be completed in the near future, including the person who is responsible for the task, when the task is completed, and a description of the task.
- In "Near-term Activities", we publish various meetings, conference results and important notices.
- In "Participant", we post what each person has done, what they are doing, and what they are planning to do to keep track of where they are and where the project is going. During the epidemic, when there is no way to communicate directly, it can enhance our sense of teamwork and mutual trust.
- In "Reference Material", we upload links to sites of learning materials, completed code and documentation, and other teams' good work for sharing and recording.

It is undoubtedly an Agile management methodology, more similar to Scrumban, a hybrid of Scrum and Kanban.
<div align=center>

![image](https://user-images.githubusercontent.com/45459767/117415053-c5a18800-af0f-11eb-930f-4b9affeb2945.png)

</div>

The features of Scrumban include the following.

- Develop a Scrumban board, which contains the work that needs to be done
- Set the work-in-progress limits. The limits must be realistic to avoid work chaos and team frustration.
- Order the team’s priorities on the board. The key is that tasks need to be properly assigned to certain team members.
- Throw out the planning-poker cards. Tasks have no time limit, only the order of priority, and the team needs to complete the higher priority tasks as much as possible.
- Set the meetings, which can encourage team bonding and cohesion.

In fact, our project management framework more complicated, and in addition to limits, priorities, and so on, the Airtable workspace we designed emphasizes showing the individual's situation, like what a member is doing right now, which is a very important thing in small teams and in the COVID-19 situation.

In addition, we use a variety of collaboration software.

- For all kinds of small problems and discussions, we use WeChat for instant communication.
- When we meet the content that needs to be determined by collective discussion, we will arrange the free time for everyone to use teams for group meeting, and release the notice on Airtable and WeChat in advance.
- For simple things like creating a questionnaire and collecting photos, we use Google Docs.
- For complex code, we use the CodeSandBox, which is an online code editor and prototyping tool.

These different forms of collaboration help us effectively improve efficiency and increased flexibility in the team work.

## <span id="jump2">**Individual contributions**</span>

### Qihang Zhang

- Focus on the server side application built from Nodejs to process data from the client, and deploy programs to the remote server so that everyone can access our website.
- In the design of register.html, select the appropriate information that needs to be collected in order to give a suitable fitness plan later and send these information back to the server for storage in the database. This work was done with Zhuosi.
- Responsible for writing Conclusion.

### Zhuosi Zhang

- Use node.js to participate in building the structure of the back-end code. In order to complete the user login, registration and personal information collection functions of the website, two routes are designed and implemented. These tasks can be found in the files router.js, index.html, logined.html and register.html.
- Beautify the registration, login, and display plan pages.
- Participate in the web page test and complete part of Evaluation.

### Keyi Qin

- The initial task is to work with the database, and part of the database has been set up.
- Work with other team members to debug and solve problems.
- Do the connecting works, page beautification and page organization.
- Responsible for writing Introduction.

### Weifeng Dong

- Manage the Airtable workspace, like release task information.
- Collect the current situation of the market and industry. Experience competing programs (mainstream fitness programs), and identify possible differences and potential innovations. Identify the project and target users. Responsible for two user surveys and outputs, including questionnaires and interviews, data analysis, various prototypes and diagrams.
- Organize and participate in front-end discussions to find solutions.
- Responsible for writing Background and Motivation, UX Design, summarizing and writing contents of Sprints and Project Management.

### Huikang Leng

- Propose two ideas: mental health and fitness advice(finally taken). In the early stage of the project and hosted several meetings.
- Responsible for management of part of documents(Sprints & Project Management, System Implementation).
- Design the whole web page and optimize the page to make it more attractive.
- Create and modify the design of the human-computer interaction module on the front end and improve the user experience.

 

## <span id="jump3">Sprints Documentation</span>

### Sprint 1: Background and user research

Week 1 - 3

#### Sprint Aims

1. Determine the project content.
2. Determine how to demonstrate the feasibility and significance of the project and take action.
3. Set up a github repository.

#### Sprint Work

At this stage, we each proposed a number of projects and analyzed their respective feasibility. We spent a lot of time and effort on selecting meaningful projects that needed to be different from existing web applications. 

After determining the content of the project, we began to collect information, carried out a user survey, and designed the basic structure, function and appearance of the program based on the results of the user survey.

The details of this work can be seen in Background and UX Design.

#### Meeting Log 1

It was the first time we've organized a meeting outside of class, on WeChat. Everyone was present at the meeting.

We talked about the project topics we were interested in and made a preliminary selection. Follow-up, we collected the related information respectively.

#### Meeting Log 2

The meeting was held on WeChat and no one was absent.

Before the second group meeting, we had identified the fitness program as the project topic. In the meeting, we discussed the results of Weifeng Dong's first user survey and the designed prototype page. We thought we could do user research again to make sure we meet the needs of potential users.

### Sprint 2: Front-end and back-end learning and respective implementations

Week 4 - 6

#### Sprint Aims

1. Redesigned the way teams work.
2. Learn front-end and back-end knowledge and preliminarily build the rudiment of the website, including the front-end basic page, back-end framework and database, etc.
3. Adjust according to the user story, for example, Huikang modified the prototype based on users' feedback that they wanted the interface to have a fitness atmosphere, replacing the image in the <img> tag and setting the background image with background-image in CSS.

#### Sprint Work

In the front end, Huikang developed the create schedule module, in which the difficulty lies in the receiving and transmission of user data input, as well as how to extract and display the data expected by users on the page. Therefore, we learned basics of react like component and props, state, user interaction and how to handle user events, and made a preliminary design.

On the back end, the team spent a lot of time learning the basic structure and syntax of the back end, such as NodeJS, Express, MySQL, JavaScript. Zhuosi implemented the switch between login page and register page and the communication between client and server. To make our site available to everyone, the remote server is the core of this Web project. Qihang found a popular Web application server called Tomcat. However, when he deployed the IDEA software, it always showed connection errors. After the team discussion, we decided to forgo server configuration for the time being, focused first on the program, and then configured the program to a remote server once most of the functionality was implemented.

Keyi primarily focused on MongoDB. In our initial idea, there would be two database-related functions, one for the user identification system and the other for the user schedule storage. Since we didn't assemble the front end and back end together, there was no data transfer. Keyi designed the structure of the database, completed a simple database implementation demonstration, and connect to the background. 

#### Meeting Log 3

We had a short online meeting on Teams. No one is absent.

We talked about how to work as a team, because we were confused by the messiness of WeChat chats. Finally we decided to use Airtable for major project management, combined with WeChat and other software

#### Meeting Log 4

The meeting took place on Teams. No one was absent.

Weifeng shared the user story.

| User  story                                                  |
| ------------------------------------------------------------ |
| As a user, I would like to:  1)Add background images, such as photos of an ambience  gym environment, to motivate users to work out.  2)It is recommended to replace the image of the muscles  with the picture of the painting, as long as the location is clearly marked. The  feeling that muscular men give me is stressful and uncomfortable. |
| As a product manager, I would like to:  1)Sign up to add more personal information, such as  height and weight, for future personalization. |

We went over the design of the website in the meeting and thought that clicking the Create and Find buttons to expand the functionality would be more appropriate and convenient than jumping to a new page.

Zhuosi proposed the idea that the height input could be given directly on the side of the example, like if ''you are 180cm, please Input 180'', which would reduce the codes and not cause inconvenience to the user.

### Sprint 3: Front-end and back-end connection, and continue to improve

Week 7 - 9

#### Sprint Aims

1. Achieve that front-end and back-end are connected.
2. Solve the rest problems together.
3. Adjust the project according to the user story for the last time.

#### Sprint Work

On the front end, Huikang continued to complete the welcome page and build resource link. The welcome page was relatively easy to build, and the main difficulty we encountered was the implementation of the interactive images in the Resource Link section. In the prototype, we planed to build an interactive image that could be clicked from multiple places, which was a good idea. However, the difficulty here was that we need to create multiple clickable buttons (or other elements) in multiple locations on the same image and trigger onClick events, which is beyond our ability and difficult to achieve. Therefore, we simplified the functionality of this part: we reduced the interactive image to non-interactive, set multiple clickable images next to the image and redirect the browser to a new page. At the same time, all the contents of this part were divided into two parts, "front of human body" and "back of human body", and could be switched through routing.

On the back end, Zhuosi implemented data return to the server in order to store the user to the database. But then, after clicking the "finish" button on the registration page, something strange happened. Although the page returned to the login page, it did not return from the registration page to the login page. Later we found out that the data was submitted back to the server, which caused the smooth switching between routes. In order to solve the problem that the route from the registration page can return to the login page smoothly, Zhuosi learned some logics of the website registration page, added a code(`IF Registered，click <a href='/login' >Login</a>`) in Register.html, and added a link to return to the login route under the registration page, so as to facilitate the smooth switch of the user. 

Qihang looked at different modules of NodeJS, looking for useful features for our web project, and integrated some code written by other students on the back end to access and switch pages using specified ports. For the configuration of the remote server, we chose Google Cloud as our server and deployed the written program to this server. In the initial deployment, the Node process would stop running when SSH was disconnected. We tried two common methods on the network, nohup and forever, to keep the program running by using their NPM start statements as daemons, but both failed. Finally, we consulted relevant professionals and successfully kept the program running using the pm2 command.

Huikang and Keyi had some problems working together on the front and back ends. Since the team developed the front end and back end separately, we used different ports and ran into JavaScript Cross Origin problems. Data couldn't be transferred directly between two different ports, which meant that our idea of separating front and back ends didn't work. We tried Axios, CORS and a few other approaches on the Internet, but we couldn't overcome them. Finally, we had to make some changes to the implementation to integrate functions on one side. We hope to complete the function first and then do iterative optimization in the future.

#### Meeting Log 5

Weifeng Dong shared the user story and we implemented these requirements during the meeting.

| User story                                                   |
| ------------------------------------------------------------ |
| As a product manager, I would like to:  1)Add a personalized Your Plan page. Website can give a BMI based on height and weight.    2)After logging in, user can directly jump to the Your Plan  interface. |
| As a user, I would like to:  1)Your Plan page can include personal account information, basic  fitness advice, and the link to some teaching materials.    2)Correspondingly, personal fitness intentions should be added  in the registration, such as the parts that you want to exercise, so as to give fitness suggestions. |

We noticed that there were two functional concepts for "Plan", so we changed last "Plan" to "Schedule" to make the distinction.

#### Meeting Log 6

We worked together by video conference. All were present.

We learned the knowledge of website construction together during the meeting, discussed the problems we met together, and looked for the solutions that the front and back ends could not connect together.

During the meeting, we found that the CSS file could not be imported into the HTML file (shown in 'login.html'). We had to edit directly in HTML files. In addition, we also encountered an issue where the font '@Font Face' could not be imported from a local TTF file, but we did not find the cause and solution of the problem.

We also noticed that the link back to the home page from the user interface was not originally designed, Keyi added it. Besides, when we used the Router, we didn't set the default route at first, causing multiple routes to interfere with each other, and this problem was solved with Redirect.

In addition, the position of the input box of the login interface was set with a fixed margin value at the beginning. Later, considering the different display effects of different terminals, the fixed value was replaced with ''auto'' so that the login box was always located in the center of the screen.

### Sprint 4: Document writing

Week 10 - 11

#### Sprint Aims

1. Evaluate and summarize the project.
2. Review and organize the entire project.
3. Written document.

#### Meeting Log 7&8 and Work Assignment

We had the last two meetings. At WeChat, everyone was at the meeting. 

The previous meeting determined the assignment of work, as shown in the figure below.

<div align=center>

![image](https://user-images.githubusercontent.com/45459767/117415095-d0f4b380-af0f-11eb-8102-86594289a4de.png)

</div>

Among the parts of the document, Team, System Implementation, Sprints & Project Management involves every member of the team, which needs to be completed together, but one member is assigned to put forward requirements, summarize and write the rest of the content. Other parts are completely assigned to a member.

At the 8 th meeting, we discussed the problems in document writing. For example, Weifeng is not clear about the meaning of user story. We sent him the links of relevant materials, and gave specific examples of what needs we found in the past survey were actually user stories.

## <span id="jump4">Team use of Git</span>

Since we were not familiar with GitHub at first, we did not use GitHub for team work and version control. But we also agree on a way to work together. We use CodeSandbox, an online code editor tool, to achieve the team work. In fact, after every major change, we also upload the latest code in WeChat, along with a description of the functionality implemented and the new added or modified code file. This method allows us to keep abreast of how the code is changing and the progress of their work in real time. The code file can be trusted as main branch with the approval of each of the relevant developers. In addition, we use Airtable to back up different versions of the code files to avoid file loss and version confusion, as shown below.
<div align=center>
 
![image](https://user-images.githubusercontent.com/45459767/117415109-d520d100-af0f-11eb-99d8-c06b7cc3157a.png)

</div>
