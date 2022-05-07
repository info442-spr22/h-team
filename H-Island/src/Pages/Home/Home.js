import React from 'react'
import styles from './Home.css'
import {Link} from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

export default function Home() {

    return (
      <div>
        <Nav/>
        <h3 className="text-align .col-md-3 .offset-md-3"> Mission and Explanation </h3>
        <div className="d-flex justify-content-md-center">
          <Link to="/survey">
            <button className="btn btn-secondary"> Start Survey</button>
          </Link>
        </div>
      </div>
    );
}
