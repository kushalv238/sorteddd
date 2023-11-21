
// method to scroll to the top
// Call only when component is loaded
function scrollToTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

export default scrollToTop;