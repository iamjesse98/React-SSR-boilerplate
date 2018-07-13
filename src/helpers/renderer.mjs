import ReactDOMServer from 'react-dom/server'
import ReactRouterDOM from 'react-router-dom'

import e from '../client/utils/e'
import Routes from '../client/Routes'

const content = url => ReactDOMServer.renderToString(
                                        e(ReactRouterDOM.StaticRouter, {
                                                location: url, context: {}}, 
                                        e(Routes)))

export default req => `
    <html>
    <head></head>
    <body>
        <div id="root">${content(req.path)}</div>
        <script src="bundle.js"></script>
    </body>
    </html>`