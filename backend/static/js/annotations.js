// Function to save annotations to local storage
function saveAnnotations() {
    var text = document.getElementById('annotationsTextarea').value;
    if (text)
        localStorage.setItem('annotation', text);
    else    
        alert('No text written!');
    // Toggle green background for save button
    document.getElementById('saveButton').classList.add('green-background');
    document.getElementById('loadButton').classList.remove('green-background');
    document.getElementById('clearButton').classList.remove('green-background');
}

// Function to load annotations from local storage
function loadAnnotations() {
    var text = localStorage.getItem('annotation');
    if (text) {
        document.getElementById('annotationsTextarea').value = text;
    } else {
        alert('No text found in local storage!');
    }
    document.getElementById('saveButton').classList.remove('green-background');
    document.getElementById('loadButton').classList.add('green-background');
    document.getElementById('clearButton').classList.remove('green-background');
}

function clearAnnotations(){
    document.getElementById('annotationsTextarea').value = '';
    document.getElementById('saveButton').classList.remove('green-background');
    document.getElementById('loadButton').classList.remove('green-background');
    document.getElementById('clearButton').classList.add('green-background');
}

document.addEventListener('DOMContentLoaded', function() {
    var role = sessionStorage.getItem('userRole');
    document.getElementById('annotationsDiv').style.display = 'block';
    if (role === 'official') {
        document.getElementById('annotationsTextarea').readOnly = true;
        document.getElementById('saveButton').style.display = 'none';
        document.getElementById('clearButton').style.display = 'none';
    }
});

