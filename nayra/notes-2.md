"Content is King" - Bill Gates, 1996

To create a website the two most important steps:
    Design the website
    Code the website

Designing a website
    1. Identify the website's audience
    2. Understand the audience's goals. (Not your goals.)
    3. Assemble/create content to address the audience's goals.
    4. Organize content into web pages. (Websites have MULTIPLE pages.)
    5. Plan the website's design.
    6. Evaluate the site's design. Does the website address the audience's goals?

Coding a website
    For each webpage in the website:
        1. Structure the content in HTML.
        2. Style the content with CSS using your design plan.
        3. Add interactivity with JavaScript to enhance the user's experience with the content.

HTML - Content
CSS - Styling and Layout
JavaScript - Interaction

HTML - HyperText Markup Language
    Content (Text, Images, Video, Audio)
    Structure (Navigation, Header, Paragraph, Footer)

HTML Tags (Markup languages are all about tags)
    HTML is all about TAGS, structure content by wrapping it in tags
        <tag>content</tag> (THIS IS THE FORMAT FOR TAGS)
        TAGS ALWAYS HAVE TO BE A P IF YOU WANT TEXT (EX:<p> </p>)
        TAGS WILL HAVE h WHEN THEY ARE HEADERS; THE NUMBER AFTER THE h (EX:<h2> </h2>) WILL INDICATE THE SIZE OF THE HEADER
            Opening tag = <p>
            Closing tag = </p>
            Content goes between opening and closing tag (EX: My cat is very grumpy)

Example of content structured in HTML:
<h2>
    Welcome!
</h2>

<p>
    I am a lecturer...
</p>

<p>
    For information about...
</p>

Lots and Lots of tags
    There are many tags to include and structure content.
        <h1..6> to make 6 different size headers
        <p> to structure paragraphs
        <img> to include images
        <a>to make links
        <ul>,<ol> to make bulleted or numbered lists
    MORE OF THIS ON NEXT SET OF NOTES

CSS adds Style and Layout to HTML
    CSS - Cascading Style Sheets
        Style (fonts, colors)
        Layout (positioning, layout)

CSS Rules
    CSS - Cascading Style Sheets

    CSS is all about creating styling rules
    These rules are then applied to the HTML elements (tags)

    p {color: red;} (In this structure, "color" is the property, "red" is the property value, and "color: red;" is the declaration)

JS is for Interactivity
    JS - JavaScript
        Interactivity
            Every time a web page does more than just sit there and display static information for you to look at - displaying timely content upadtes, intreactive maps, animated 2D/3D graphics, scrolling or expanding content, pop up windows - JavaScript is probably involved.

            JavaScript is a scripting or programming language that allows you to implement complex features on web pages.

            JavaScript allows to dynamically access HTML elements and CSS rules and add or change content and how its displayed.

Static Website
    Static website is collection of webpages

    The HTML code for each page is stored in a separate file

    The CSS and JS code for webpage's are also stored in their own files

    All of the files are organized into a web project folder

Organization
    ALL 3 TYPES OF CODE ARE STORED IN SEPARATE FILES

    HTML is at root level. CSS & JS code & media files are stored in sub-folders

How the browser access webpages and its content from a webserver
    HTTP - Hypertext Transfer Protocol
        HTTP shows up which is the Browser Address Bar, the first thing to show up in a browser address bar "https"

How browser renders a webpage
    Browser makes a https request of an HTML file

    HTML page references JS + CSS + Media

When the server returns the HTML page:
    1. Browser requests the HTML page; server returns the HTML page
    2. Browser loads the HTML and begins to process the HTML code
    3. Browser then requests CSS; server returns file with CSS
    4. Browser then requests JS; server returns file with the JS
    5. Browser then requests Media; server returns the file that is the image
    6. Browser the reders the page combining > HTML + CSS + JS + Media

How browser renders a Webpage
    HTML Pages reference or link in the CSS + JS + Media files

Anatomy of a Webpage
    The BROWSER refers to a web page as a "document" (<!DOCTYPE html>)

    The <head> section tells the browser additional information about HOW to display the page.

    The <body> section tells the browser what content to display ON the page


HTML stands for HyperText Markup Language
    Content (text, images, video, audio)
    Structure (navigation, header, paragraph, section)
        HTML describes the structure of web pages
        HTML is a markup language
        HTML is all about structuring content (where everything will go/organization)

"Good" HTML Markup
    Structural Markup (structural markup definition: This is markup (in any language) that gives information about the structure of a document. It may also be associated with a change in appearance, but the key is that it provides information about divisions, titles, sections, paragraphs, or other aspects of the structure of a document.)
        "This is a heading" <h2>
        "This is an aside" <aside>
    Semantic Markup (marking up a document with information about the actual data structure behind the information, rather than styling the document with exclusively visual information. In the case of HTML, for example, this means using heading tags instead of just changing the size of the font)
