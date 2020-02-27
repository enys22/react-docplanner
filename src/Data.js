import React from 'react';
import image from './img/sygnet.png'


// const svgNavLogo = (<svg width="263" height="33" viewBox="0 0 3563 417" xmlns="http://www.w3.org/2000/svg">
// <path class="p2" d="M2342 140h39.51l3.234 32.202h.41c10.096-14.742 34.692-33.622 63.347-35.202v42c-41.727 8.152-60.88 35.822-60.88 60.93V340H2342V140zm-210 100.615v-.82c0-61.51 29.935-105.795 91.854-105.795 57.408 0 84.062 33.215 84.062 102.925 0 7.38-.52 17.57-1.313 25.075h-126.745c3.274 28.172 19.693 45 53.394 45 21.323 0 41.358-1.995 59.928-4.426v38.204c-20.865 3.273-38.57 5.222-61.123 5.222C2166.445 346 2132 313.195 2132 240.615zM2179.156 228h82.422c0-31.294-8.2-56-38.955-56-31.984 0-42.646 26.353-43.467 56zM1923 140h39.707s1.84 19.854 2.652 27h.537c10.998-17.24 34.09-33 62.018-33 47.172 0 70.582 25.12 70.582 76.068V340h-45.62V219.47c0-32.522-12.52-45.262-37.114-43.53-22.288 1.57-47.142 27.032-47.142 58.875V340H1923V140zm-215 0h39.707s1.84 19.854 2.652 27h.537c10.998-17.24 34.09-33 62.018-33 47.172 0 70.582 25.12 70.582 76.068V340h-45.62V219.47c0-32.522-12.52-45.262-37.114-43.53-22.288 1.57-47.142 27.032-47.142 58.875V340H1708V140zm-179.718-3.87c19.82-1.64 41.32-2.13 62.083-2.13 48.91 0 78.09 18.906 78.09 72.336V340h-41.02l-2.038-20.007h-.533c-14.067 15.157-34.5 24.007-60.666 24.007-34.658 0-62.198-22.447-62.198-66.93 0-41.37 34.497-79.893 120.834-61.57v-12.04c0-23.84-13.975-30.5-41.512-30.5-16.903 0-31.237 1.145-53.04 3.01v-39.84zm94.552 111.018c-36.58-9.306-73.158 2.127-73.158 30.4 0 18.754 12.446 29.773 31.003 28.948 14.625-.65 30.725-7.14 42.154-17.263v-42.085zM1467.62 60v280H1422V65.29l45.62-5.29zM1206 140h38.534l2.48 21.66h.734c13.378-16.183 35.768-27.66 61.606-27.66 51.27 0 78.748 38.143 78.748 102.945v2.05c0 62.343-27.48 107.05-84.9 107.05-20.097 0-39.783-7.794-51.678-16.816V417H1206V140zm45.525 58.572v92.103c9.434 7.382 24.61 13.944 39.374 13.944 38.553 0 49.627-29.94 49.627-65.214 0-31.99-6.152-62.998-43.476-62.998-18.044 0-35.492 10.615-45.525 22.164zM1066.68 240c.126 43.695 19.053 67 56.734 67 15.92 0 32.102-1.976 46.79-3.95V340c-12.063 2.416-32.054 5-52.564 5-56.193 0-98.47-30.93-98.64-105 .17-74.07 42.446-105 98.64-105 20.51 0 40.5 2.583 52.563 5v36.95c-14.688-1.974-30.87-3.95-46.79-3.95-37.68 0-56.607 23.304-56.733 67zM802 241.025v-2.05C802 172.134 832.754 134 896.313 134c63.148 0 93.903 38.135 93.903 104.975v2.05c0 66.84-30.755 104.976-93.903 104.976C832.753 346 802 307.866 802 241.026zM896.207 172c-32.3 0-47.207 21.916-47.207 67.704S863.907 307 896.207 307 943 285.56 943 239.704 928.507 172 896.207 172zM560 340V60h70.326c97.996 0 143.6 29.43 143.6 140s-45.603 140-143.6 140H560zm161.547-140c0-62.95-12.776-94.718-80.31-94.718h-31.302V294.72h31.302c67.534 0 80.31-31.77 80.31-94.72zM232.932 323.285c10.11-24.788 38.553-59.475 67.565-77.37l64.236 106.28L298.938 400l-66.006-76.715zm-94.887 76.6l-90.568-58.252c68.57-128.172 196.7-219.447 347.3-236.452L420 182.885c-124.13 24.45-227.718 106.386-281.955 217zM157.81 136.08L169.257 0h81.356l10.336 123.062c-46.68 16.01-74.133 28.8-105.586 48.135-23.22 14.24-44.337 30.902-63.23 50.012L0 182.313l25.114-77.48L157.81 136.08z" fill="#00C3A5"></path>
// <path class="p1" d="M2837 140h39.51l3.234 32.202h.41c10.096-14.742 34.692-33.622 63.347-35.202v42c-41.727 8.152-60.88 35.822-60.88 60.93V340H2837V140zm646.313-6c-25.84 0-48.23 11.477-61.607 27.66h-.734l-2.48-21.66h-38.534v277h45.526v-87.77c11.894 9.02 31.58 16.814 51.678 16.814 57.42 0 84.9-44.706 84.9-107.048v-2.05c0-64.803-27.48-102.946-78.75-102.946zm-18.456 170.62c-14.766 0-29.94-6.563-39.374-13.945v-92.103c10.03-11.55 27.48-22.164 45.525-22.164 37.323 0 43.476 31.008 43.476 62.998 0 35.274-11.074 65.213-49.627 65.213zM3051.313 134c-63.56 0-94.313 38.135-94.313 104.975v2.05c0 66.84 30.754 104.976 94.313 104.976 63.148 0 93.903-38.134 93.903-104.974v-2.05c0-66.84-30.754-104.976-93.903-104.976zm-.106 173c-32.3 0-47.207-21.508-47.207-67.296S3018.907 172 3051.207 172 3098 193.85 3098 239.704 3083.507 307 3051.207 307zM2745 300.067V231h-45v-42h93v149.082c-17.3 3.1-57.795 7.918-86.997 7.918-84.806 0-136.78-48.595-137.004-146 .223-97.405 52.21-146 137.002-146 29.202 0 67.033 4.424 82.997 6.952v43.38c-20.527-2.42-56.863-5.492-78.973-5.492-58.98 0-89.64 37.11-89.826 101.16.187 64.05 30.935 101.16 89.828 101.16 8.636 0 24.7-.42 34.972-1.093zM3261.716 307c23.643 0 39.387-8.563 39.387-51.74V140h45.51l.104 108.113c0 69.004-24.732 97.887-85 97.887s-85-28.883-85-97.887L3176.82 140h45.51v115.26c0 43.177 15.743 51.74 39.386 51.74z" fill="#ababab"></path>
// </svg>);

