export function FormatarData(data){
    const brasilDateTime = formatDateTime(data);
    return brasilDateTime
}

function formatDateTime(data){
    const dataObj = new Date(data);
    const day = dataObj.getUTCDate().toString().padStart(2,"0");
    const month = (dataObj.getUTCMonth()+1).toString().padStart(2,"0");
    const year = dataObj.getUTCFullYear().toString();
    const hours = dataObj.getUTCHours().toString().padStart(2,"0");
    const minutes = dataObj.getUTCMinutes().toString().padStart(2,"0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}
