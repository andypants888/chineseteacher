
	const toggleButton = document.getElementsByClassName('toggle-button')[0]
	// is toggleButton an obj, var, or array?
	const navbarLinks = document.getElementsByClassName('navbar-links')[0]

	toggleButton.addEventListener('click', () => {
		navbarLinks.classList.toggle('active')
	});
