var ObjControlador = {
	onReady: function () {
		ObjControlador.FechaActual();
    },
    FechaActual: function () {
    	const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const d = new Date();
        var fechaCompleta = d.toLocaleDateString("es-ES", options);
    	$("#fechaActual").text(fechaCompleta);
    }
}

$(function () {
    ObjControlador.onReady();
});