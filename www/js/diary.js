Diary = {
  save: function () {
    var title = $("#title").val();
    var message = $("#message").val();
    var pic = document.getElementById("imgPreview").src;

    var storage = window.localStorage;

    var entries = storage.getItem("entries");

    if (!entries) {
      entries = [];
    } else {
      entries = JSON.parse(entries);
    }

    entries.push({
      id: "entry-" + Date.now(), title: title, message: message, pic: pic
    })

    storage.setItem("entries", JSON.stringify(entries));

    window.plugins.toast.showLongBottom('Entrada creada!');

    window.location = "index.html";
  },
  onPhotoDataSuccess: function (imageData) {
    var smallImage = document.getElementById('imgPreview');
    smallImage.style.display = 'block';
    smallImage.src = "data:image/jpeg;base64," + imageData;
  },
  onFail: function (message) {
    alert('Failed because: ' + message);
  },
  addPic: function () {
    navigator.camera.getPicture(Diary.onPhotoDataSuccess, Diary.onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL, encodingType: Camera.EncodingType.JPEG });
  }
}
