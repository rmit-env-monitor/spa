export function getAQIStatus(air) {
    if (air >= 0 && air <= 50) {
        return 'good'
    } else if (air >= 51 && air <= 100) {
        return 'moderate'
    } else if (air >= 101 && air <= 150) {
        return 'sensitive'
    } else if (air >= 151 && air <= 200) {
        return 'unhealthy'
    } else if (air >= 201 && air <= 300) {
        return 'very-unhealthy'
    } else {
        return 'hazardous'
    }
}

export function getAQIStatusForText(air) {
    if (air >= 0 && air <= 50) {
        return 'text-good'
    } else if (air >= 51 && air <= 100) {
        return 'text-moderate'
    } else if (air >= 101 && air <= 150) {
        return 'text-sensitive'
    } else if (air >= 151 && air <= 200) {
        return 'text-unhealthy'
    } else if (air >= 201 && air <= 300) {
        return 'text-very-unhealthy'
    } else {
        return 'text-hazardous'
    }
}