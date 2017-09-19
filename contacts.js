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
 *    addContact('Betty', 'Holberton', 'betty.holberton@eniac.edu')
 *
 *  Returns:
 *    undefined
 */
const addContact = function (firstName, lastName, email) {
  contactStorage.push({
    'name': firstName + ' ' + lastName,
    'email': email
  })
}

/*
 * addContacts
 *
 *  Arguments:
 *    contacts: Array of contacts (required)
 *
 *  Example Usage:
 *    addContacts([
 *      {
 *        'first_name': 'Tanny',
 *        'last_name': 'Vibert',
 *        'email': 'tvibert0@illinois.edu',
 *      },
 *      {
 *        'first_name': 'Tova',
 *        'last_name': 'Myall',
 *        'email': 'tmyall1@instagram.com',
 *      }
 *    ])
 *
 *  Returns:
 *    undefined
 */
const addContacts = function (contacts) {
  console.log('Loading contact data...')
  contacts.forEach(function (element) {
    addContact(element.first_name, element.last_name, element.email)
  })
  console.log('...Finished loading contact data. \n')
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
const printContacts = function () {
  contactStorage.sort(function (a, b) {
    var aFull = (a.name).toLowerCase()
    var bFull = (b.name).toLowerCase()
    if (aFull < bFull) {
      return -1
    }
    if (aFull > bFull) {
      return 1
    }
    return 0
  })
  // Get the length of the longest name & email
  const nameCount = 1 + contactStorage.reduce(function (min, currentValue) {
    return Math.max(min, currentValue.name.length)
  }, 4)// for counting the characters in each name
  var emailCount = 1 + contactStorage.reduce(function (min, currentValue) {
    return Math.max(min, currentValue.email.length)
  }, 5)// for counting the chars in each email

  const line = `|${'-'.repeat(nameCount + 1)}+${'-'.repeat(emailCount)}|`
  console.log('All Contacts:')
  console.log(`${line}
| Full Name${' '.repeat(nameCount - 9)}| Email Address${' '.repeat(emailCount - 14)}|
${line}`)
  contactStorage.forEach(function (entry) {
    const nameSpace = ' '.repeat(nameCount - (entry.name.length))
    const emailSpace = ' '.repeat(emailCount - entry.email.length)
    console.log(`| ${entry.name}${nameSpace}|${entry.email}${emailSpace}|`)
  })
  console.log(line)
}

// //////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
// //////////////////////////////////////////////////////////

addContacts([{
  'first_name': 'Tanny',
  'last_name': 'Vibert',
  'email': 'tvibert0@illinois.edu'
},
{
  'first_name': 'Tova',
  'last_name': 'Myall',
  'email': 'tmyall1@instagram.com'
},
{
  'first_name': 'Engracia',
  'last_name': 'Folger',
  'email': 'efolger2@epa.gov'
},
{
  'first_name': 'Conroy',
  'last_name': 'Honsch',
  'email': 'chonsch3@sohu.com'
},
{
  'first_name': 'Virgina',
  'last_name': 'Cankett',
  'email': 'vcankett4@washington.edu'
},
{
  'first_name': 'Mateo',
  'last_name': 'Da Costa',
  'email': 'mdacosta5@about.com'
},
{
  'first_name': 'Ambrose',
  'last_name': 'Scullard',
  'email': 'ascullard6@timesonline.co.uk'
},
{
  'first_name': 'Shaylah',
  'last_name': 'Fairney',
  'email': 'sfairney7@stumbleupon.com'
},
{
  'first_name': 'Pier',
  'last_name': 'Waine',
  'email': 'pwaine8@unc.edu'
},
{
  'first_name': 'Karita',
  'last_name': 'Bough',
  'email': 'kbough9@angelfire.com'
},
{
  'first_name': 'Marguerite',
  'last_name': 'Lafayette',
  'email': 'mlafayettea@bravesites.com'
},
{
  'first_name': 'Northrop',
  'last_name': 'Bauchop',
  'email': 'nbauchopb@pagesperso-orange.fr'
},
{
  'first_name': 'Devon',
  'last_name': 'Bocking',
  'email': 'dbockingc@comcast.net'
},
{
  'first_name': 'Willdon',
  'last_name': 'Hedley',
  'email': 'whedleyd@purevolume.com'
},
{
  'first_name': 'Charil',
  'last_name': 'Clegg',
  'email': 'cclegge@weibo.com'
},
{
  'first_name': 'Nessi',
  'last_name': 'Bywaters',
  'email': 'nbywatersf@shop-pro.jp'
},
{
  'first_name': 'Mercy',
  'last_name': 'Browncey',
  'email': 'mbrownceyg@yelp.com'
},
{
  'first_name': 'Didi',
  'last_name': 'Grose',
  'email': 'dgroseh@google.com.hk'
},
{
  'first_name': 'Niccolo',
  'last_name': 'Spruce',
  'email': 'nsprucei@wordpress.com'
},
{
  'first_name': 'Winston',
  'last_name': 'Hixley',
  'email': 'whixleyj@homestead.com'
}
])

printContacts()
