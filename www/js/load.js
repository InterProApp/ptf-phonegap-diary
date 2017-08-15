var storage = window.localStorage;
var entries = storage.getItem("entries");

if (!entries) {
  document.getElementById("all-entries").innerHTML = '<div class="alert alert-info" role="alert"> No hay entradas </div>';
} else {
  entries = JSON.parse(entries);

  for (var i = 0; i < entries.length; i++) {
    var tpl = $("#entry-tpl").html();
    var entry = entries[i];

    tpl = tpl.replace("TITLE", entry.title).replace("MESSAGE", entry.message).replace("IMAGE", entry.pic);

    $("#all-entries").append(tpl);
  }
}
