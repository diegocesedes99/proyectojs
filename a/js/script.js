//
// JS2 Project template.
//
const formulario=document.getElementById('formulario');
const listaformulario=document.getElementById('list');
const items=[];
function addinfo(nombreitem, correoitem, telefonoitem, baseitem, mensajeitem){
    const infoitems={
        nombre: nombreitem,
        correo: correoitem,
        telefono: telefonoitem,
        base: baseitem,
        mensaje: mensajeitem,
    };
    function appenditemdom() {
        const item=document.createElement('ul');
        item.className='items-lista-info';

        const itemNombre=document.createElement('li');
        itemNombre.innerHTML=`${infoitems.nombre}`;
        item.appendChild(itemNombre);
        
        const itemCorreo=document.createElement('li');
        itemCorreo.innerHTML=`${infoitems.correo}`;
        item.appendChild(itemCorreo);

        const itemTelefono=document.createElement('li');
        itemTelefono.innerHTML=`${infoitemstelefono}`;
        item.appendChild(itemTelefono);

        const itemBase=document.createElement('li');
        itemBase.innerHTML=`${infoitems.base}`;
        item.appendChild(itemBase);

        const itemMensaje=document.createElement('li');
        itemMensaje.innerHTML=`${infoitems.mensaje}`;
        item.appendChild(itemMensaje);

        listaformulario.appendChild(item);
    }
    items.push(infoitems);
    const fetchoptions={
        method: 'Post',
        body: JSON.stringify(infoitems),
    };
    fetch('https://js2-contact-form-api.netlify.app/api/contact', fetchoptions)
    .then((response)=>response.json())
    .then((data)=>{
        appenditemdom();
        console.log(data);
    });}
formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    addinfo(formulario.elements[0].value,formulario.elements[1].value,formulario.elements[2].value,formulario.elements[3].value,formulario.elements[4].value,formulario.elements[5].value.false);
    formulario.elements[0].value='';
    formulario.elements[1].value='';
    formulario.elements[2].value='';
    formulario.elements[3].value='';
    formulario.elements[4].value='';
    formulario.elements[5].value='';
})