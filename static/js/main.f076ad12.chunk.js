(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{159:function(e,t,a){e.exports=a(243)},164:function(e,t,a){},165:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},166:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(52),o=a.n(r),i=(a(164),a(3)),s=a(4),u=a(6),c=a(5),m=a(7),h=(a(165),a(166),a(58)),d=a(31),b=a.n(d),E=a(14),f=a(62),p=a(60),g=(a(43),a(1)),v=a(16),y=a(53),w=a.n(y),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",top:50,bottom:0,right:0,left:0,overflow:"auto",padding:30,backgroundImage:"url('https://ae01.alicdn.com/kf/HTB1hLHiQXXXXXXyapXXq6xXFXXXu/custom-3d-wallpaper-Space-Wallpaper-Bookshelf-Background-Wall-living-3d-wallpaper-custom-3d-photo-wallpaper.jpg')",backgroundSize:"cover"}},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"Introduction")),l.a.createElement(g.a.Body,null,"Goodreads is a social cataloging website where users can sign up and register books to generate library catalogs and reading lists. This project investigates GoodReads data for books from various authors over a range of genre. Analysis regarding the influence of author, genre and ratings for different users is performed using interative visualizations.",l.a.createElement("br",null)," ",l.a.createElement("br",null),"In part 1, preprocessing steps such as analysis of data distributions, filtering, outlier detection and removal, overview of features, top trends and search through subset of data was presented. First round of questions regarding the structure and features of data, trends with respect to provided features were answered with the help of various plots. Details of part 1 is briefly presented here.",l.a.createElement("br",null)," ",l.a.createElement("br",null),"This is extended to create a holistic website capable of visualizing user similarity, review patterns, recommendations and searching through all properties of titles and authors.")),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"Dataset Source")),l.a.createElement(g.a.Body,null,"For initial analysis in phase 1, the dataset was taken from the following link:",l.a.createElement("br",null),"https://www.kaggle.com/jealousleopard/goodreadsbooks/download ",l.a.createElement("br",null),l.a.createElement("br",null),"Further, individual datasets for user data, tags/shelf and goodread_ids is taken from Goodbooks-10k:",l.a.createElement("br",null)," https://github.com/zygmuntz/goodbooks-10k")),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"Dataset Cleaning and Processing")),l.a.createElement(g.a.Body,null,l.a.createElement("b",null,"Outlier detection"),l.a.createElement("br",null),"Let us look at the distribution of average_rating and ratings_count As seen in the histogram below, the distribution is normal in the range 3 - 5, but there exists ratings of less than 1 which needs to be removed considering it as a default and irrelevant value.",l.a.createElement("br",null),"In case of ratings_count, the distribution is highly skewed. This clearly indicates the presence of outliers(very high values or low values). The case here might be having no ratings i.e. ratings_count = 0",l.a.createElement("br",null),"The third graph represnts a filtered ratings_count graph after removing of outliers. Now, the distribution is normal.",l.a.createElement("div",null,l.a.createElement("img",{src:w.a,style:{width:"100%",height:300}}))," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("b",null,"What data columns need to be chosen?"),l.a.createElement("br",null),"The dataset is such that there are redundant columns. But these serve different purposes. For example: ID There is 'id', 'book_id', 'goodread_ids', 'work_id' etc all used for identifying books.",l.a.createElement("br",null),"'id' here is a non-null field for representing book records",l.a.createElement("br",null),"'book_id' is used for combining multiple filters",l.a.createElement("br",null),"'goodread_ids' are used for linking external sources",l.a.createElement("br",null),"Hence, in each vizualization columns are used in accordance to their relevance, dependency and utility.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"How are invalid values handled?"),l.a.createElement("br",null),"Invalid values may be null values or restricted values.",l.a.createElement("br",null),"For records having invalid values to fields such as 'book_id' or 'title' which needs to compulsorily exist are filtered while loading into the vizualization in 'tableau'",l.a.createElement("br",null),"There may be null values for goodread_ids or language_code or original title: Such records are retained.",l.a.createElement("br",null),"For publication year, the allowed 'years' are restricted in the visualizations.",l.a.createElement("br",null),"The dataset is highly normalized in the sense that each file has minimum number of columns and different files are joined with corresponsing user_id or book_ids. During joins, the 'left-outer' or 'right-outer' are selected based on the existance of ids and application.",l.a.createElement("br",null),"A few attributes such as average_rating needs to be computed using rating field and count.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"What subset of data needs to be chosen?"),l.a.createElement("br",null),"Shown below is the log plot of value counts i.e. number of books available in each language in the dataset. As seen, the records available are mostlty english : 'eng' and 'engUS'. All other records are filtered out for further analysis.",l.a.createElement("br",null),"In the visualizations initial filters are chosen to have only these records. It can be changed by selecting the corresponding filters.",l.a.createElement("br",null),l.a.createElement(v.a,{url:"//plot.ly/~varshakr24/20.embed",width:"100%",height:"400px",frameBorder:"2",id:"myId",overflow:"hidden",className:"myClassname",display:"initial",position:"relative"}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"4 Cs of Data")),l.a.createElement(g.a.Body,null,l.a.createElement("b",null,"Completeness")," ",l.a.createElement("br",null),"After the DataCleaning phase, the data is complete in the sense that, data is available for all 10,000 books with required attributes such as 'book_id', 'title' and computed attributes such as average rating.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Coherence"),l.a.createElement("br",null),"There\u2019s no mismatch on the datatype of any components in our data set with all invalid values like 'negative' or 'null' removed in data cleaning.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Correctness"),l.a.createElement("br",null),"The data is fetched using good-reads api and normalized into multiple files with no external modifications for static values. The correctness can also be verified by going to the corresponding good-reads links. The computed values are seen to be closely matching the actual values from good-reads.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Accountable"),l.a.createElement("br",null),"The dataset is accessible to the public. The books data is not restricted.",l.a.createElement("br",null)," The user information is not available due to privacy concerns. For occurance of any user related feature a unique user_id is used, including in the vizualizations, only user_id can be seen and not 'name' or other information.  ")),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"Exploratory Analysis")),l.a.createElement(g.a.Body,null,l.a.createElement("b",null," Book Statistics "),l.a.createElement("br",null),l.a.createElement("b",null,"What are the top rated books?"),l.a.createElement("br",null),"The plots below show top rated books:",l.a.createElement("br",null),"Plot 1 shows top 10 high rated books in terms of average rating",l.a.createElement("br",null),"Plot 2 shows top books in terms of highest ratings count and ",l.a.createElement("br",null),"Plot 3 shows top 10 book with highest number of text reviews ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a,{url:"//plot.ly/~varshakr24/15.embed",width:"100%",height:"400px",frameBorder:"2",id:"myId",overflow:"hidden",className:"myClassname",display:"initial",position:"relative"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Author Statistics"),l.a.createElement("br",null),l.a.createElement("b",null,"What are the properties of top rated authors in the current dataset?"),l.a.createElement("br",null),"The plots below show top authors in terms of various features.",l.a.createElement("br",null),"Plot 1 shows authors with highest rating that is averaged out over all their books ",l.a.createElement("br",null),"Plot 2 shows authors with highest number of ratings count averaged over all their books ",l.a.createElement("br",null),"Plot 3 shows authors with highest number of text reviews count ",l.a.createElement("br",null),"Plot 4 shows authors with highest number of books ",l.a.createElement("br",null),"Plot 5 shows authors with highest average number of pages in all their books ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a,{url:"//plot.ly/~varshakr24/4.embed",width:"100%",height:"820px",frameBorder:"2",id:"myId",overflow:"hidden",className:"myClassname",display:"initial",position:"relative"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Author Work Statistics"),l.a.createElement("br",null),l.a.createElement("b",null," How are the ratings and reviews distributed with respect to authors work?"),l.a.createElement("br",null),"The plot shown below describes various features of a record in a single graph.",l.a.createElement("br",null),"The authors records are plotted as bubbles in the space of ratings count vs average rating.",l.a.createElement("br",null),"The color of the bubble suggests the average number of pages in the books written by the author ",l.a.createElement("br",null),"The radius of the bubble corresponds to the number of books written by the author",l.a.createElement("br",null),"(To obtain a clear visualization, plot is done on a subset of the dataset with lies near the mean of the bell curve)",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a,{url:"//plot.ly/~varshakr24/1.embed",width:"100%",height:"500px",frameBorder:"2",id:"myId",overflow:"hidden",className:"myClassname",display:"initial",position:"relative"}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"Features of Website")),l.a.createElement(g.a.Body,null,l.a.createElement("b",null,"Author Space"),l.a.createElement("br",null),"For any author or a group of authors, the user can understand the features in terms of rating, reviews or count. With the relative change in size or color and the grouping with respect to authors, users can understand the influence of authors.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Genre Cluster"),l.a.createElement("br",null),"The user can analyze books grouped by 'genre'. In any genre or group of genre the most rated books can be identified with interactive visualizations",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Search Space"),l.a.createElement("br",null),"Given a particular year/ genre / author, the most trending feature in terms of rating, reviews or count will be visualized, to answer questions regarding the most liked book, the most read book, the most popular author etc. Any user can search for books in any particular shelf or 'tag'. Queries related to author, title, average rating, number of pages will be specified. Reviews, ratings are listed for each book. For each author, co-authors information, other books, average rating and interested genre will be made available. For each genre, trending authors and titles will be listed. Search based on user will also be made available.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"User Network"),l.a.createElement("br",null),"A network visualization of users with each user as vertex and number of common books as distance between vertices will be constructed. This answers questions about grouping of similar users, books existing in the group of similar users or books receiving common negative reviews.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Recommendation System"),l.a.createElement("br",null),"All reviews given by users for different books are available in ratings.csv. A similarity score can be calculated between the current user and the users with submitted reviews. Out of the pool of available books with similarity in users, recommendations are made to any user selecting a book. This is done using ",l.a.createElement("b",null,"Collaborative Filtering")," technique.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null," Integration with external sources"),l.a.createElement("br",null),"Links to Goodreads website can be constructed using the bookID. In any visualization, users can reach the goodreads site corresponsing to the book they are analyzing.")))}}]),t}(n.Component),j=(a(24),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.initViz()}},{key:"initViz",value:function(){var e=this.vizContainer;new window.tableau.Viz(e,"https://public.tableau.com/views/Authorclustering/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{height:500,width:"100%"},ref:function(t){e.vizContainer=t}})}}]),t}(n.Component)),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",top:50,bottom:0,right:0,left:0,overflow:"auto",padding:20}},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"Questions")),l.a.createElement(g.a.Body,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Trends:",l.a.createElement("ul",null,l.a.createElement("li",null,"Who are the most rated authors?"),l.a.createElement("li",null,"Who are the best rated authors?"))),l.a.createElement("li",null,"About single author:",l.a.createElement("ul",null,l.a.createElement("li",null,"How many books from the author?"),l.a.createElement("li",null,"What are the available books from the author?"),l.a.createElement("li",null,"Which are the most rated books?"),l.a.createElement("li",null,"Which are the best rated books?"))),l.a.createElement("li",null,"About multiple authors:",l.a.createElement("ul",null,l.a.createElement("li",null,"How can authors be compared in terms of mumber of books?"),l.a.createElement("li",null,"How can authors be compared in terms of most ratings?"),l.a.createElement("li",null,"How can authors be compared in terms of most ratings")))))),l.a.createElement(j,null))}}]),t}(n.Component),z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.initViz()}},{key:"initViz",value:function(){var e=this.vizContainer;new window.tableau.Viz(e,"https://public.tableau.com/views/BooksGenre/Sheet2?:display_count=y&publish=yes&:origin=viz_share_link")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{height:500,width:"100%"},ref:function(t){e.vizContainer=t}})}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",top:50,bottom:0,right:0,left:0,overflow:"auto",padding:20}},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"Questions")),l.a.createElement(g.a.Body,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Trends:",l.a.createElement("ul",null,l.a.createElement("li",null,"Which are the most rated Genres?"),l.a.createElement("li",null,"Which are the most available Genres?"))),l.a.createElement("li",null,"For a selected Genre/Genres:",l.a.createElement("ul",null,l.a.createElement("li",null,"Which are the most rated books?"),l.a.createElement("li",null,"To which Genre among selected, does the most rated books belong?"),l.a.createElement("li",null,"What are the individual properties of books like ratings?"),l.a.createElement("li",null,"Link to books?")))))),l.a.createElement(z,null))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",top:50,bottom:0,right:0,left:0,overflow:"auto",padding:20}},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"Questions")),l.a.createElement(g.a.Body,null,l.a.createElement("ul",null,l.a.createElement("li",null,"What is the number of commom books between each pair of users?"),l.a.createElement("li",null,"Which user has the most number of connections?"),l.a.createElement("li",null,"How frequently does books appear in common books list?"),l.a.createElement("li",null,"Which group of users have the most number of common books?")))),l.a.createElement("br",null),l.a.createElement(v.a,{url:"https://public.flourish.studio/visualisation/1050741/embed",width:"100%",height:"500px",id:"myId",overflow:"hidden",className:"myClassname",display:"initial",position:"relative"}))}}]),t}(n.Component),C=a(55),_=a.n(C),B=a(56),S=a.n(B),H=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.initViz()}},{key:"initViz",value:function(){var e=this.vizContainer;new window.tableau.Viz(e,"https://public.tableau.com/views/Book1_15756186625570/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{height:500,width:"100%"},ref:function(t){e.vizContainer=t}})}}]),t}(n.Component),W=a(57),A=a.n(W),D=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",top:50,bottom:0,right:0,left:0,overflow:"auto",padding:15}},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null," ",l.a.createElement("h6",null,"Recommendation System")),l.a.createElement(g.a.Body,null,"Recommender systems are utilized in a variety of areas, and are most commonly recognized as playlist generators for video and music services like Netflix, YouTube and Spotify, product recommenders for services such as Amazon, or content recommenders for social media platforms such as Facebook and Twitter",l.a.createElement("br",null),l.a.createElement("br",null),"Two common approaches to building Recommendation systems are:",l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Content Based Filtering"),l.a.createElement("li",null,"Collaborative filtering")),"Here, a recommender system is built for books using collaborative filtering using user-rating matrix for all books.")),l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null," ",l.a.createElement("h6",null,"Content based filtering")),l.a.createElement(g.a.Body,null,"Content-based filtering methods are based on a description of the item and a profile of the user's preferences. These methods are best suited to situations where there is known data or properties. Content-based recommenders treat recommendation as a user-specific classification problem and learn a classifier for the user's likes and dislikes based on product features.")),l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null," Collaborative filtering")),l.a.createElement(g.a.Body,null,l.a.createElement("div",null,l.a.createElement("img",{src:S.a,style:{width:250,height:250,float:"left"}}),"Collaborative filtering is a method of making automatic predictions (filtering) about the interests of a user by collecting preferences or taste information from many users (collaborating). The underlying assumption of the collaborative filtering approach is that if a person A has the same opinion as a person B on an issue, A is more likely to have B's opinion on a different issue than that of a randomly chosen person.",l.a.createElement("br",null),l.a.createElement("br",null),"This image shows an example of predicting of the user's rating using collaborative filtering. At first, people rate different items (like videos, images, games). After that, the system is making predictions about user's rating for an item, which the user hasn't rated yet. These predictions are built upon the existing ratings of other users, who have similar ratings with the active user.",l.a.createElement("br",null),"source: WikiPedia",l.a.createElement("br",null),l.a.createElement("br",null),"For instance, in our case the system has made to make predictions based on the ratings given to books by different users.",l.a.createElement("br",null)))),l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null," ",l.a.createElement("h6",null," Matrix factorization and Single Value Decomposition")),l.a.createElement(g.a.Body,null," ",l.a.createElement("div",null,l.a.createElement("img",{src:A.a,style:{width:600,height:250,float:"left",margin:20,marginRight:40}}),l.a.createElement("br",null),"Matrix factorization algorithms work by decomposing the user-item interaction matrix into the product of two lower dimensionality rectangular matrices.",l.a.createElement("br",null),l.a.createElement("br",null),"The image summarizes the core idea behind matrix factorization. Let there be matrix A with dimensionality of (m,n) this matrix can be viewed as a dot product between two matrix with each matrices having dimensions of (m,k) and (k,n)."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("img",{src:_.a,style:{width:750,height:350,float:"right",marginLeft:40}}),"Singluar Value Decomposition is one way way of doing matrix-factorization. The number of features chosen for SVD is 10. With this, A correlation matrix is computed for each pair of books as shown in the image.",l.a.createElement("br",null),"This is a matrix of size 10,000*10,000",l.a.createElement("br",null),l.a.createElement("br",null),"Here, the correlation matrix is precomputed for use in the vizualization. From the correlation matrix a list of pairwise correlations are extracted. This list is filtered to include only those values avove threshold which is 0.9."))),l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null," ",l.a.createElement("h6",null," Recommendation System ")),l.a.createElement(g.a.Body,null," ",l.a.createElement("b",null,"Usage Instructions:")," ",l.a.createElement("br",null),"A user has to enter any book that he/she likes in the provided textbox. The system calculates the correlation between the chosen book and all available books based on other users ratings. The recommendations are such that the correlation is greater than 0.9. The provided recommendations are ranked wrt correlation.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H,null))))}}]),t}(n.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.initViz()}},{key:"initViz",value:function(){var e=this.vizContainer;new window.tableau.Viz(e,"https://public.tableau.com/views/Bestrating/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{height:500,width:"100%"},ref:function(t){e.vizContainer=t}})}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",top:50,bottom:0,right:0,left:0,overflow:"auto",padding:20}},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement("h6",null,"Questions")),l.a.createElement(g.a.Body,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Initial Table:",l.a.createElement("ul",null,l.a.createElement("li",null,"What are the best rated books?"),l.a.createElement("li",null,"What are the best rated books in a given year range?"),l.a.createElement("li",null,"What are the best rated books for a selected author or authors?"),l.a.createElement("li",null,"Search for a book with title"))),l.a.createElement("li",null,"Readers for selected book/books:",l.a.createElement("ul",null,l.a.createElement("li",null,"Who are the users reading the book?"),l.a.createElement("li",null,"Who are the users reading multiple selected books?"))),l.a.createElement("li",null,"Shelves for selected book/books:",l.a.createElement("ul",null,l.a.createElement("li",null,"To which shelf does the book/books belong?"),l.a.createElement("li",null,"How many times is any book placed in any particular shelf?"),l.a.createElement("li",null,"Most common shelves the book belongs to?")))))),l.a.createElement(I,null))}}]),t}(n.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",top:50,bottom:0,right:0,left:0,overflow:"auto",padding:20}},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,"Student Info"),l.a.createElement(g.a.Body,null,"Name: Varsha Kuppur Rajendra ",l.a.createElement("br",null),"AndrewID: vkuppurr",l.a.createElement("br",null),"EmailID: vkuppurr@andrew.cmu.edu")))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).selecttab=function(e){var t=a.state;t.selected=e,a.setState(t)},a.state={selected:"home"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.selected;return l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement(h.a,{position:"static"},l.a.createElement(b.a,{variant:"dense",style:{height:50}},l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(f.a,{type:"radio",name:"options",defaultValue:t,onChange:function(t){return e.selecttab(t)}},l.a.createElement(E.a,{value:"home"},"Home"),l.a.createElement(E.a,{value:"author"},"Author Space"),l.a.createElement(E.a,{value:"genre"},"Genre cluster"),l.a.createElement(E.a,{value:"search"},"Search Space"),l.a.createElement(E.a,{value:"network"},"User network"),l.a.createElement(E.a,{value:"recommendation"},"ML Prediction"),l.a.createElement(E.a,{value:"student"},"Student Info"))))))),"home"==t?l.a.createElement(k,null):null,"author"==t?l.a.createElement(O,null):null,"search"==t?l.a.createElement(F,null):null,"genre"==t?l.a.createElement(T,null):null,"network"==t?l.a.createElement(x,null):null,"recommendation"==t?l.a.createElement(D,null):null,"student"==t?l.a.createElement(V,null):null)}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,t,a){e.exports=a.p+"static/media/distribution.76d48de6.png"},55:function(e,t,a){e.exports=a.p+"static/media/Correlation.905122b7.PNG"},56:function(e,t,a){e.exports=a.p+"static/media/Collaborative_filtering.722d7195.gif"},57:function(e,t,a){e.exports=a.p+"static/media/matrix.10a60666.png"}},[[159,1,2]]]);
//# sourceMappingURL=main.f076ad12.chunk.js.map