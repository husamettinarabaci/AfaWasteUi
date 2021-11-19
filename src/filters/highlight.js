export default (word, query) => {
    var check = new RegExp(query, "ig");
    return word.toString().replace(check, function(matchedText,a,b){
        return ('<strong class="bg-primary highlighted-text">' + matchedText + '</strong>');
    });
}