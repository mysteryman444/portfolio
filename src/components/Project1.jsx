import './App.css';
import './bootstrap.css';
import './examples.css';
import "./fonts/Montserrat-VariableFont_wght.ttf"

function Project1() {
    return (

        <div className="App">
            <div class="container-fluid mainGrid">
                <img href="https://mysteryman444.github.io/responsiveRedesign/" class="img-fluid projectImages card" src={process.env.PUBLIC_URL + '/images/laddObservatory.png'} />
                <div class="text projectText">
                    <h1 >Ladd Observatory Redesign</h1>
                    <p></p>
                    <h3>Objective</h3>
                    <h5>&nbsp;&nbsp;Rebuild the outdated Brown University Ladd Observatory's website to reflect modern design strategies and address web accessibility concerns. </h5>
                    <p></p>
                    <h3>Take Aways</h3>
                    <ul class="text">
                        <li>Learned how to improve responsive websites</li>
                        <li>Experimented with web queries and adjusting content to various size screens</li>
                        <li>Developed skills in creating low and high-fidelity protypes using using Balsamiq and Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project1;