# Bookr - User Interface (Colin de Vries)

## Languages Used ##

## HTML ##

I used semantic HTML to create the structure and content of the web pages, adding classes, ID's, and data attributes to structure my code and make it more meaningful.

## LESS / CSS ##

Using LESS, I created several variables and mixins, and was able to better organize my code by importing several LESS files into an index.less file. Using nesting, I was able to better structure my CSS and style elements with higher specificity. I stored the fonts and colors in variables, which made them easy to remember and reuse several times throughout the website. I created several mixins, for fonts, `display: flex` and sections with identical designs. I sized text using `rem`, allowing the text to be responsive if the user changes the font settings in the browser. In addition, I used variables for media queries, which I then used to change the styles of elements as the web page grows larger in width. I started my design mobile-first and incorporated all screen widths into a responsive design.

## JavaScript ##

Using JavaScript, I created reusable components on the "About" page. With event listeners and data attributes, I created buttons that filter group members based on their role in the project. In addition, I created a mobile navbar for the about page that drops down when the hamburger icon is clicked.


## Marketing Page ##

Marketing page was created based on UX designer's layout. I incorporated chosen colors and fonts into the project, including local fonts. The marketing page is responsive, and will look good on all screen widths. Starting mobile first, I added two media queries for a tablet and desktop layout.

## About Page ##

Created my own design based on the marketing page, describing all of our team members and their roles in the project. Incorporated JS components into tabs that filter team members based on their role. I also added a mobile navbar that drops down when the hamburger icon is clicked.

## Project Details ##

Pitch: Bookr is your source for all things Text Book. Picture the AirBNB of text books, a social platform for peer reviewed text books.

MVP: As a user I can log in, and see a list of text books. Each book will have a 5 star rating I can browse from. As a user I can review each book.
Login Page - After a user logs in, they'll be directed to a home page.
Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.
Home Page - Contains a list of Books laid out in a grid format.
Single Book Page - Loads information about the book, Author, Name, Publisher and a scrolling list of reviews. Add review and delete book buttons present.
Single Book Add Review Page - Clicking add review brings up a form (could be modal, could be its own page) where a user can add their review of the book. Clicking submit adds the review to the books information.
Delete Book - Modal confirming the action, on confirmation user is routed back to the home page and book is gone from the list of books.
Data Modeling: Each book has a Title - String, Author - String, Publisher - String and Reviews- Array of Objects field. The reviews object shape should be Reviewer - String, Review - String.

Stretch Goal: A link to each book will take me to a site where I can purchase a book and compare prices.

