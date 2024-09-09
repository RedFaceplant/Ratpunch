const button = document.getElementById("clickMe")
const colorInput = document.getElementById("startColor")
const table = document.getElementById("table")

button.onclick = doFunction;

let color = "Red"
renderTable()

function doFunction(){
    color = colorInput.value
    if(!color){
        color = "red"
    }
    color = capitalFirst(color.toLowerCase())
    renderTable()
}

function renderTable(){
    // headers
    table.innerHTML = (`
        <tr>
            <th>
                Pattern
            </th>
            <th>
                Output
            </th>
        </tr>
    `)

    // normal
    table.innerHTML += createRow("Red Faceplant", `${color} Faceplant`)

    // ratpunch
    table.innerHTML += createRow("Red Ratpunch", `${color} Ratpunch`)

    // swap first letters
    table.innerHTML += createRow("Fed Raceplant", `F${color.slice(1) + " " + color.slice(0,1)}aceplant`)

    // reversed, preserve word order
    table.innerHTML += createRow("Der Tnalpecaf", `${capitalFirst([...color.toLowerCase()].reverse().join(""))} Tnalpecaf`)

    // invert word but preserve space
    const fullName = `${color} Faceplant`
    const spacePos = fullName.indexOf(" ")
    const reversed = [...fullName.replace(/\s+/g, '').toLowerCase()].reverse().join("")
    table.innerHTML += createRow("Tna Lpecafder", `${capitalFirst(reversed.slice(0,spacePos))+" "+capitalFirst(reversed.slice(spacePos))}`)

    // remove first letter
    table.innerHTML += createRow("Ed Aceplant", `${capitalFirst(color.slice(1))} Aceplant`)

    // sorted
    const preSort = fullName.toLowerCase().replace(/\s+/g, '')
    const sorted = sortString(preSort)
    table.innerHTML += createRow("Aac Deeflnprt", `${capitalFirst(sorted.slice(0,spacePos))+" "+capitalFirst(sorted.slice(spacePos))}`)

    // no vowels
    table.innerHTML += createRow("Rd Fcplant", `${capitalFirst(removeVowels(color))} Fcplant`)
}


function createRow(theme, output){
    return (`
        <tr>
            <td>
                '${theme}'
            </td>
            <td>
                ${output}
            </td>
        </tr>
    `)
}

// thanks to some dude on Stack Overflow
function capitalFirst(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

// thanks to GeeksForGeeks
function sortString(stringg){
    return stringg.split("").sort().join("");
};

function removeVowels(strng){
    return strng.toLowerCase().replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '')
}