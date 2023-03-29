/**
 * This file is dedicated for the usage of fontawesome icons
 * as well as the the importing of icons
 *      - Importing icons manually allows saving of space, as not all icons from the library would be used
 * */ 

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// Brand Icons
import {
    faInstagram,
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'

import {
    faXmark,
    faChevronRight,
    faChevronLeft,
    faCircle as fasCircle,
} from '@fortawesome/free-solid-svg-icons'

import {
    faCircle as farCircle,
    faCircleDot
} from '@fortawesome/free-regular-svg-icons'

// Define icons to be used here
const icons = [
    faInstagram,
    faTwitter,
    faFacebook,
    faXmark,
    faChevronRight,
    faChevronLeft,
    fasCircle,
    farCircle,
    faCircleDot
]

library.add(...icons)
export default FontAwesomeIcon