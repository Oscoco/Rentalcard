const toggleBtn = document.querySelector(
	'[data-drawer-toggle="cta-button-sidebar"]'
);
const sidebar = document.getElementById("cta-button-sidebar");

// cierra y abre el sidebar
toggleBtn.addEventListener("click", () => {
	sidebar.classList.toggle("-translate-x-full");
});

// Cerrar el sidebar al hacer clic fuera
document.addEventListener("click", (event) => {
	const isClickInside =
		sidebar.contains(event.target) || toggleBtn.contains(event.target);

	if (!isClickInside && !sidebar.classList.contains("-translate-x-full")) {
		sidebar.classList.add("-translate-x-full");
	}
});
