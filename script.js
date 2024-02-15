const container = document.querySelector('.container')
const list = document.getElementById('list')
const WelcomeText = 'Welcome to my mini Project.'
let textIndex = 0 ;
const item = [{
    photo: './photo/jokes png.png',
    projectName: 'Random Joke Generator',
    sourceCode: 'https://github.com/mukeshwebdp/random-joke-generator.git',
    link: 'https://mukeshwebdp.github.io/random-joke-generator/'
},
{
    photo: './photo/random-color-Generator.png',
    projectName: 'Random color generator',
    sourceCode: 'https://github.com/mukeshwebdp/random-color-generator.git',
    link: 'https://mukeshwebdp.github.io/random-color-generator/'
},{
    photo: './photo/Typing-text-Effect.png',
    projectName: 'Typing Text Effect',
    sourceCode: 'https://github.com/mukeshwebdp/Typing-text-Effect.git',
    link: 'https://mukeshwebdp.github.io/Typing-text-Effect/'
},{
    photo: './photo/Loading-page.png',
    projectName: ' Loading Page',
    sourceCode: 'https://github.com/mukeshwebdp/Typing-text-Effect.git',
    link: 'https://mukeshwebdp.github.io/loading-page/'
},{
    photo: './photo/progress-staps.png',
    projectName: 'Progress Staps',
    sourceCode: 'https://github.com/mukeshwebdp/progress-steps-mini-project.git',
    link: 'https://mukeshwebdp.github.io/progress-steps-mini-project/'
},{
    photo: './photo/Expending-Effect.png',
    projectName: 'Expending Effect',
    sourceCode: 'https://github.com/mukeshwebdp/expending-effect-mini-project.git',
    link: 'https://mukeshwebdp.github.io/expending-effect-mini-project/'
},{
    photo: './photo/Key Identifier.png',
    projectName: 'Key Identifier',
    sourceCode: 'https://github.com/mukeshwebdp/key-find-out.git',
    link: 'https://mukeshwebdp.github.io/key-find-out/'
},{
    photo: './photo/stop-watch.png',
    projectName: 'Stopwatch',
    sourceCode: 'https://github.com/mukeshwebdp/Stopwatch-mini-project.git',
    link: 'https://mukeshwebdp.github.io/Stopwatch-mini-project/'
},{
    photo: './photo/BMI-Calculator.png',
    projectName: 'BMI Calculator',
    sourceCode: 'https://github.com/mukeshwebdp/BMI-mini-project.git',
    link:'https://mukeshwebdp.github.io/BMI-mini-project/'
}

]
// create box
item.forEach(()=>{
    const box = document.createElement('div')
    container.appendChild(box);
    box.classList.add('box');
    
})

const boxNumber = document.querySelectorAll('.box')
console.log(` hello  : ${boxNumber.length}`);

//  data write in box

item.forEach((item,index)=>{
    const img = document.createElement('img')
    const p = document.createElement('p')
    const source = document.createElement('a')
    const link = document.createElement('a')
    const data = item
    // console.log(data.text);    

    boxNumber[index].appendChild(img)
    img.src = `${data.photo}`; // image 

    boxNumber[index].appendChild(p)
    p.textContent = data.projectName; // project name
    p.classList.add('ProText');
    boxNumber[index].appendChild(source)
    source.href =`${data.sourceCode}`; // source code link
    source.target = '_blank'
    source.innerText = `Source Code`; // inner text
    source.classList.add('pbtn');
    boxNumber[index].appendChild(link)
    link.href = `${data.link}`; // host link
    link.target ='_blank'
    link.classList.add('pbtn');
    link.innerText = `Link`
})

// nav bar text writen effect

const textWriter = ()=>{
    let newTitle = WelcomeText.slice(0,textIndex);
    list.innerText = newTitle;
    textIndex++
    if(textIndex > WelcomeText.length){
        // 3 second hold text
        setTimeout(() => {
            textIndex = 0;
        }, 3000);
    }

    setTimeout(() => {
        textWriter();
    }, 300);
} 
textWriter();

// start show sidebar nav

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}