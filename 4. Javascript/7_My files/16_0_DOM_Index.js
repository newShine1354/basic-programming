// Creating Html Element
// let new_div = document.createElement('div');
// new_div.remove

// Searching DOM
// document.getElementsByClassName(""); // returns html collection
// document.getElementById("");
// document.querySelector("")
// document.querySelectorAll(""); // returns node list
// document.getElementsByTagName("")
// document.getElementsByName("")

// Parent, sibling and child
// document.body.firstChild
// document.body.firstElementChild
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// console.log(document.body.hasChildNodes);
// document.body.nextSibling
// document.body.previousSibling
// document.body.parentNode
// document.body.parentElement

// console.log(t.rows);
// console.log(t.caption);
// console.log(t.tHead.firstElementChild);
// console.log(t.tFoot);
// console.log(t.tBodies);
// console.log(t.rows[0].cells);
// console.log(t.rows[1].rowIndex);
// console.log(t.rows[2].sectionRowIndex);
// console.log(t.rows[0].cells[3].cellIndex);
// console.log(this);

// document.body.getElementsByClassName("")[0].matches("");
// document.body.getElementsByClassName("")[0].closest("");
// document.body.getElementsByClassName("")[0].contains("");

// Adding text to elements
// document.getElementById("").innerHTML = "hjkl"
// document.getElementById("").textContent = "hjkl"
// document.getElementById("").innerText = "dsa"

// tagname
// nodename

// Hidden Property.
document.getElementById("").hidden = true;
// first.hidden = false; // (Default)
// console.log(first.hidden);

// Attributemethods
// getAttribute("")
// hasAttribute("")
// setAttribute("hidden", "true")
// removeAttribute("hidden", "true")
// .attributes

// Insersertion Methods
// let new_div = document.createElement('div');
// a.append(new_div) // end of node
// new_div.className = "new_div"
// a.prepend(new_div); // Beginning of the node.
// a.before(new_div); // Before the node.
// a.after(new_div); // After the node.
// first.insertAdjacentHTML(
//   "beforebegin",
//   '<div class = "text">beforebegin</div>'
// );
// first.insertAdjacentHTML("beforeend", '<div class = "text">beforeend</div>') // Beforeend works same as append.
// first.insertAdjacentHTML("afterbegin", '<div class = "text">afterbegin</div>')
// first.insertAdjacentHTML("afterend", '<div class = "text">afterend</div>')

// classlist Methods
// Id.className = "fjkj h j fds";
//  console.log(first.classList); // Returns token list
// first.classList.add("yellow");
// first.classList.remove("yellow");
// first.classList.toggle("red") // if class exists, this method will remove it otherwise adds it.
// document.write(first.classList.contains("red"))

// EnventListerners