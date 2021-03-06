import React from 'react';

const Html = props => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>React Server-Side Rendering</title>
            <script dangerouslySetInnerHTML={{ __html: props.preloadState }} />
        </head>
        <body>
            <div id="root">{props.children}</div>
            <script src={props.script} />
        </body>
    </html>
);

export default Html;
