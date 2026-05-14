async function getSuggestion() {
    const response = await fetch('https://apis.scrimba.com/board/api/activity')
    const data = await response.json()
    console.log(data)
}

getSuggestion()