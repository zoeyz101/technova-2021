## Inspiration
Women and other gender minorities in STEM, Law, or any other male-dominated industry, often suffer from a feeling of imposter syndrome that their male counterparts do not. This leads to a lack in self-esteem and an apprehension to take credit for ideas, leading to a decrease in chances of receiving a promotion, or even simply getting a job.

As we are a team of women and feminine-presenting people in STEM, we have experienced this feeling of imposter syndrome firsthand. We want to help all women and gender minorities, whether they are women with years of experience in their fields or young children discovering passion for a field that doesn't appear welcoming, improve their sense of confidence and self-worth through our product.

https://www.canva.com/design/DAEoeTYjF6s/E723QBfd7bDysbSJNy98Hw/view?utm_content=DAEoeTYjF6s&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

## What it does
AccomplishWomen+ allows women and other gender minorities to keep track of their accomplishments - whether they be in regards to their personal life, career, education, etc. - and be motivated to keep working towards their goals. With simply an email and password, users are granted their own accounts to track their success as they choose. They're able to sort said achievements in multiple ways, whether it be arranged by type alphabetically, date accomplished, or specific types indicated by the user. Meanwhile, they also have a dashboard reminding them of random past accomplishments they've logged, a news feed of other users' accomplishments to celebrate other women's successes, and various daily affirmations to keep their spirits high.

## How we built it
Figma was used to plan and design the various pages of the application. The frontend of the application was built using the React framework and React Bootstrap as a design library. The different pages were stylized with saas/css. Meanwhile, the backend uses Express with MongoDB to store user login information, as well as every user's individual accomplishment database.

## Challenges we ran into
We ran into numerous challenges, big and small, while working on this project. Some were as simple as scss files refusing to behave properly, while some were as complicated as implementing a rough backend structure for our web application having never done it before. Of course, the latter was the most difficult challenge faced while working on the project. While we managed to have the backend and frontend working successfully on their own, integration was a struggle. However big the struggle, it was necessary to ensure a working login page and allow for successful form submissions across our project's scope.

Another challenge appeared in the form of achievement sorting. While the removal and inclusion of the user's logged achievements was solved with few problems, the actual sorting of said achievements by date and type posed a different issue. While the sorting logic was sound - as indicated by the gathered list of achievements at the end of sorting - the application itself refused to reload, preventing the list from restructuring itself in the desired sorted order. We were left stumped as everything appeared to be written correctly. After a fair amount of searching, we found the incredibly small, easy to miss fix that quickly solved the problem that arose. Once it was implemented, the web application ran smoothly and sorted the achievements as required by user specification. 

## Accomplishments that we're proud of
While we're obviously proud of all the things we achieved while working on this project - we all tried our hand at various aspects of web application development we had no prior experience with, which is an feat in itself, the largest accomplishment that we're proud of is the product itself. We put in our best effort, created a product that is both fun and beneficial for the user, and have room to expand our product's functionality and scope if we have the time and desire to do so. And we're not shying away from the feeling of pride at what we created! After all, that's what AccomplishWomen+ is all about.

## What we learned
- MongoDB
- Redux Toolkit
- React-Bootstrap Form Submission and Validation

## What's next for AccomplishWomen+
There are numerous features we hope to add to AccomplishWomen+ as the product continues to develop. Firstly, we hope to add a groups feature to the application. This would be similar to the newsfeed section of the application; however, all groups available to join would be various organizations pertaining to women and gender minorities. Some examples include Society for Canadian Women in Science and Technology, Engiqueers Canada, Ontario Network of Women in Engineering (ONWiE), and Ladies Learning Code. Not only would this allow our users to celebrate their achievements with one another and create a network of peers across various fields of study, but it also presents the possibility of future partnerships between our product and the aforementioned organizations, as well as others not listed.

We also hope to include a resources section where our users will have access to information pertaining to various events across the country, and hopefully internationally. These events would include hackathons for university level students, female led panels, numerous conferences, and any other pertinent events that happen to arise.
