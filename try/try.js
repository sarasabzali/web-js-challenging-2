// // get favorites from local storage or empty array
// var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// // add class 'fav' to each favorite
// favorites.forEach(function(favorite) {
//   document.getElementById(favorite).className = 'fav';
// });
// // register click event listener
// document.querySelector('.list').addEventListener('click', function(e) {
//   var id = e.target.id,
//       item = e.target,
//       index = favorites.indexOf(id);
//   // return if target doesn't have an id (shouldn't happen)
//   if (!id) return;
//   // item is not favorite
//   if (index == -1) {
//     favorites.push(id);
//     item.className = 'fav';
//   // item is already favorite
//   } else {
//     favorites.splice(index, 1);
//     item.className = '';
//   }
//   // store array in local storage
//   localStorage.setItem('favorites', JSON.stringify(favorites));
// });

// // local storage stores strings so we use JSON to stringify for storage and parse to get out of storage


// function information() {
//     var name = info.name.value;
//     var add = info.address.value;
//     var jab = info.jab.value;
//     var camm = info.command.value;

// document.writeIn("<table cellpadding='5' with='50%' alir='center' bgcolor='#eaeaea' bordercolor='#000000'>");
// document.writeln("<caption> <h3>information in inter <h3></caption>");
// document.writeln("<tr><td> <b>name: </b></td> <td>" + name + "</td> </tr>");

// document.writeln("<tr><td> <b>address: </b></td> <td>" + add + "</td> </tr>");
// document.writeln("<tr><td> <b>command: </b></td> <td>" + job + "</td> </tr>");
// document.writeln("<tr><td> <b>command: </b></td> <td>" + comm + "</td> </tr>");
// document.writeln("</table>");
// }

// 9999999999999999999999999999999999999999999999999999999999999

function saveME() {
    let favor = [
        {
        name: 'one1',
        rating: 'one2'
        }
        ,
        {
            name:'two1',
            name:'two2'
        }
    ]

favor = JSON.stringify(favor);
localStorage.setItem('sara', JSON.stringify(favor));
};