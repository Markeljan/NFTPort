let melle = {
    name: "Warrior",
    description: "A master of STRENGTH. Strong vs range, weak vs magic.",
    url: "ipfs://bafkreifgcsikhlntoiuhvrqtaja63wqeehx4fte5f3q5uvajf3bu5w252a" }
let ranger = {
    name: "Ranger",
    description: "A master of DEXTERITY. Strong vs magic, weak vs melle.",
    url: "ipfs://bafkreigmvgx5xygyhfpji477u7ttgr54cpmglnrcyrle4urfr5i6rqsvni"}
let mage = {
    name: "Wizard",
    description: "A master of INTELLIGENCE.  Strong vs melle, weak vs range.",
    url: "ipfs://bafkreiawatmwljcpp7tueiami2fgjl3vfcb4xjgrxzmsyt66do2xcwqazq"}

let classesArray = [melle, ranger, mage];

var fs = require('fs');

for( let i = 0; i < classesArray.length; i++){
    let metadata = {
        "description": classesArray[i].description,
        "image": classesArray[i].url,
        "attributes": [
            {
                "trait_type": "Class",
                "value": classesArray[i].name },
            {
                "trait_type": "Vitality", 
                "value": "10" },
            {
                "trait_type": "Attack", 
                "value": "1" },
              {
                "trait_type": "Luck", 
                "value": "0" }, ]
    };

    var metadataJSON = JSON.stringify(metadata);

    fs.writeFile(`./Metadata/newMD${i}.json`, metadataJSON, function(err, result) {
        if(err) console.log('error', err);
    });
}
