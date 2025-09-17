//your JS code here. If required.

const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitBtn.addEventListener("click", function(e) 
{
	e.preventDefault();

	if(title.value === "" || author.value === "" || isbn.value === "")
	{
		alert("Please fill in the fields");
		return;
	}

	const row = document.createElement("tr");

	row.innerHTML = `
	<tr>${title.value}</td>
	<td>${author.value}</td>
	<td>${isbn.value}</td>
	<td><button class="delete">Clear</button></td>`;

	bookList.appendChild(row);

	title.value = "";
	author.value = "";
	isbn.value = "";
})

bookList.addEventListener("click", function (e) 
{
	if (e.target.classList.contains("delete")) 
	{
		e.target.parentElement.parentElement.remove();
	}
});











































