# Evaluation
## Table of contents

- [Part 1: Methodology for evaluating the design](#jump1)
- [Part 2: Timeline of the evaluation](#jump2)
- [ Unit testing, functional testing](#jump3)


## <span id="jump1">Part 1: Methodology for evaluating the design</span>

In order to evaluate user feedback and experience with our product and for self-evaluation, we used four techniques throughout the process: **questionnaires, prototype feedback, interviews**, and **comparison with established websites**.

The following is a brief description of these four techniques.

#### 1) Questionnaire.

Because of the impact of the  covid19，questionnaires became the main way to get feedback from our users, as we could get feedback from as many users as possible through questionnaires. In the first few weeks of the project, we collected users' needs about the fitness website to adjust our design goals and in the middle and later stages of the project. We could also get users' experience about the website and related suggestions through questionnaires so that we could continuously improve the website.



#### 2) Prototype feedback.

This method involves drawing the idea of the website page with the help of power point, presenting it to potential users and collecting user feedback and suggestions about the interaction of the website. Here you can see the UX section. The feedback received in this section provided us with valuable information in the previous weeks.



#### 3) Interviews.

Interviews with users are conducted at various times to obtain feedback. This feedback is often more detailed than the information obtained through the questionnaire and can provide questions and suggestions that we had not thought of. Of course, the disadvantage of this method is that it is difficult to collect feedback from a larger number of users.



#### 4) Comparing mature websites.

After the basic completion of the website, through the comparison of a similar Chinese fitness website (https://www.gotokeep.com/) and the collective brainstorming of all members of the development team, we can find out the current shortcomings of our website and the areas that we can continue to improve afterwards.



## <span id="jump2">Part 2: Timeline of the evaluation</span>

#### Phase 1: Gathering feedback on early ideas 22/2/2021

After discussion among the team members, it was decided to make a website that can share fitness knowledge and help users to develop a fitness program that suits their needs. In order to verify its meaning, relevant questions were asked to potential users through a questionnaire. To summarize, it can be concluded that many people don't develop fitness habits because they don't know how to start. This gave us part of the motivation to know that our final product would make sense based on user feedback, which was to provide a convenient and concise program to people without a fitness habit.



#### Phase 2: Feedback on the website prototype 20/3/2021

Based on the initial concept, we completed a prototype that demonstrated our expectations for the final outcome of the website at this stage. Feedback was solicited from eight potential users by taking the form of interviews. The information received at this stage told us that the search function in the site was actually unnecessary as they could just use Google. Users also indicated that the site's punch card feature made them feel pressured, so we decided to remove the search and punch card features from the site in a follow-up effort. Another user said that having pictures of male models with too good a body did not motivate them, but rather made them feel too difficult and discouraged. Therefore, we decided to increase the number of photos on the site and try to make people feel comfortable and create a fitness atmosphere.



#### Phase 3: User experience with the initial website 2/4/2021

At this stage, we had completed the development of some static pages but hadn't finished the work on the users creating their own accounts. The webpage was more like a library with a lot of fitness knowledge and information. At this stage we shared the site with potential users and asked them for subjective suggestions through a questionnaire. <u>Almost all of the feedback indicated that the site should not just be a collection of fitness knowledge and resources, but should feature content that is appropriate and unique to different groups of people.</u> Users of the site care about their unique interactions with the site. Therefore, after completing the user registration and login functions of the site, we decided to select the right metrics to provide training plans that are appropriate and unique to different users.



#### Phase 4: User experience of the final website 22/4/2021

At this point, the development of the main content of the website was basically completed and interviews were conducted with 12 users to ask about their experience of using the website. According to the feedback received, most of the users liked the feature that the website could recommend fitness plans based on the user's personal situation and the body parts they wanted to exercise. In particular, it was cool that the bmi index was used to differentiate between different groups of users. However, a few users did mention the important point that the current site only gives one plan per user, which makes them feel that there is a lack of diversity. We think this is a fair comment and it could be one of the directions to continue improving the site in the future.



#### Phase 5: Self-assessment 29/4/2021

Having completed almost all of the development work, during this phase the team members collectively discussed and brainstormed to evaluate the completed work by comparing it with established fitness websites. Through the comparison and discussion, we believe that there are still some shortcomings and areas where the website can be improved in the future. First, the knowledge and videos about fitness that we give to the users of the website could be richer and more diverse, not only in the form of text and videos, but also in the form of illustrated tutorials. Secondly, perhaps we can consider adding a blog for users to record their fitness logs so that they can record their fitness process. Thirdly, the current website mainly recommends fitness plans based on the user's bmi index and the part of the body that they want to work out but this seems to be not perfect and more information should be considered in the future to make the recommendations more suitable for the users.



## <span id="jump3"> Unit testing, functional testing<span id="jump1"</span>
  
  <div align=center>
<img src="https://github.com/HKLENG/Desk22-Group/blob/main/report/image/evluation.png" width="70%" height="70%" />

</div>
This is the logic of the implementation of our website, which can be divided into a fitness knowledge sharing system on the welcome page, an account creation and login system and a plan recommendation system. Two functions are implemented: suggesting and plan making.

For the plan making function, we use images on the welcome page to divide the muscles of the human body into 16 areas and users can click on the corresponding buttons to get more detailed information according to what they want to know. According to the feedback received from users during the development process, most of them were satisfied with the suggestion feature. Some users said that it gave them a clearer understanding of the muscle structure, which is certainly helpful for goal setting.

The functional evaluation of the user's personal plan development has been described in detail in Stage 4.

#### Input Form Testing with React

When users create their own fitness schedule, we use form to receive the input. Therefore, we need to ensure that the form can receive data correctly and pass the data through State

First things first we are initializing a wrapper variable that we will use the `mount` function available through Enzyme to have a copy of our component. Then we create a state spy so that we can check that React's useState function is called. Finally, we write our beforeEach and afterEach functions to mount our component and then clear all jest mocks.

```jsx
describe("<DataForm />", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
```

This first describe block is testing our title input which we can see by finding the first input. From here we set it's value to "Test" and then initiate a change action. We want to check that our setState function is called with this title. The same pattern follows for our amount input test. We are checking that our setState function is being called with the updated input of "16".

```jsx
 useStateSpy.mockImplementation((init) => [init, setState]);
  describe("Title input", () => {
    it("Should capture title correctly onChange", () => {
      wrapper = Enzyme.mount(Enzyme.shallow(<ExpenseForm />).get(0));
      const title = wrapper.find("input").at(0);
      title.simulate("change", {
        target: { value: "Test" }
      });
      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenCalledWith("Test");
    });
  });
  describe("amount input", () => {
    it("Should capture amount correctly onChange", () => {
      wrapper = Enzyme.mount(Enzyme.shallow(<ExpenseForm />).get(0));
      const amount = wrapper.find("input").at(1);
      amount.instance().value = "Testing";
      amount.simulate("change", { target: { value: "16" } });
      expect(setState).toHaveBeenCalledWith("16");
    });
  });
```

















