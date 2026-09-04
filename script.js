const opening=document.getElementById("opening");
const main=document.getElementById("mainContent");
const openBtn=document.getElementById("openInvitation");
const music=document.getElementById("music");
const musicToggle=document.getElementById("musicToggle");

document.body.classList.add("locked");

openBtn.addEventListener("click",()=>{
  opening.style.opacity="0";
  opening.style.transition="opacity .7s ease";
  setTimeout(()=>{
    opening.style.display="none";
    main.classList.remove("hidden");
    musicToggle.style.display="block";
    document.body.classList.remove("locked");
    music.play().catch(()=>{});
    revealAll();
  },700);
});

musicToggle.addEventListener("click",()=>{
  if(music.paused){
    music.play().catch(()=>{});
    musicToggle.textContent="♫";
  }else{
    music.pause();
    musicToggle.textContent="Ⅱ";
  }
});

const weddingDate=new Date("2026-09-13T09:00:00+07:00").getTime();
function updateCountdown(){
  const now=Date.now();
  const distance=weddingDate-now;
  if(distance<=0){
    ["days","hours","minutes","seconds"].forEach(id=>document.getElementById(id).textContent="00");
    return;
  }
  const d=Math.floor(distance/86400000);
  const h=Math.floor((distance/3600000)%24);
  const m=Math.floor((distance/60000)%60);
  const s=Math.floor((distance/1000)%60);
  document.getElementById("days").textContent=String(d).padStart(2,"0");
  document.getElementById("hours").textContent=String(h).padStart(2,"0");
  document.getElementById("minutes").textContent=String(m).padStart(2,"0");
  document.getElementById("seconds").textContent=String(s).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

function revealAll(){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add("visible");
    });
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}
function revealAllFallback(){
  document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));
}

document.querySelectorAll("[data-copy]").forEach(btn=>{
  btn.addEventListener("click",async()=>{
    const value=btn.dataset.copy;
    try{
      await navigator.clipboard.writeText(value);
      const old=btn.textContent;
      btn.textContent="TERSALIN ✓";
      setTimeout(()=>btn.textContent=old,1600);
    }catch(e){
      alert("Nomor: "+value);
    }
  });
});

document.getElementById("rsvpForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("rsvpName").value.trim();
  const attendance=document.getElementById("attendance").value;
  const message=document.getElementById("message").value.trim();
  const status=document.getElementById("rsvpStatus");
  const text=`Halo, saya ${name}. Konfirmasi kehadiran: ${attendance}.${message?` Ucapan: ${message}`:""}`;
  const phone="6285713028450";
  status.innerHTML=`Konfirmasi siap dikirim. <a href="https://wa.me/${phone}?text=${encodeURIComponent(text)}" target="_blank" rel="noopener">Klik di sini untuk WhatsApp</a>`;
});

const guestMessages=document.getElementById("guestMessages");
const saved=JSON.parse(localStorage.getItem("guestMessages")||"[]");
function renderMessages(){
  guestMessages.innerHTML=saved.slice().reverse().map(x=>`<article class="message-card"><strong>${escapeHtml(x.name)}</strong><p>${escapeHtml(x.message)}</p></article>`).join("");
}
function escapeHtml(str){
  return str.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
document.getElementById("guestbookForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("guestNameInput").value.trim();
  const message=document.getElementById("guestMessage").value.trim();
  saved.push({name,message});
  localStorage.setItem("guestMessages",JSON.stringify(saved));
  e.target.reset();
  renderMessages();
});
renderMessages();
