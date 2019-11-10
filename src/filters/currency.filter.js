export default function currencyFilter(value, currency = 'KZT') {
    return new Intl.NumberFormat('ru-Ru', {
        style: 'currency',
        currency
    }).format(value)
}
