const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

const updateUI = (data) => {
    document.getElementById('polarity').innerHTML = `Polarity: ${data.polarity}`;
    document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
}

function handleSubmit(e) {
    e.preventDefault()
    let formText = document.getElementById('url').value

    if (Client.checkUrl(formText)) {
        console.log("::: Form Submitted :::")
        postData('/http://localhost:8081/mcapi', { url: formText })
            .then((function (data) {
                updateUI(data)
            }))
    } else {
        alert('Please enter a valid URL.');
    }
}

export { handleSubmit }