export const menuitems = [
                {title:"About us",link:"#"},
                {title:"Career",link:"#"},
                {title:"Departments",link:"#",dropdown:[
                    {title:"Marketing & PR",link:"#"},
                    {title:"Customer Success & Sales",link:"#"},
                    {title:"IT, Product, Design & UX",link:"#"},
                    {title:"Finance & Administration",link:"#"},
                    {title:"HR & more",link:"#"}]
                }
    ];

export const presentationData = {
    logoSrc : "./img/sygnet.png",
    logo:image ,
    title:"Making the healthcare experience more human",
    paragraph:[
        "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
        "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
    ]
}
export const coloredCardData = [
    { 
        destination : "For patients",
        title: "Find a doctor, book a visit and solve any health-related doubt",
        imgSrc : "./img/screen-marketplace@2x.png",
        color :"#00ccb1",
        options : [
            {option:"http://www.doctoraliar.com",
            value:"Argentina"},
            {option:"http://www.doctoralia.com.au",
            value:"Australia"},
            {option:"http://www.doctoralia.com.br",
            value:"Brazil"},
            {option:"http://www.doctoralia.cl",
            value:"Chile"},
            {option:"http://www.doctoralia.co",
            value:"Colombia"},
            {option:"http://www.znamylekar.cz",
            value:"Czech"},
            {option:"http://www.doctoralia-fr.com",
            value:"France"},
            {option:"http://www.miodottore.it",
            value:"Italy"},
            {option:"http://www.doctoralia.com.mx",
            value:"Mexico"},
            {option:"http://www.doctoralia.pe",
            value:"Peru"},
            {option:"http://www.znanylekarz.pl",
            value:"Poland"},
            {option:"http://www.doctoralia.com.pt",
            value:"Portugal"},
            {option:"http://www.doctoralia.es",
            value:"Spain"},
            {option:"http://www.doktortakvimi.com",
            value:"Turkey"},
            {option:"http://www.doctoralia.co.uk",
            value:"UK"}
        ]
    },
    {
        destination : "For patients",
        title : "Find a doctor, book a visit and solve any health-related doubt",
        imgSrc : "./img/screen-saas@2x.png",
        color :"#3d83df"
    }
]

export const statsData=[
    {imgSrc : "./img/flag.png",
    title : "Leader in 10 countries",
    description : "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"    
    },
    {imgSrc : "./img/visits.png",
    title : "1.5 million appointments",
    description : "booked last month"    
    },
    {imgSrc : "./img/patients.png",
    title : "30 million unique patients",
    description : "visit us every month"    
    },
    {imgSrc : "./img/doctors.png",
    title : "2 million active doctors",
    description : "trust in our solutions"    
    }
]

export const officeData=[
    {imageSrc : "./img/istanbul.png",
    country :"Istanbul",
    link :"#"},
    {imageSrc : "./img/rome.png",
    country :"Rome",
    link :"#"},
    {imageSrc : "./img/mexico-city.png",
    country :"Mexico City",
    link :"#"},
    {imageSrc : "./img/curitiba.png",
    country :"Curitiba",
    link :"#"},
    {imageSrc : "./img/warsaw.png",
    country :"Warsaw",
    link :"#"},
    {imageSrc : "./img/barcelona.png",
    country :"Barcelona",
    link :"#"}
]