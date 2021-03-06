/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('each feed has a URL and the URL is defined', () => {
            //loop through the array
            allFeeds.forEach((feed) => {
                //test if the feed obj has the url
                expect(feed.url).toBeDefined();
                //test if the url is not empty
                expect(feed.url.length).not.toBe(0);
            });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('each feed has a name and the name is defined', () => {
            //loop through the allFeeds array
            allFeeds.forEach((feed) => {
                //check if each feed has a name
                expect(feed.name).toBeDefined();
                //check if the name is not empty
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', () => {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         //check if it is menu-hidden
         it('the menue is hidden by default', () => {
            expect(document.body.className).toBe('menu-hidden');
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('the menu display when clicked and it hide when clicked again', () => {
            //check if the menu displays when clicked
            $('.menu-icon-link').click();
            expect($('body').className).toBe(undefined);
            //check if it hides when clicked again
            $('.menu-icon-link').click();
            expect(document.body.className).toBe('menu-hidden');
          });
    });
        

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         //run loadFeed so that the entries will be attached to the DOM before testing
         beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
         });

         //using length to test if there is at least one entry in the .feed container
         it('there is at least a single .entry element within the .feed container', (done) => {
            //get the array-like object
            let feedList = $('.feed');
            expect(feedList.children.length).not.toBe(0);
            done();
         });
    });

        

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         let before;
         beforeEach((done) => {
            loadFeed(0, () => {
                before = $('.feed').html();
                loadFeed(1, () => {
                    done();
                });
            });
         });

         it('the content actually changes', (done) => {
            let after = $('.feed').html();
            expect(after).not.toBe(before);
            done();
         });
    });
        
}());
