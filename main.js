console.log('hello from main');
const workshopsDiv = document.querySelector('#workshops');

function loadWorkshops() {
    fetch('http://localhost:8081/workshops')
        .then(response => {
            response.json()
                .then(workshops => {
                    const allWorkshops = workshops.map(t => `<div><b>${t.title}</b> ${t.description} <b>(Mentor(s): ${t.mentors})</b>   </div>`)
                        .join('');

                    workshopsDiv.innerHTML = allWorkshops;
                });
        })
        .catch(console.error);
}

loadWorkshops();

