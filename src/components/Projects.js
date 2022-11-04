import React from "react";


const style = {    
    card: {
        padding:' 10rem 0 0',
        maxWidth: '35ch',
        borderRadius: '1rem',
        overflow: 'hidden',
        transition: 'transform 500ms ease',
    },
}

export default function Projects(props) {
    return (
        <div style={style.card}class="card">
            <div class="card-content">
                <h2 class="card-title">Something Awesome</h2>
                <p class="cardbody">Lorem ipsum, dolor soluta a laudantium eveniet Lorem, ipsum dolor. provident fuga!</p>
                <a href="# " class="button">Learn More</a>
            </div>
        </div>
    )
}