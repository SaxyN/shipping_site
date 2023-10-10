import IMAGES from "./assets/images"

export default function ImageHandler(img: string) {
    console.log(IMAGES.performanceTurbo);

    switch (img) {
        case "simpleTurbo":
            return IMAGES.simpleTurbo;
        case "strongTurbo":
            return IMAGES.strongTurbo;
        case "performanceTurbo":
            return IMAGES.performanceTurbo;
        case "racingTurbo":
            return IMAGES.racingTurbo;
        case "tailLight":
            return IMAGES.tailLight;
        default:
            break;
    }
}
