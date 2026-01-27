# Cydog Browser Deterrent Renderer
This is a free-to-use JS drop-in to secure your website. It allows users to build a website in HTML and then convert it to JSON so they can render pages on the client-side, saving server resources and decreasing vectors for injection attacks, similar to how our [Deterrence Encryptor](https://github.com/Cydog-Browser/deterrent-encryptor) technology works. We hope to create a website builder later so users can build entire websites in JSON using this technology.

## What is Deterrence Rendering?
Imagine being able to edit your website easily while offloading tasks to a client's browser. Re-rendering is a post-rendering process where a web page is rendered with structured JSON in its body and then re-rendered seamlessly without a user noticing it. There are two paths a re-render can take. The most secure re-render is via a sandboxed iFrame where trusted code can execute but untrusted code cannot inject, essentially blocking all dynamic injection of scripts that weren't <u>embedded</u> into the original code. The least secure re-render method renders the original code, allowing for dynamic script injection from unembedded sources, while blocking all other third-party script injection.

You can demo the Deterrent Renderer Website Builder [here](https://demos.cydogbrowser.com/deterrent-renderer).
You can demo the Deterrent Renderer Proof of Concept [here](https://demos.cydogbrowser.com/deterrent-renderer/concept.html).

## Installation & Implementation
1. Download cyjsonrenderer.js
2. Add to web project (e.g., `/js/cyjsonrenderer.js`)
3. Include this HTML to serve dynamically or statically generated JSON files:
```html
<html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    </head>
    <body>
        <div id="json-path" data-json-renderer-path="[path to json file]">[custom loader view]</div>
        <script src="/js/cyjsonrenderer.js"></script>
    </body>
</html>
```

## Core Protections
| Feature | Protection Level | Impact |
|---------|------------------|--------|
| **Re-rendering** | Critical | Prevents Man in the Middle (MitM) injection |
| **Re-resourcing** | High | Speeds up server rendering |

## Implementation Notes
Supports all file types requiring JavaScript. Statically or dynamically generate JSON files to serve with our deterrence re-rendering.

## Server Compatibility
This solution works on all servers and clients.

## Contribute
Send me a pull request!

## See our terms & conditions
[Our terms & conditions](https://cydogbrowser.com/cyterms.html)

## Want to know more?
Visit [https://cydogbrowser.com](https://cydogbrowser.com/)