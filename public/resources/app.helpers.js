function handleUploadClick(event) {
    var localFileName = document.getElementById("selectImage").value;
    Module.loadLocalFile(localFileName);
}