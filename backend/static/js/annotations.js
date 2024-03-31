// Function to save annotations to local storage
function saveAnnotations() {
    var text = document.getElementById('annotationsTextarea').value;
    if (text) {
        // Get existing annotations from local storage or initialize as an empty array
        var existingAnnotations = localStorage.getItem('annotations');
        var annotationsArray = existingAnnotations ? JSON.parse(existingAnnotations) : [];

        // Add the new annotation to the array
        annotationsArray.push(text);

        // Save the updated annotations array back to local storage
        localStorage.setItem('annotations', JSON.stringify(annotationsArray));
    } else {
        alert('No text written!');
    }
    // Toggle green background for save button
    document.getElementById('saveButton').classList.add('green-background');
    document.getElementById('loadButton').classList.remove('green-background');
    document.getElementById('clearButton').classList.remove('green-background');
}

// Function to load annotations from local storage
function loadAnnotations() {
     // Retrieve the annotations from local storage
     var annotationsJSON = localStorage.getItem('annotations');
    
     // Check if annotations exist in local storage
     if (annotationsJSON) {
         // Parse the JSON string to convert it back to an array
         var annotationsArray = JSON.parse(annotationsJSON);
 
         // Join the array elements with newline characters to create a single string
         var annotationsText = annotationsArray.join('\n');
 
         // Set the textarea value to the loaded annotations
         document.getElementById('annotationsTextarea').value = annotationsText;
     } else {
         alert('No annotations found in local storage!');
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

