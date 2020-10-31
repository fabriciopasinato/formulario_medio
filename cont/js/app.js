const urll = document.getElementById("url")
const url_din = document.getElementById("urldinamic")
const enlace_dinamic = document.getElementById("enlacedinamic")
const tvista = document.getElementById("tvista")
const urlvista = document.getElementById("urlvista")
const desvista = document.getElementById("desvista")
const fcampaña = document.getElementById("fcampaña")
const mcampaña = document.getElementById("mcampaña")
const ncampaña = document.getElementById("ncampaña")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
	e.preventDefault()
	let warnings = ""
	let entrar =false
	parrafo.innerHTML = ""
	if (urll.value.length <8) {
		warnings +='-URL no valida <br>'
		entrar = true
	}
	if (url_din.value.length <8) {
		warnings +='-URL de enlace profundo no valida <br>'
		entrar = true
	}
	if (enlace_dinamic.value.length <8) {
		warnings +='-Nombre de enlace dinámico no valido <br>'
		entrar = true
	}
	if (tvista.value.length <6) {
		warnings +='- Título de la vista previa no valido <br>'
		entrar = true
	}
	if (urlvista.value.length <8) {
		warnings +='-URL de la imagen de vista previa no valido <br>'
		entrar = true
	}
	if (desvista.value.length <8) {
		warnings +='-Descripcion de la vista previa no valido <br>'
		entrar = true
	}
	if (fcampaña.value.length <6) {
		warnings +='-Fuente de Campaña no valido <br>'
		entrar = true
	}
	if (mcampaña.value.length <6) {
		warnings +='-Medio de Campaña no valido <br>'
		entrar = true
	}
	if (ncampaña.value.length <6) {
		warnings +='-Nombre de Campaña no valido <br>'
		entrar = true
	}
	if (entrar) {
		parrafo.innerHTML = warnings
	}else{
		parrafo.innerHTML = "ENVIADO"
	}
})