import './App.css';
import './bootstrap.css';
import './examples.css';
import "./fonts/Montserrat-VariableFont_wght.ttf"

function Project2() {
    return (

        <div className="App">
            <div class="container-fluid mainGrid">
                <img href="https://mysteryman444.github.io/responsiveRedesign/" class="img-fluid card" src={process.env.PUBLIC_URL + '/images/Poster_Presentation.png'} />
                <div class="text projectText">
                    <h1 >Surviving the Hot 100</h1>
                    <p></p>
                    <h3>Objective</h3>
                    <h4>&nbsp;&nbsp;Analyze how measurable trends in music have changed overtime for the songs making it on the Billboard Hot 100 list. Determine how the paradigm of mainstream, popular music is shifting using statistical tests and machine learning.</h4>
                    <p></p>
                    <h3>Take Aways</h3>

                </div>
            </div>
        </div>
    );
}

export default Project2;