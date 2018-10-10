
    var wordEntry = prompt('whisper, Talk, or SHOUT!')

    function tone(){
        if (wordEntry.toLowerCase() == wordEntry) {
            return 'Speak up, you are whispering!'         
        } else if (wordEntry.toUpperCase() == wordEntry) {
            return 'Shhhh, you are shouting'
        } else {
            return 'You are talking normally'
        } 
    }
    console.log(tone())