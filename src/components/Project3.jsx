import './App.css';
import './bootstrap.css';
import './examples.css';
import "./fonts/Montserrat-VariableFont_wght.ttf"

function Project3() {
    return (

            <div className="App">
                <div class="container-fluid mainGrid">
                    <img href="https://mysteryman444.github.io/responsiveRedesign/" class="img-fluid projectImages card" src={process.env.PUBLIC_URL + '/images/bakerySimulator.png'}/>
                    <div class="text projectText">
                        <h1 >Bakery Simulator</h1>
                        <p></p>
                        <h3>Objective</h3>
                        <h4>&nbsp;&nbsp;</h4>

                        <h3>Take Aways</h3>
                    </div>
                </div>
            </div>
    );
}

export default Project3;