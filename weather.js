async function cash(name)
{
    let infoBox = document.getElementById("infoBox");
    let response = await fetch(
        `https://developers.parsijoo.ir/web-service/v1/price/?q=${name}&type=search`,
        {
            headers:{
                'api-key':"your-api"
            }
        }
    )

    let dt = await response.json()
    let headerInfo = dt.result.header
    let bodyInfo = dt.result.data[0]
    let title = dt.result.title

    infoBox.innerHTML = `
    <h2>جستجو برای: ${title}</h2>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">${headerInfo[0].value}</th>
                <th scope="col">${headerInfo[1].value}</th>
                <th scope="col">${headerInfo[2].value}</th>
                <th scope="col">${headerInfo[3].value}</th>
                <th scope="col">${headerInfo[4].value}</th>
                <th scope="col">${headerInfo[5].value}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">${bodyInfo.fields[0].value}</th>
                <td>${bodyInfo.fields[1].value}</td>
                <td>${bodyInfo.fields[2].value}</td>
                <td>${bodyInfo.fields[3].value}</td>
                <td>${bodyInfo.fields[4].value}</td>
                <td>${bodyInfo.fields[5].value}</td>
            </tr>
        </tbody>
    </table>
    `
}
let formS = document.querySelector("#formS")
formS.addEventListener("submit", e => {
    e.preventDefault()
    cash(e.target.cash.value)
})
