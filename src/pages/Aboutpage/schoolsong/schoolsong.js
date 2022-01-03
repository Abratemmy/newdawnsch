import React from 'react';
import Otherpage from '../../../components/otherpage/Otherpage';
import "./schoolsong.css";
import schsong from "../../../images/schsong.JPG";

function Schoolsong() {
    return (
        <div className="school-song">
            <Otherpage title="School song" subtitle="school song" />

            <div className="container">
                <div className="school-songpage">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-11">
                            <div className="song-image">
                                <img src={schsong} alt="schsong" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-8 col-sm-11">
                            <div className="sch-song">
                                <div className="schoolsong">School song</div>
                                <div className="schoolanthem">
                                    New Dawn School <br/>
                                    Private School <br />
                                    We Shall be Faithful and Honest <br />
                                    In God Grace, we shall prosper <br />
                                    And be lifted,upon high.
                                </div>

                                <div className="school-song-audio">
                                    <audio controls>
                                        <source src="" type="audio/mpeg" />
                                    </audio>
                                </div>

                                <div className="schoolsong">School Pledge</div>
                                <div className="schoolanthem">
                                    I pledge to Newdawn College <br />
                                    To be faithful loyal and honest<br />
                                    To be hard working,diligent and prayerful<br />
                                    And lift up the name of my school <br />
                                    Anywhere I found myself.<br />
                                    So help me God.Amen
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schoolsong
