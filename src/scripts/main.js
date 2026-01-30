'use strict';

const table = document.querySelector('table');

const headerRow = table.querySelector('thead tr');
const secondTh = headerRow.children[1];

headerRow.insertBefore(secondTh.cloneNode(true), headerRow.children[4]);

const tbodyRows = table.querySelector('tbody').rows;

for (const tr of tbodyRows) {
  const secondTd = tr.children[1];

  tr.insertBefore(secondTd.cloneNode(true), tr.children[4]);
}
