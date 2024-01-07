export function fetchStorage() {
    const localValue = localStorage.getItem("todos")
    if (localValue == null) return []

    return JSON.parse(localValue)
}

export function updateStorage(items) {
    localStorage.setItem("todos", JSON.stringify(items))
}