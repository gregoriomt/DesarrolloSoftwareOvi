var ObjControlador = {
	onReady: function () {
        ObjControlador.FechaActual();
        ObjControlador.Accordion();
    },
    FechaActual: function () {
    	const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const d = new Date();
        var fechaCompleta = d.toLocaleDateString("es-ES", options);
    	$("#fechaActual").text(fechaCompleta);
    },
    Accordion: function(){
        var accordions = document.getElementsByClassName('accordion');

        for (var i = 0; i < accordions.length; i++){
            accordions[i].onclick = function () {
                this.classList.toggle('is-open');
                var content = this.nextElementSibling;

                if(content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        }
    }
}

$(function () {
    ObjControlador.onReady();
});
