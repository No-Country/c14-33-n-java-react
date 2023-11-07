export const formatDate = date => {
    const newDate = new Date(date.split('T')[0].split('-'))
    const x = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return newDate.toLocaleDateString('es-ES', x)
}