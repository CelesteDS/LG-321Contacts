let contactStorage = [] // here is where you'll store your contacts

/*
 * addContact
 *
 *  Arguments:
 *    firstName: String (required)
 *    lastName: String (required)
 *    email: String (required)
 *
 *  Example Usage:
 *    addContact("Betty", "Holberton", "betty.holberton@eniac.edu")
 *
 *  Returns:
 *    undefined
 */
const addContact = function(firstName, lastName, email) {
    if(typeof firstName ==='string' && typeof lastName ==='string' & typeof email === 'string'){
    contactStorage.push({
        "first_name": firstName,
        "last_name": lastName,
        "email": email
    })} else {
      throw {firstName, lastName, email}
      // note to future Celeste: figure out where/how to catch this exception
    }

};

/*
 * addContacts
 *
 *  Arguments:
 *    contacts: Array of contacts (required)
 *
 *  Example Usage:
 *    addContacts([
 *      {
 *        "first_name": "Tanny",
 *        "last_name": "Vibert",
 *        "email": "tvibert0@illinois.edu",
 *      },
 *      {
 *        "first_name": "Tova",
 *        "last_name": "Myall",
 *        "email": "tmyall1@instagram.com",
 *      }
 *    ])
 *
 *  Returns:
 *    undefined
 */
const addContacts = function(contacts) {
    var errorLog = [];
    var errExtant = false;
    console.log("Loading contact data...");
    for (var i = 0; i < contacts.length; i++) {
        try{
        addContact(contacts[i]["first_name"], contacts[i]["last_name"], contacts[i]["email"]);
      }catch(error){
          errExtant = true;
          errorLog.push(error);
      }

    }
    console.log("...Finished loading contact data. \n")
    if(errExtant){ return (printErrors(errorLog))}else {return ""}
}

//new function for printing errors
const printErrors = function(errArr){
  var errMsg = "Could not import "+errArr.length+" contacts.";
  for(var i = 0; i < errArr.length; i++){
    errMsg += `\nFirst: ${errArr[i]["firstName"]} , Last: ${errArr[i]["lastName"]}, Email: ${errArr[i]["email"]}`
  }
  return errMsg;
}

/*
 * printContacts
 *
 *  Arguments:
 *    none
 *
 *  Example Usage:
 *    addContacts()
 *
 *  Note: output goes to STDOUT using console.log
 *
 *  Returns:
 *    undefined
 */
const printContacts = function(errorMsg) {
  var nameCount = 1; //for counting the characters in each name
  var emailCount = 1; //for counting the chars in each email
  contactStorage.sort(function(a,b){
    var aFull = (a["first_name"]+a["last_name"]).toLowerCase();
    var bFull = (b["first_name"]+b["last_name"]).toLowerCase();
    if(aFull < bFull){
      return -1
    }
    if(aFull > bFull){
      return 1
    }
    return 0;
  });

  //this loop will find the value of the longest name & email
  for (var i = 0; i < contactStorage.length; i++) {
    if (contactStorage[i]["first_name"].length + contactStorage[i]["last_name"].length > nameCount) {
      nameCount = contactStorage[i]["first_name"].length + contactStorage[i]["last_name"].length;
    }
    if (contactStorage[i]["email"].length > emailCount) {
      emailCount = contactStorage[i]["email"].length;
    }
  }
    var line = "|"+"-".repeat(nameCount+2)+"+"+"-".repeat(emailCount+1)+"|";
    console.log('All Contacts:');
    console.log(`${line}
| Full Name${" ".repeat(nameCount-8)}| Email Address${" ".repeat(emailCount-13)}|
${line}`);
    for (var i = 0; i < contactStorage.length; i++) {
        var nameSpace = " ".repeat(nameCount-(contactStorage[i]["first_name"].length + contactStorage[i]["last_name"].length));
        var emailSpace = " ".repeat(emailCount-contactStorage[i]["email"].length);
        console.log('| ' + contactStorage[i]["first_name"] + ' ' + contactStorage[i]["last_name"] +nameSpace+
            '| ' + contactStorage[i]["email"] +emailSpace+ '|')
    }
    console.log(line);

  //printing errors should happen here??
  //best solution so far?
  console.log(errorMsg);
}







////////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
////////////////////////////////////////////////////////////

var errorMsg = addContacts([{
        "first_name": "Tanny",
        "last_name": "Vibert",
        "email": "tvibert0@illinois.edu",
    },
    {
        "first_name": "Tova",
        "last_name": "Myall",
        "email": "tmyall1@instagram.com",
    },
    {
        "first_name": "Engracia",
        "last_name": "Folger",
        "email": "efolger2@epa.gov",
    },
    {
        "first_name": "Conroy",
        "last_name": "Honsch",
        "email": "chonsch3@sohu.com",
    },
    {
        "first_name": "Virgina",
        "last_name": "Cankett",
        "email": "vcankett4@washington.edu",
    },
    {
        "first_name": "Mateo",
        "last_name": "Da Costa",
        "email": "mdacosta5@about.com",
    },
    {
        "first_name": "Ambrose",
        "last_name": "Scullard",
        "email": "ascullard6@timesonline.co.uk",
    },
    {
        "first_name": "Shaylah",
        "last_name": "Fairney",
        "email": "sfairney7@stumbleupon.com",
    },
    {
        "first_name": "Pier",
        "last_name": "Waine",
        "email": "pwaine8@unc.edu",
    },
    {
        "first_name": "Karita",
        "last_name": "Bough",
        "email": "kbough9@angelfire.com",
    },
    {
        "first_name": "Marguerite",
        "last_name": "Lafayette",
        "email": "mlafayettea@bravesites.com",
    },
    {
        "first_name": "Northrop",
        "last_name": "Bauchop",
        "email": "nbauchopb@pagesperso-orange.fr",
    },
    {
        "first_name": "Devon",
        "last_name": "Bocking",
        "email": "dbockingc@comcast.net",
    },
    {
        "first_name": "Willdon",
        "last_name": "Hedley",
        "email": "whedleyd@purevolume.com",
    },
    {
        "first_name": "Charil",
        "last_name": "Clegg",
        "email": "cclegge@weibo.com",
    },
    {
        "first_name": "Nessi",
        "last_name": "Bywaters",
        "email": "nbywatersf@shop-pro.jp",
    },
    {
        "first_name": "Mercy",
        "last_name": "Browncey",
        "email": "mbrownceyg@yelp.com",
    },
    {
        "first_name": "Didi",
        "last_name": "Grose",
        "email": "dgroseh@google.com.hk",
    },
    {
        "first_name": "Niccolo",
        "last_name": "Spruce",
        "email": "nsprucei@wordpress.com",
    },
    {
        "first_name": "Winston",
        "last_name": "Hixley",
        "email": "whixleyj@homestead.com",
    },
    {
      "first_name": 55,
      "last_name": "Myall",
      "email": "tmyall1@instagram.com"
    },
    {
      "first_name": "Virginia",
      "last_name": "Cankett",
      "email": true
    },
    {
      "first_name": "Willdon",
      "last_name": 22,
      "email": "whedleyd@purevolume.com"
    },
])


printContacts(errorMsg)
