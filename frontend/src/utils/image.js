export default function base64ToImageData(base64String) {
    return `data:image/jpeg;base64,${base64String}`
}