import React from 'react'

const Stats = ({statsData}) => {
    return <section className="stats">
        <div class="stats-header">
            <h1>The world's<br/>biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            <img src={require("./img/logo.png")} alt="" className="stat-img"/>
        </div>
        <div class="stat-grids-container">
            {statsData.map(el=> <div class="stat-grids">
                    <img src={require(el.imgSrc+"")} alt="flag"/>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                </div>


            )}
        </div>

    </section>
}

export default Stats