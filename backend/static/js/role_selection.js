function roleSelected(role) {
    sessionStorage.setItem('userRole', role);
    window.location.href = '/dashboard'; // Redirect to the dashboard page
}