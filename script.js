 const titleEl  = document.getElementById('title');
    const authorEl = document.getElementById('author');
    const isbnEl   = document.getElementById('isbn');
    const submit   = document.getElementById('submit');
    const bookList = document.getElementById('book-list');

    // helper to create a text cell
    function makeCell(text){
      const td = document.createElement('td');
      td.textContent = text;
      return td;
    }

    // Add book on click
    submit.addEventListener('click', () => {
      const title  = titleEl.value.trim();
      const author = authorEl.value.trim();
      const isbn   = isbnEl.value.trim();

      if (!title || !author || !isbn) {
        alert('Please fill in all fields');
        return;
      }

      const tr = document.createElement('tr');
      tr.appendChild(makeCell(title));
      tr.appendChild(makeCell(author));
      tr.appendChild(makeCell(isbn));

      const tdActions = document.createElement('td');
      const delBtn = document.createElement('button');
      delBtn.type = 'button';          // avoids accidental form submit behavior
      delBtn.className = 'delete';     // required by tests
      delBtn.textContent = 'Clear';
      delBtn.addEventListener('click', () => tr.remove());
      tdActions.appendChild(delBtn);
      tr.appendChild(tdActions);

      bookList.appendChild(tr);

      // clear inputs for next entry
      titleEl.value = '';
      authorEl.value = '';
      isbnEl.value = '';
      titleEl.focus();
    });

    // allow Enter key to add too (optional but helpful)
    [titleEl, authorEl, isbnEl].forEach(inp => {
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submit.click();
        }
      });
    });