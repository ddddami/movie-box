import { IMAGE_BASE_URL } from "../config";

export function getOriginalImage (path) {
    return `${IMAGE_BASE_URL}/original${path}`
} 
export function getSmallImage (path) {
    return `${IMAGE_BASE_URL}/w500${path}`
} 