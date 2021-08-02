//declare a function to check the url

function checkUrl(value) {
    console.log("::: Checking URL :::", value);
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    var regexp = new RegExp(expression);
    return regexp.test(value);
}

export { checkUrl }
