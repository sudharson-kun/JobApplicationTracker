function Add() {
  const JobApp = document.getElementById('JobPortal').value.trim();
  const Cname = document.getElementById('CompanyName').value;
  const Role = document.getElementById('Role').value;
  const Date = document.getElementById('Date').value;
  const Status = document.getElementById('Status').value;

  const table = document.getElementById('outputTable');
  const newRow = document.createElement('tr');

  const logoKey = JobApp.toLowerCase();

  const logoMap = {
    linkedin: 'images/LinkedIn.png',
    indeed: 'images/Indeed.png',
    naukri: 'images/Naukri.png',
    monster: 'images/Monster.png',
    glassdoor: 'images/glassdoor.png',
  };

  const logoImg = `<img src="${logoMap[logoKey] || 'images/default.png'}" alt="${JobApp}" title="${JobApp}" width="70" height="50">`;

  newRow.innerHTML = `
    <td>${logoImg}</td>
    <td>${Cname}</td>
    <td>${Role}</td>
    <td>${Date}</td>
    <td>${Status}</td>
  `;

  table.appendChild(newRow);

  document.getElementById('JobPortal').value = '';
  document.getElementById('CompanyName').value = '';
  document.getElementById('Role').value = '';
  document.getElementById('Date').value = '';
  document.getElementById('Status').value = 'Applied';
}
