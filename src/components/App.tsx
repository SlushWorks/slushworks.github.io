import React from 'react'
import Typed from 'typed.js'
import Footer from './Footer.tsx'

import '/src/css/App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <div className="grid-row">
                <div className="grid-col">
                    <PageLogo />
                    <PageTitle/>
                    <PageDescription/>
                </div>
            </div>
            <Footer />
        </>
    )
}

function PageTitle() {
    return (
        <div className="page-title chakra-petch-regular">Slush Works</div>
    )
}

function PageLogo() {
    return (
        <div className="page-logo">
            <img className="page-logo" src="/src/assets/png/logo.png" alt="Slush Works logo" />
        </div>
    )
}

function PageDescription() {
    const el = React.useRef(null);

    React.useEffect(() => {
        let typed: Typed = new Typed(
            '#typing-elem', {
                strings: [
                    '<span class="blue-text">Artificial Intelligence</span> ^1000 <span class="red-text">organized</span>',
                    '<span class="blue-text">Artificial Intelligence</span> <span class="yellow-text">simplified</span>',
                    '<span class="blue-text">Artificial Intelligence</span> <span class="green-text">democratized</span>'
                ],
                typeSpeed: 30,
                smartBackspace: true,
                showCursor: true,
                cursorChar: '┃',
                autoInsertCss: true,
                loop: true,
                loopCount: Infinity
            });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="page-desc quicksand-regular">
            <span id="typing-elem" ref={el} />
        </div>
    );
}

export default App;
