document.getElementById('upload-image').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
      document.getElementById('profile-image').src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  });
  