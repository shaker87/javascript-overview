var name = ['shaker h', 'tarek', 'atik ah', 'mehraj hossian', "sh"];

var shortName = name[0].length;

for (var i = 0; i < name.length; i++) {
    var element = name[i].length;
    if (element < shortName) {
        shortName = element;
    }

}
// console.log(shortName);


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

var friendName = ['shaker h', 'tarek', 'atik ah', 'mehraj hossian', "sh"];
var result = tinyFriend(friendName);
console.log(result);


