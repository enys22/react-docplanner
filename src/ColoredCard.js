import React from 'react'

const ColoredCard = ({coloredCardData}) =>{
    return <section class="colored-grid-container">
        {coloredCardData.map(el =>
            <div className="colored-grid patients" style={{backgroundColor: el.color}}>
                <h2>{el.destination}</h2>
                <h1>{el.title}</h1>
                {!el.options ? <img src={require(el.imgSrc+"")} className="colored-grid-img" style={{marginTop: "-2em"}}></img> :
                <div> 
                    <select className="domain-switcher"> 
                        <option>Choose country</option> 
                        {el.options.map(op=> <option value={op.option}>{op.value}</option> )} 
                    </select>
                    <img src={require(el.imgSrc+"")} className="colored-grid-img" style={{marginTop: "-2em"}}></img> 
                </div>
                
                }
            </div>
            )}
    
    </section>
}

export default ColoredCard