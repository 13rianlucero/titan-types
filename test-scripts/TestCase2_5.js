/* ==========================================================
Authors: Ethan Santos
==========================================================
Licensing Information: MIT License
==========================================================
Description: This builds off of test scenario 2 test case 1, 
where we check the timer functionality to ensure that selecting the 
different times appear properly on the application. This is 
test case 1, it tests to see if selecting the "1 Minute" item 
in the timer changes the timer to 60 seconds in Microsoft Edge
========================================================== */

function TestCase2_5() {
    // Opening the specified URL in Edge
    Browsers.Item(btEdge).Navigate("https://titan-types-finalized-testing-environment.vercel.app/")
    Aliases.browser.pageTitanTypes.Wait()
    // Selecting 1 minute for duration
    Aliases.browser.pageTitanTypes.selectDuration.ClickItem("1 Minute")
    Aliases.browser.pageTitanTypes.Wait()
    // Checks whether contentText reads out 60
    aqObject.CheckProperty(Aliases.browser.pageTitanTypes.FindElement('#timer-val'), "contentText", cmpEqual, "60")
}
