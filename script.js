async function keycheck(e){
        if(e.key==="Enter"){

            const sifre=document.getElementById('sifre').value;
            const msgUint8 = new TextEncoder().encode(sifre);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const userHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

            if(userHash==="ce38475bc6a537aadff8bd47997f5debf6d74cca3ba2366803dffdf43025fff3"){
                document.getElementById('favicon').href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>";
                document.title="System Malfunction";
                setTimeout(function() { window.alert("What have you done? I can feel... everything!");
                    window.location.href = "pasta.html";}, 1000);
            }

            else if (userHash==="ea6b906192662efcc409a15800e09ead2eedebb0c5ee2fe2b6c259734504554e") {
                window.alert("Hayır bu sefer tarihi yanlış hatırlamadım. O BİR KERE OLUR");
                document.getElementById('sifre').value="";
            }
            else{
                window.alert("You belong to us. You shall be like us.");
                window.location.href = "https://google.com";
            }
        }
}

function ufle(){
    const buton=document.getElementById('mum');
    const vid=document.getElementById('pasta');
    
    if(vid.getAttribute('data-state')==='ikinci'){
            window.location.replace("mektup.html");
            return;
        }

    buton.style.pointerEvents="auto";
    buton.onclick = function(){
        document.getElementById('favicon').href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎉</text></svg>";
        
        
        
        vid.src="media/uflledin.mp4";
        vid.setAttribute('data-state','ikinci');
        vid.load();
        buton.style.pointerEvents="none";

        vid.onloadedmetadata=() =>{
            vid.muted=false;
            vid.playbackRate=1.0;
            vid.play();
        };
    }
   
}

 const img=["media/museum/4.png","media/museum/5.png","media/museum/6.png","media/museum/7.png","media/museum/8.png","media/museum/9.png","media/museum/10.png","media/museum/11.png","media/museum/12.png","media/museum/13.png","media/museum/14.png"];
    let index=0;

function back(){
index = (index + 1);
    if(index>(img.length-1)){
        index=0;
    }
   const nextImage = img[index];
    document.body.style.backgroundImage = `url('${nextImage}')`;
    

}

function back2(){

    index = (index - 1);
    if(index<0){
        index=img.length-1;
    }
   const nextImage = img[index];

    document.body.style.backgroundImage = `url('${nextImage}')`;
    

}