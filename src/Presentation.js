import React from 'react'

const Presentation = ({presentationData}) =>{
    console.log(presentationData.logoSrc)
    return <section class="presentation">
            <img src={require(presentationData.logoSrc+"") } alt="" style={{display: "block", margin: "10px auto"}}/>
            {/* <img src={require ("./img/sygnet.png")} alt="" style={{display: "block", margin: "10px auto"}}/> */}
            <h1 style={{textAlign: "center", margin: "30px 0", fontSize: "2.125rem"}}>{presentationData.title}</h1>
            <div className="presentation-grid">
                {presentationData.paragraph.map(el=><p className="grid-content"> {el} </p>)}
            </div>
        </section>
}

export default Presentation