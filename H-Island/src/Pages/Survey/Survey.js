import React from 'react'
import './Survey.css'
import {Link} from "react-router-dom";

export default function Survey() {

    return (
      <div>
        <h2> This is Survey Page </h2>
        <div>
        <Link to="/result" className="col-6" style={{     display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none'}}>
              <button className="btn" id="survey-button" > See your Result</button>
            </Link>
            </div>
      </div>
    );
}
