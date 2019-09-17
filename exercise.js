/*
*
1. todo: Create a class called Song() with two properties:
 - songName (private member)
 - bandName (private member)
*
2. todo: Add two methods to the prototype:
 - countName (count the total number of words in the song name, this method will be hidden and not accessible for the users hint: abstraction)
 - getSongInfo (This method will return the name of the band and number of words in the song -> countName)
*
3. todo: Create an instance with new keyword
 - call the getSongInfo method from the created object
*
4. todo: make songName private
* */

/*
function Song(_songName, bandName){
    // properties
    const songName = _songName;
    this.getSongName = () => { return songName; };
    this.bandName = bandName;

    let countName = () => { return 'Calculate the words in: ' + this.getSongName() };
    this.getSongInfo = () => {return 'Name of the band is: ' + this.bandName + ' and the words count in the song is: ' + countName()}
}

const nothingElseMatters = new Song('Nothing Else Matters', 'Metallica');
console.log(nothingElseMatters.getSongInfo());
*/

/*
* Useful information:
* Why function name for the class start with a capital letter?
* It is convention; it helps to distinguish between a regular function and a class.
*
* What is this?
* It's an arbitrary placeholder object that lives in the scope.
* Every scope has a this object! It's simply a placeholder that points to the current object.
* */
