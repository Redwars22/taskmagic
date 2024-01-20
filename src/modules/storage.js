export function fetchStorage() {
    const localValue = localStorage.getItem("todos")
    if (localValue == null) return []

    return JSON.parse(localValue)
}

export function updateStorage(items) {
    localStorage.setItem("todos", JSON.stringify(items))
}

export function fetchTrash(){
    const localValue = localStorage.getItem("trash")
    if (localValue == null) return []

    return JSON.parse(localValue)
}

export function updateTrash(items){
    localStorage.setItem("trash", json.stringify(items))
}