// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
// },
// children: ['Click here to visit Google']
// }

const anotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Razzi"

const ReactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    'Click me to visit Google',
    anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(
    ReactElement
)
