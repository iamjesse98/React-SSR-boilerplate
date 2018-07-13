import e from '../utils/e.mjs'

const Home = _ =>(
    e('div', {},
        e('div', {}, 'I am the Home Component.'),
        e('button', {onClick: _ => console.log('hello...')}, 'Click Me')
    )
)

export default Home