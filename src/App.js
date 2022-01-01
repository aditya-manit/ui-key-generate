import './App.css';
import fetch from 'node-fetch';
import React, {useState, useEffect} from 'react';
let settings = {method: "Get"};




function App() {

    const button = document.getElementById('button');
    const load = async () => {
                console.log('Calculating...');
        if (button)
                button.classList.add('loading');
        await computeResults()
    }

    const computeResults = async () => {


        if (button)
            button.classList.remove('loading');

        await fetch("http://localhost:8084/get", settings)
            .then(res => res.json())
            .then(async (json) => {
                document.getElementById("address").innerHTML = json.address

                for (let i = 1; i< 25; i++) {
                    let id = "word" + i;
                    document.getElementById(id).innerHTML = i + ". " +json.mnemonic[i-1]

                }
            })
            .catch(err => {
                console.log(err)
            });

        if (button)
        button.classList.remove('loading');

    }


    return (
        <body>
        <section className="section">
            <div className="container">
                <div className="content">
                    <h1> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   ⭐ <u> Generate Your Evmos Address </u> ⭐  </h1>
                </div>
                <div className="columns">
                    <div className="column is-three-quarters">
                        <div className="card">
                            <div className="card-content">
                                <center>
                                <form id="loan-form">
                                    <div id="my-button" className="control">
                                        <button id="button"
                                                className="button is-large is-fullwidth is-primary is-outlined"
                                                type={"button"} onClick={load}
                                        >
                                        </button>
                                    </div>
                                    <div>
                                           &nbsp;
                                    </div>
                                    <div className="is-12-tablet is-6-desktop is-3-widescreen">
                                        <div className="notification is-link has-text">
                                            <p id="address" className="subtitle is-4"></p>
                                        </div>
                                    </div>
                                </form>

                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*// <!-- RESULTS -->*/}
        <section className="section">
            <h1 className="title ">Mnemonic</h1>
            <div className="columns is-multiline">
                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word1" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word2" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word3" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word4" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word5" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word6" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word7" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word8" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word9" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word10" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word11" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word12" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word13" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word14" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word15" className="subtitle is-4"></p>
                    </div>
                </div>
                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word16" className="subtitle is-4"></p>
                    </div>
                </div>
                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word17" className="subtitle is-4"></p>
                    </div>
                </div>
                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word18" className="subtitle is-4"></p>
                    </div>
                </div>
                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word19" className="subtitle is-4"></p>
                    </div>
                </div>
                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word20" className="subtitle is-4"></p>
                    </div>
                </div>
                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word21" className="subtitle is-4"></p>
                    </div>
                </div>

                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word22" className="subtitle is-4"></p>
                    </div>
                </div>
                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word23" className="subtitle is-4"></p>
                    </div>
                </div>
                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                    <div className="notification is-primary has-text">
                        <p  id="word24" className="subtitle is-4"></p>
                    </div>
                </div>



            </div>

        </section>



        </body>
    );
}

export default App;
