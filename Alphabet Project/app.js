const value = document.getElementById('letter');
const btn = document.getElementById('btn');
const output = document.getElementById('output')
const vowels = [
    "a", "e", "i", "o", "u"
]
const vow = {
    a: 1, e: 2, i: 3, o: 4, u: 5
}
console.log(value)
btn.addEventListener('click', (e) => {
    let temp = value.value
    e.preventDefault()
    if (!value.value) {
        btn.style.backgroundColor = "red";
    } else {
        btn.style.backgroundColor = "#4b5563";
        let str = ''
        for (let i = 0; i < temp.length; i++) {
            // if (vow[temp[i]]) str += vow[temp[1]]
            if (vowels.indexOf(temp[i]) !== -1) {
                str += vowels.indexOf(temp[i])
                console.log(vowels.indexOf(temp[i]))
            }
            else str += (temp[i] + "a")
        }
        console.log(str)
    }

    output.innerHTML = (str);
})
jungleCode = {
    "a": "1",
    "b": "ba",
    "c": "ca",
    "d": "da",
    "e": "2",
    "f": "fa",
    "g": "ga",
    "h": "ha",
    "i": "3",
    "j": "ja",
    "k": "ka",
    "l": "la",
    "m": "ma",
    "n": "na",
    "o": "4",
    "p": "pa",
    "q": "qa",
    "r": "ra",
    "s": "sa",
    "t": "ta",
    "u": "5",
    "v": "va",
    "w": "wa",
    "x": "xa",
    "y": "ya",
    "z": "za"
};
    
