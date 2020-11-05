function tinyFriend(friendName) {
    var minIndex = friendName[0];

    for (var i = 0; i < friendName.length; i++) {
        var element = friendName[i];

        var newName = friendName[i].length;
        
        if (newName < minIndex.length) {
            minIndex = element;
        }

    }
    return minIndex;
}

var friendName = ['shaker', 'tarek', 'atik', 'jishan', "s"];
var result = tinyFriend(friendName);
console.log(result);



