const chat = document.getElementById('chat-box');
const stat = document.getElementById('status-box');
const calls = document.getElementById('calls-box');

const chatContainer = document.getElementById('chat-container');
const statusContainer = document.getElementById('status-container');
const callsContainer = document.getElementById('calls-container');

const navBar = document.getElementById('nav-bar');
const chatPage = document.getElementById('chat-page');
const backBtn = document.getElementById('back');
const message = document.querySelectorAll('.chat-box');
const statusPage=document.getElementById('status-page');
const statusBox=document.querySelectorAll('.status');
const back=document.getElementById('backbtn');
const community=document.getElementById('community');
const communityPage=document.getElementById('community-page');



// fuction

stat.onclick = ()=>{
   stat.classList.add('show');
   calls.classList.remove('show');
   chat.classList.remove('show');
   chatPage.style.display='none';
   chatContainer.style.display='none';
   statusContainer.style.display='block';
   callsContainer.style.display="none";
}

calls.onclick = ()=>{
    calls.classList.add('show');
    chat.classList.remove('show')
    stat.classList.remove('show');

    chatContainer.style.display='none';
   statusContainer.style.display='none';
   callsContainer.style.display="block";
   community.classList.remove('show');

}
chat.onclick = ()=>{
    chat.classList.add('show');
    calls.classList.remove('show');
    stat.classList.remove('show');
    community.classList.remove('show');

    chatContainer.style.display='block';
   statusContainer.style.display='none';
   callsContainer.style.display="none";
}
community.onclick=()=>{
    chat.classList.remove('show');
    calls.classList.remove('show');
    stat.classList.remove('show');
    community.classList.add('show')
   chatContainer.style.display='none';
   statusContainer.style.display='none';
   callsContainer.style.display="none";
   community.style.display="block";
   chatPage.style.display="none";


}
backBtn.onclick = ()=>{
    navBar.style.display="block";
    chatContainer.style.display = "block";
    chatPage.style.display = "none";
    statusPage.style.display="none";
}
back.onclick =()=>{
    navBar.style.display="block";
    chatContainer.style.display = "block";
    chatPage.style.display = "none";
    statusPage.style.display="none";
}




// Action

message.forEach((msg)=>{

    msg.addEventListener('click', ()=>{
        
        chatContainer.style.display='none';
        statusContainer.style.display='none';
        callsContainer.style.display="none";
        navBar.style.display = "none";

        chatPage.style.display = "block"



    } )
})
statusBox.forEach((story)=>{
    story.addEventListener('click',()=>{
        chatContainer.style.display='none';
        statusContainer.style.display='none';
        callsContainer.style.display="none";
        navBar.style.display = "none";

        chatPage.style.display = "none"
        statusPage.style.display="block";

      
    })
})