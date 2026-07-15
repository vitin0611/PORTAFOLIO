// Líneas que se "escriben" en la terminal del hero.
// Edita este arreglo para cambiar tu nombre, rol y mensaje de bienvenida.
const heroLines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'name', text: 'Alex Ramírez' },
  { type: 'role', text: 'Estudiante de Seguridad Informática — ITLA' },
  { type: 'cmd', text: 'cat mision.txt' },
  { type: 'out', text: 'Aspirante a Pentester / Ethical Hacker.\nAprendiendo a romper sistemas para aprender a protegerlos.' },
];

const container = document.getElementById('hero-type');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderStatic(){
  container.innerHTML = '';
  heroLines.forEach(l => {
    const div = document.createElement('div');
    if(l.type === 'cmd'){
      div.className = 'line prompt';
      div.textContent = l.text;
    } else if(l.type === 'name'){
      div.className = 'hero-name';
      div.textContent = l.text;
    } else if(l.type === 'role'){
      div.className = 'hero-role';
      div.textContent = l.text;
    } else {
      div.className = 'line out dim';
      div.textContent = l.text;
    }
    container.appendChild(div);
  });
  const cur = document.createElement('span');
  cur.className = 'cursor';
  container.appendChild(cur);
}

async function typeLine(el, text, speed){
  for(let i=0;i<=text.length;i++){
    el.textContent = text.slice(0,i);
    await new Promise(r => setTimeout(r, speed));
  }
}

async function playSequence(){
  for(const l of heroLines){
    const div = document.createElement('div');
    if(l.type === 'cmd'){ div.className = 'line prompt'; }
    else if(l.type === 'name'){ div.className = 'hero-name'; }
    else if(l.type === 'role'){ div.className = 'hero-role'; }
    else { div.className = 'line out dim'; }
    container.appendChild(div);
    await typeLine(div, l.text, l.type === 'out' ? 8 : 28);
    await new Promise(r => setTimeout(r, 180));
  }
  const cur = document.createElement('span');
  cur.className = 'cursor';
  container.appendChild(cur);
}

if(reduceMotion){
  renderStatic();
} else {
  playSequence();
}

// Envío del formulario de contacto.
// Conecta esto a un servicio real (Formspree, EmailJS, etc.) cuando lo tengas listo.
function handleContactSubmit(){
  alert('Conecta este formulario a un servicio como Formspree o EmailJS para recibir mensajes reales.');
}
