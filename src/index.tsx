import { h, render } from 'preact'

/**
 * App
 * @constructor
 * @param {string} title - The app title
 */
const App = (props: { title: string }) => {
    // set app tile
    document.title = props.title;

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

render(<App title="My App" />, document.getElementById('root'))