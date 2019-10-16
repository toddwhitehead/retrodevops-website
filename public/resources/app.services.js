function getAvailableDiskImages() {
  var jsonFile = "uploads/fileList.json?v=1";

  $.getJSON(jsonFile, function (data) {
    responseToSelectList(data);
    console.log("Loaded file list")
  });
}

// convert the file list reponse to a pulldown
function responseToSelectList(diskImages) {

  var items = [];
  var myTemplate = "<option value='{{fileName}}'>{{displayName}}</option>";

  // Clear the pulldown to prevent duplicates
  $("#selectImage").empty();
  
  $.each(diskImages, function (i, item) {
    var thisItem = myTemplate.replace("{{fileName}}", item.fileName)
        .replace("{{displayName}}", item.displayName);
    items.push(thisItem);
  });

  // Add the list of items to the select
  $("#selectImage").append(items.join(''));

}
