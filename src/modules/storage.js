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

    console.log(JSON.parse(localValue))

    return JSON.parse(localValue)
}

export function updateTrash(items){
    console.log('atualizar', items)
    localStorage.setItem("trash", JSON.stringify(items))
}